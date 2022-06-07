import { StyleSheet, Text, View, ActivityIndicator,ImageBackground } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'

const Loading = () => {
  return (
    
    <View style={styles.container}>
      <ImageBackground source={require("../../../gif/background.jpg")} resizeMode='cover' style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size={70} color={colors.orange}  />
      </ImageBackground>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:"#DAFAF8",
        backgroundColor:"#FCD63B",
        // justifyContent:"center",
        // alignItems:"center"
    },
})