import {StyleSheet} from 'react-native';
import colors from "../../styles/colors"

const base_style = StyleSheet.create({
  container: {
    padding: 8,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 5,
    // fontWeight: 'bold',
    fontSize: 17,
    color:"#fff",
    textAlign:"center",
    fontFamily:"SourceSansPro-Bold"
  },
});

export default {
  primary: StyleSheet.create({
      ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.orange,
      borderRadius:10,
      paddingRight:10
    },
    title: {
      ...base_style.title,
      color: '#fff',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: '#fff',
      borderColor: colors.less_orange,
      borderWidth:1,
    },
    title: {
      ...base_style.title,
      color: colors.less_orange,
    },
  }),
  third: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      borderColor: colors.less_orange,
      // borderWidth:1,
      marginHorizontal:120,
      backgroundColor:"#ffffff99"
    },
    title: {
      ...base_style.title,
      // color: colors.less_orange,
      color: colors.orange,
      borderBottomColor:colors.orange,
      borderBottomWidth:2,
      // fontWeight:"bold",
      fontSize:20,
    },
  }),
  fourth: StyleSheet.create({
    ...base_style,
  container: {
    ...base_style.container,
    // backgroundColor: colors.orange,
    backgroundColor: colors.less_blue,
    borderRadius:30,
    paddingLeft:12,
  },
  title: {
    ...base_style.title,
    color: '#fff',
  },
}),
};
