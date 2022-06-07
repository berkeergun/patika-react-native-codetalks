import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../styles/colors"

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.grey,
        justifyContent:"space-around"
    },
    header_container:{
        flex:1,
        justifyContent:"flex-end",
        marginTop:10,
        // borderWidth:1,
        // margin:15,
    },
    form_group:{
        flex:4,
        // borderWidth:1,
        justifyContent:"center",
        marginTop:40,
        // margin:15,
        // borderWidth:1,
        marginBottom:5,
    },
    login:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:40,
    },
    header:{
        color:colors.orange,
        margin:5,
        fontSize:50,
        textAlign:"center",
        // borderWidth:1,
        borderRadius:20,
        marginHorizontal:80,
        backgroundColor:"#ffffff99",
        fontFamily:"Larken-Medium",

    }
})