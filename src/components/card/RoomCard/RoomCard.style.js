import {StyleSheet,Dimensions} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    width:156,
    minHeight:156,
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 8,
    borderRadius: 20,
    borderWidth:2,
    borderColor:colors.orange,
    backgroundColor:"#faf8f0"
  },
  upper_container:{
    flex:1,
    // borderWidth:1,
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
  },
  lower_container:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-evenly",
    // borderWidth:1,
    alignItems:"center"
  },
  icon_container:{
    // borderWidth:1,
    alignItems:"center"
  },
  name:{
    fontSize:20,
    // fontWeight:"bold",
    color:colors.orange,
    textAlign:"center",
    fontFamily:"Larken-Extra-Bold"
  },
  tag:{
    fontSize:18,
    color:colors.orange,
    textAlign:"center",
    fontFamily:"SourceSansPro-Italic"
  },
  creator:{
    fontSize:18,
    color:colors.orange,
    textAlign:"center",
    fontFamily:"SourceSansPro-Regular"

  },
  user_number:{
    fontSize:18,
    color:colors.orange,
    // fontWeight:"bold",
    fontFamily:"SourceSansPro-Bold"

  },
  message_number:{
    fontSize:18,
    color:colors.orange,
    // fontWeight:"bold",
    fontFamily:"SourceSansPro-Bold"

  },

});
