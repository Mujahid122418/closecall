import { StyleSheet, Dimensions } from 'react-native';
import colorCode from '../../../constants/ColorCode';
import { color } from 'react-native-elements/dist/helpers';
const deviceHeight = Dimensions.get('screen').height;
export default StyleSheet.create({
  container: {
    backgroundColor: colorCode.secondaryThemeColor,
    flex: 1,
  },
  headerContainer: {
    height: 60,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  locationText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
  emptyList: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flex: 1,
    height: deviceHeight - 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    height: '100%',
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
  },
  filtersContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  filterButtonContainer: {
    borderRadius: 2,
    width: '50%',
    height: 50,
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  filterText: {
    color: colorCode.secondaryThemeColor,
    fontWeight: '600',
    fontSize: 15,
  },
  Title: {
    color: colorCode.secondaryThemeColor,
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 20,
    marginBottom: 3,
  },
  TitleModal: {
    color: colorCode.secondaryThemeColor,
    fontWeight: '700',
    fontSize: 20,
  },
  TitleCloseModal: {
    color: colorCode.secondaryThemeColor,
    fontWeight: '700',
    fontSize: 15,
  },
  TitleBooking: {
    color: colorCode.secondaryThemeColor,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
  },
  orderBooking: {
    color: '#857B85',
    fontWeight: '700',
    fontSize: 12,
    marginTop: 10,
  },
  DateBooking: {
    color: colorCode.secondaryFontColor,
    fontWeight: '700',
    fontSize: 12,
    marginTop: 10,
  },
  bookingCardContainer: {
    padding: 10,
    
  },
  divider: { width: '100%', height: 1, backgroundColor: '#F1F1F5' },
  statusContainer: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 29,
  },
  filterNumber: {
    backgroundColor: '#F47240',
    height: 25,
    width: 25,
    borderRadius: 30,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  detailsText: {
    color: colorCode.orange,
    fontWeight: '600',
    fontSize: 13,
    marginRight: 10,
  },
  modalStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: '100%',
    alignSelf: 'center',
  },
  modalContentStyle: {
    padding: 20,
  },
  modalContentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalizeContainer: {
    padding: 16,
    height: '100%',
  },
  emptyCartText: {
    marginTop: 10,
    color: colorCode.secondaryFontColor,
  },
  emptyListContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  containerCheck: {
    backgroundColor: 'white',
    borderColor: 'white',
  },
  checkImg: {
    height: 20,
    width: 20,
  },

  // model
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    width:'90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#009387',
    width:'50%'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },


  containerSearch: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: '#f2f2f2',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    // justifyContent:'center',
    
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    width:'90%',
    color:'black'
  },


  btnSearch: {
    backgroundColor:'white',
    width:'10%',
    height:37,
    marginLeft:5,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
    
  },
});
