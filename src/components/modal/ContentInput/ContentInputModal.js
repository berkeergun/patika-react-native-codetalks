import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './ContentInputModal.style';
import Button from '../../Button';
import Modal from 'react-native-modal';
import colors from '../../../styles/colors';

const ContentInputModal = ({
  visible,
  onSend,
  onClose,
  maxLength,
  maxLengthTags = 30,
}) => {
  const [text, setText] = useState('');
  const [tag, setTag] = useState('');

  const handleSend = () => {
    if (!text || !tag) {
      return;
    }
    onSend(text, tag);
    setText('');
    setTag('');
  };

  return (
    <Modal
      swipeDirection="down"
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <Text
            style={{fontSize: 20, fontFamily:"SourceSansPro-Bold", color: colors.orange}}>
            Oda Adı
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Odanın adını giriniz..."
            onChangeText={setText}
            multiline
            maxLength={maxLength}
          />
          <Text
            style={{fontSize: 20, fontFamily:"SourceSansPro-Bold", color: colors.orange}}>
            Oda Konusu
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Oda konusunu giriniz"
            onChangeText={setTag}
            multiline
            maxLength={maxLengthTags}
          />
        </View>
        <View style={{alignItems:"flex-end"}}>
          <Button text="Oda Oluştur" onPress={handleSend} />
        </View>
      </View>
    </Modal>
  );
};

export default ContentInputModal;
