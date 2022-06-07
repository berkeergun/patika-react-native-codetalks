import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  room_info: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff99',
    marginHorizontal: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 3,
    borderTopWidth:0,
    borderColor:colors.orange,
  },
});
