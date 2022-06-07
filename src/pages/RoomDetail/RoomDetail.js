import {View, Text, FlatList, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './RoomDetail.style';
import MessageCard from '../../components/card/MessageCard/MessageCard';
import parseContentData from '../../utils/parseContentData';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import MessageInput from '../../components/MessageInput/MessageInput';
import {tr} from 'date-fns/locale';
import {parseISO, formatDistance} from 'date-fns';
import colors from '../../styles/colors';
import Loading from "../../components/Loading"

const RoomDetail = ({route}) => {
  const {item} = route.params;
  const [roomDetailList, setRoomDetailList] = useState([]);
  const [loading,setLoading]=useState(true)

  const formattedDate = formatDistance(parseISO(item.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  useEffect(() => {
    setLoading(true)
    database()
      .ref(`rooms/${item.id}/${item.roomName}`)
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setRoomDetailList(parsedData);
        // console.log(parsedData);
      });
      setLoading(false)
  }, []);

  const handleSendMessage = content => {
    sendMessage(content);
  };

  const sendMessage = name => {
    const userMail = auth().currentUser.email;
    const roomObject = {
      message: name,
      date: new Date().toISOString(),
      username: userMail.split('@')[0],
    };
    // console.log(roomObject);
    database().ref(`rooms/${item.id}/${item.roomName}`).push(roomObject);
  };

  const renderRoomDetailMessages = ({item}) => <MessageCard message={item} />;

  if(loading){
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../gif/background.jpg')}
        resizeMode="cover"
        style={{flex: 1}}>

          <View style={styles.room_info}>
            <Text style={{color:colors.orange,fontFamily:"SourceSansPro-Bold",fontSize:19,textAlign:"center"}}>{item.roomName} Odası - Konu: {item.roomTags}</Text>
            <Text style={{color:colors.orange,fontSize:16,fontFamily:"SourceSansPro-Italic"}}>{formattedDate} oluşturuldu.</Text>
          </View>


        <FlatList
          data={roomDetailList}
          renderItem={renderRoomDetailMessages}
          inverted={true}
        />
        <MessageInput onSend={handleSendMessage} />
      </ImageBackground>
    </View>
  );
};

export default RoomDetail;
