import {View, Text, FlatList, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './Rooms.style';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInput/ContentInputModal';
import RoomCard from '../../components/card/RoomCard/RoomCard';
import parseContentData from '../../utils/parseContentData';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import Loading from "../../components/Loading"


const Rooms = ({navigation}) => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [roomList, setRoomList] = useState([]);
  const [loading,setLoading]=useState(true)


  useEffect(() => {
    setLoading(true)
    database()
      .ref('rooms/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setRoomList(parsedData);
        // console.log(parsedData);
      });
      setLoading(false)
  }, []);

  const handleInputToggle = () => {
    setInputModalVisible(!inputModalVisible);
  };

  const handleCreateRoom = (name,tag) => {
    handleInputToggle();
    createRoom(name,tag);
  };

  const createRoom = (name,tag) => {
    const userMail = auth().currentUser.email;
    const roomObject = {
      roomName: name,
      roomTags:tag,
      date: new Date().toISOString(),
      roomCreator: userMail.split('@')[0],
    };
    // console.log(roomObject);
    database().ref('rooms/').push(roomObject);
  };

  const roomDetailPage = item => {
    navigation.navigate('RoomDetailPage', {item});
  };

  const renderRoom = ({item}) => (
    <RoomCard room={item} onPress={() => roomDetailPage(item)} />
  );

  if(loading){
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../../gif/background.jpg")} resizeMode='cover' style={{flex:1}}>

        <FlatList data={roomList} renderItem={renderRoom} numColumns={2} />
        <FloatingButton icon="plus" onPress={handleInputToggle} />
        <ContentInputModal
          visible={inputModalVisible}
          onClose={handleInputToggle}
          onSend={handleCreateRoom}
          maxLength={15}
        />
        </ImageBackground>
    </View>
  );
};

export default Rooms;
