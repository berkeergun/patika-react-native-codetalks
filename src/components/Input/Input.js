import {TextInput, View} from 'react-native';
import React from 'react';
import styles from './Input.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../styles/colors';

const Input = ({placeholder, onChangeText, value, iconName, isSecure,placeholderTextColor="grey"}) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isSecure}
        placeholderTextColor={placeholderTextColor}
      />
      <Icon name={iconName} size={30} color={colors.orange} />
    </View>
  );
};

export default Input;
