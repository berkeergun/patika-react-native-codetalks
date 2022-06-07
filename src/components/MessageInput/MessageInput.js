import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './MessageInput.style';
import Button from '../Button/Button';
import colors from "../../styles/colors"

const MessageInput = ({onSend}) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message) {
      return;
    }
    onSend(message);
    setMessage('');
  };
  return (
    <View style={styles.container}>

      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          placeholder="Mesaj Gönder..."
          placeholderTextColor={colors.orange}
          onChangeText={setMessage}
          multiline
          maxLength={140}
          value={message}
        />
      </View>

      <View style={styles.button}>
        <Button theme='fourth' icon="arrow-right-bold" size={30} onPress={handleSend} />
      </View>

    </View>
  );
};

export default MessageInput;
