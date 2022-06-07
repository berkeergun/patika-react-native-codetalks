import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import Rooms from './pages/Rooms/Rooms';
import RoomDetail from './pages/RoomDetail/RoomDetail';
import colors from './styles/colors';
import FlashMessage from 'react-native-flash-message';

import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <>
            <Stack.Screen
              name="RoomsPage"
              options={{
                headerShown: true,
                title: 'Odalar',
                headerTitleAlign: 'center',
                headerTintColor: colors.orange,
                headerTitleStyle:{fontFamily:"SourceSansPro-BoldItalic"},
                headerShadowVisible:true ,
                headerRight: () => (
                  <Icon
                    name="logout"
                    color={colors.orange}
                    size={28}
                    onPress={() => auth().signOut()}
                  />
                ),
              }}
              component={Rooms}
            />
            <Stack.Screen
              name="RoomDetailPage"
              component={RoomDetail}
              options={{
                headerShown: true,
                title: 'Mesajlar',
                headerTitleAlign: 'center',
                headerTintColor: colors.orange,
                headerTitleStyle:{fontFamily:"SourceSansPro-BoldItalic"},
                headerRight: () => (
                  <Icon
                    name="logout"
                    color={colors.orange}
                    size={28}
                    onPress={() => auth().signOut()}
                  />
                ),
              }}
            />
          </>
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
