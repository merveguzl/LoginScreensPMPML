import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%'
    },
    boxOne:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    boxtwo:{
        flex: 2,
        alignItems:'center',
    },
    header:{
        fontSize:30,
        color:"#FF344C",
        fontWeight:'800'
    },
    empty:{
        height: '10%',
    },
    empty2:{
        height: '5%',
    },
    title:{
        fontSize:60,
        color: "#1A1A1A",
        fontWeight:"800"
    },
    text:{
        color: "#1A1A1A",
        fontSize:12,
        width: '80%',
        textAlign:'center'
    },
    input:{
        width: '80%',
        height: Dimensions.get("window").height*7/100,
        borderColor:'rgba(26,26,26,0.2)',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
        borderRadius:5,
        paddingHorizontal:'3%'
    },
    textInput:{
        width: '80%',
        height: '100%'
    },
    logButton:{
        width: '80%',
        height: Dimensions.get("window").height*7/100,
    },
    linear:{
        width:'100%',
        height: '100%',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    loginText:{
        color:"#ffffff",
        fontSize:16,
        fontWeight:"800"
    },
    social:{
        width: '80%',
        height: Dimensions.get("window").height*7/100,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    socialButton:{
        width: '48%',
        height: '100%',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
    facebook:{
        backgroundColor:"#3B5998"
    },
    activeText:{
        color: "#0052FF",
        fontSize:12
    },
    miniText:{
        color: "#1A1A1A",
        fontSize:12,
        position: "absolute",
        bottom: 0
    },
    underline:{textDecorationLine: 'underline', textDecorationStyle: 'solid'},
});

export default styles;