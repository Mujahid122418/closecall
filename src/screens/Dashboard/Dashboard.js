import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Image,
  Dimensions,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {BuyNumber, GetNumbers, url , SearchNumbersByArea} from '../api/api';
import {useMutation} from 'react-query';
import styles from './style';
import {DotIndicator} from 'react-native-indicators';
import {Card} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {ShowToast} from '../../utils/ShowToast';
import axios from 'axios';
import RadioForm from 'react-native-simple-radio-button';
import {Loader} from '../../utils/Loader';
const deviceHeight = Dimensions.get('screen').height;
export default function Dashboard() {
  const [radio_props, setradio_props] = useState([
    {label: 'Seach Locally', value: 1},
    {label: 'Search by Area Code', value: 2},
  ]);
  const [type, setType] = React.useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [NumberList , setNumberList] = useState([])
  const {
    data: GetNumberByArea,
    isLoading : isLoadingByArea,
    
   
    mutate :SearchNumberByArea ,
  } = useMutation(SearchNumbersByArea);
  const handleSearch = async () => {
    try {
      let user = await AsyncStorage.getItem('User');
      user = JSON.parse(user);
      console.log('user here ==>', user?.id);
      // onSearch(searchQuery);
      let send = {
        user_id: user?.id,
        area_code: searchQuery,
      };
      SearchNumberByArea(send)
      // console.log('search area', send);
      // let res = await axios.post(url + '/api.php?cmd=get_numbers', send);
      // console.log('res data', res?.data);
      // if(res?.data?.success){
      //   setNumberList(res?.data?.data)
      // }
    } catch (error) {
      console.log('search error', error);
    }
  };

  const {
    data: GetNumber,
    isLoading,
    isError,
    error,
    mutate,
  } = useMutation(GetNumbers);
useEffect(()=>{
  if(type == 1){
    setNumberList(GetNumber?.data)
  }else if(type == 2){
    setNumberList(GetNumberByArea?.data)

  }

},[GetNumber , GetNumberByArea , type])
  // buy number sstart
  const {
    data: BuyNumberData,
    isLoading: isLoadingBuyNymber,
    isError: isErrorBuyNymber,
    mutate: BuyNumberHandler,
  } = useMutation(BuyNumber);

  const BuyNumberButton = async e => {
    try {
      let user = await AsyncStorage.getItem('User');
      user = JSON.parse(user);
      console.log('user here ==>', user?.id);
      let send = {
        user_id: user?.id,
        phone_number: e,
      };
      console.log('buy numnbe', send);
      BuyNumberHandler(send);
    } catch (error) {
      console.log('buy number err', error);
    }
  };

  useEffect(() => {
    if (BuyNumberData?.success == true) {
      ShowToast('Success', BuyNumberData?.message, 'success');
    }
  }, [BuyNumberData]);
  // buy number end

  const [refreshing, setRefreshing] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const init = async () => {
    let user = await AsyncStorage.getItem('User');
    user = JSON.parse(user);

    if (user?.first_time_login == '1') {
      setModalVisible(true);
    }
  };
  useEffect(() => {
    init();
  }, []);

  // console.log("GetNumber", GetNumber);
  const emptyList = () => {
    return (
      <View style={styles.emptyList}>
        <Image
          source={require('../../../assets/tabIcons/booking.png')}
          style={styles.emptyCartImg}
        />
        <Text style={styles.emptyCartText}>No Record Found!</Text>
      </View>
    );
  };

  useEffect(() => {
    const init = async () => {
      let user = await AsyncStorage.getItem('User');
      user = JSON.parse(user);
      console.log('type', type, searchQuery , type == 2 && searchQuery == null);
      if (type == 1) {
       
        let send = {
          user_id: user?.id,
        };
        mutate(send);
      } else if (type == 2 && searchQuery == null) {
        alert('2');
        let send = {
          user_id: user?.id,
          area_code: searchQuery,
        };
        console.log('search query', send);
        SearchNumberByArea(send);
      }
    };
    init();
  }, [type]);

  const onRefresh = async () => {
    let user = await AsyncStorage.getItem('User');
    user = JSON.parse(user);
    setRefreshing(true);
    let send = {
      user_id: user?.id
    };
    // mutate(send);
  };

  useEffect(() => {
    if (!isLoading) {
      setRefreshing(false);
    }
  }, [isLoading]);

  return (
    <View>
      
      <View style={{marginTop: 35, alignItems: 'center'}}>
        <RadioForm
          radio_props={radio_props}
          // initial={0}
          formHorizontal={true}
          animation={true}
          onPress={value => setType(value)}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '95%',
          }}
        />
      </View>
      {type == '2' && (
        <View style={styles.containerSearch}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#666666"
            placeholder="Search by Area code..."
            onChangeText={text => setSearchQuery(text)}
          />

          <TouchableOpacity
            style={styles.btnSearch}
            onPress={() => handleSearch()}>
            <FontAwesome name="search" color="black" size={20} />
          </TouchableOpacity>
        </View>
      )}
     
      {isLoading && <Loader loading={true} />}
      {isLoadingBuyNymber && <Loader loading={true} />}
      {isLoadingByArea && <Loader loading={true} />}


      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={NumberList}
        ListEmptyComponent={() => emptyList()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
           
          />
        }
        renderItem={({item, index}) => (
          <>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{borderRadius: 20}}
              //  onPress={() => props.navigation.navigate('EventsDetails', { event: item })}
            >
              <Card style={{borderRadius: 20}}>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderRadius: 20,
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          marginTop: 2,
                          marginBottom: 2,
                        }}>
                        <Text style={{color:'black'}}>locality </Text>
                        <Text style={{color:'black'}}> {item.locality}</Text>
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          width: '80%',
                        }}>
                        <Text style={{color:'black'}}>
                          Number : {item?.phone_number}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <TouchableOpacity
                        style={{
                          borderColor: '#009387',
                          borderWidth: 1,
                          padding: 5,
                          borderRadius: 10,
                        }}
                        onPress={() => BuyNumberButton(item?.phone_number)}>
                        <Text style={{color:'black'}}>Buy Number</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      width: '80%',
                    }}>
                    <View>
                      <Text style={{color:'black'}}>capabilities</Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                      }}>
                      <Text style={{color:'black'}}>
                        Voice{' '}
                        <FontAwesome
                          name={item?.capabilities?.voice ? 'check' : 'times'}
                          color={item?.capabilities?.voice ? 'green' : 'red'}
                          size={15}
                        />
                      </Text>
                      <Text style={{color:'black'}}>
                        {' '}
                        SMS{' '}
                        <FontAwesome
                          name={item?.capabilities?.SMS ? 'check' : 'times'}
                          color={item?.capabilities?.SMS ? 'green' : 'red'}
                          size={15}
                        />
                      </Text>
                      <Text style={{color:'black'}}>
                        MMS{' '}
                        <FontAwesome
                          name={item?.capabilities?.MMS ? 'check' : 'times'}
                          color={item?.capabilities?.MMS ? 'green' : 'red'}
                          size={15}
                        />
                      </Text>
                    </View>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          </>
        )}></FlatList>
      {/* ) : (
         <View style={{display:'flex' , alignItems:'center' , justifyContent:'center' , backgroundColor:'red' , height:'auto'}}>
       <DotIndicator color={'blue'} size={8} />
       </View>
     )} */}
    </View>
  );
}
