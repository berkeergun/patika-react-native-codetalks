import { StyleSheet,Dimensions } from "react-native";
import colors from "../../styles/colors"

export default StyleSheet.create({
    container:{
        // flex:1,
        height:65,
        // borderWidth:1,
        flexDirection:"row",
        // justifyContent:"space-between"
        margin:5,
    },
    input_container:{
        backgroundColor:"#ffffff90",
        borderWidth:3,
        borderColor:colors.orange,
        borderRadius:15,

    },
    input:{
        flex:1,
        width:300,
        borderColor:colors.orange,
        marginLeft:10,
        fontSize:14,
        // fontWeight:"bold",
        color:colors.orange,
        fontFamily:"SourceSansPro-Black",
        letterSpacing:1,

    },
    button:{
        flex:1,
    },
    
})