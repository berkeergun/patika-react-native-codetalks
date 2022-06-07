import { Platform, StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export default StyleSheet.create({
    container:{
        padding:5,
        margin:15,
        marginBottom:20,
        backgroundColor:"#efefef99",
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        // borderTopWidth:2,
        borderBottomWidth:2,
        borderColor:colors.orange,
    },
    input:{
        flex:1,
        padding: Platform.OS === "android" ? 3 : 5,
        // color:colors.less_orange,
        color:colors.orange,
        // fontWeight:"bold",
        fontSize:18,
        fontFamily:"SourceSansPro-Bold"

    },

})