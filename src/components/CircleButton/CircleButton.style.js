import {StyleSheet} from 'react-native';
import colors from "../../styles/colors"

const base_style = StyleSheet.create({
  container: {
    padding: 8,
    margin: 10,
    // borderRadius: 5,
    // alignItems: 'center',

    borderRadius:60,
    width:60,
    height:60,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:colors.orange,

    elevation:10,
  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 17,
    color:"#fff"
  },
});

export default {
  primary: StyleSheet.create({
      ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.less_blue,
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
};
