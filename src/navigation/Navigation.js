import * as React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/login/Login';
import Signup from '../screens/signup/Signup';
import {Header} from 'react-native/Libraries/NewAppScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard/Dashboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginUser} from '../screens/api/api';
import {useMutation} from 'react-query';
import {AuthContext} from '../components/context';
import {Title} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TwilioSettings from '../screens/Dashboard/TwilioSettings';
import Call from '../screens/Dashboard/Call';

const Tab = createBottomTabNavigator();

const RootStack = createNativeStackNavigator();

const initialLoginState = {
  isLoading: true,
  userName: null,
  userToken: null,
};

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="Login" component={Login} />
    <RootStack.Screen name="Signup" component={Signup} />
  </RootStack.Navigator>
);

function Navigation() {
  // const [userToken, setuserToken]= React.useState(null)

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );
  const authContext = React.useMemo(
    () => ({
      signIn: async foundUser => {
        // setUserToken('fgkj');
        // setIsLoading(false);
        const userToken = String(foundUser.email);
        const userName = foundUser.email;

        try {
          await AsyncStorage.setItem('login', JSON.stringify(foundUser));
        } catch (e) {
          console.log(e);
        }
        // console.log('user token: ', userToken);
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem('login');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
      },
      toggleTheme: () => {
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
      },
    }),
    [],
  );
  React.useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('login');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Dashboard') {
                  iconName = focused ? 'home' : 'home';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'gears' : 'gears';
                }else if(route.name === 'Call'){
                  iconName = focused ? 'phone' : 'phone';

                }

                // You can return any component that you like here!
                return (
                  <FontAwesome name={iconName} size={size} color={color} />
                );
              },
              tabBarActiveTintColor: '#009387',
              tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen
              name="Dashboard"
              options={{
                headerTitle: 'Number List',
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => authContext.signOut()}
                    style={{marginRight: 15}}>
                    <FontAwesome name="power-off" color="#05375a" size={20} />
                  </TouchableOpacity>
                ),
              }}
              component={Dashboard}
            />
            <Tab.Screen name="Settings" component={TwilioSettings} />
            <Tab.Screen name="Call" component={Call} />

          </Tab.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default Navigation;
