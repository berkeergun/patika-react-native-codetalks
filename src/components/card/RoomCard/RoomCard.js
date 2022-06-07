import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './RoomCard.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../styles/colors';

const RoomCard = ({room, onPress}) => {
  let oda;
  if (room[`${room.roomName}`] === undefined) {
    oda = [];
  } else {
    oda = room[`${room.roomName}`];
  }
  const messsageLength = Object.keys(oda).length;

  //-----------------------



  let mesajlar = room[`${room.roomName}`];
  const kullanicilar = [];
  if(mesajlar === undefined){
    mesajlar = []
  }
  else{
    const keys = Object.keys(mesajlar);
    const b = keys.map(item => {
      if (kullanicilar.includes(mesajlar[`${item}`].username)) {
        return null
      }else{
        kullanicilar.push(mesajlar[`${item}`].username);
      }
    });
  }
  const userLength = kullanicilar.length

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.upper_container}>
        <Text style={styles.name}>{room.roomName}</Text>
        <Text style={styles.tag}>{room.roomTags}</Text>
        <Text style={styles.creator}>Kurucu: {room.roomCreator}</Text>
      </View>
      <View style={styles.lower_container}>
        <View style={styles.icon_container}>
          <Icon name="account" size={31} color={colors.orange} />
          <Text style={styles.user_number}>{userLength}</Text>
        </View>
        <View style={styles.icon_container}>
          <Icon name="message" size={31} color={colors.orange} />
          <Text style={styles.message_number}>{messsageLength}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RoomCard;
