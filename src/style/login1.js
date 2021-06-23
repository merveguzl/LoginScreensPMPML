import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
    },
    subView:{
        alignItems:'center',
        justifyContent:'flex-end',
        width: '100%'
    },
    title:{
        fontSize:35,
        color: "#46B515",
        marginTop:'5%',
        fontWeight:"700"
    },
    inputContainer:{
        flexDirection:'row',
        borderColor: 'rgba(26,26,26,0.5)',
        borderWidth:1,
        width: '80%',
        borderRadius:5,
        justifyContent:'space-between',
        paddingVertical:'2%',
    },
    iconContainer:{
        alignItems:'center',
        justifyContent:"space-around",
        width: '20%'
    },
    textInputContainer:{
        width: '80%',
    },
    input:{
        height: Dimensions.get("window").height*5/100,
        width: '100%'
    },
    line:{
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(26,26,26,0.5)',
    },
    icon:{
        width: Dimensions.get("window").width*5/100,
        height: Dimensions.get("window").width*5/100
    },
    button:{
        width: Dimensions.get("window").width*37/100,
        height: '100%',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
    facebook:{
        backgroundColor:'#3B5998',
    },
    ButtonContainer:{
        flexDirection:"row",
        width: '80%',
        height: Dimensions.get("window").height*6/100,
        justifyContent:"space-between"
    },
    empty:{
        height: '8%',
    },
    log:{
        backgroundColor:'#46B515',
    },
    forgot:{
        color: "#0052FF",
        fontSize:12
    },
    bottom:{
        fontSize:12
    },
    underline:{textDecorationLine: 'underline', textDecorationStyle: 'solid'},
    logText:{
        color: "white",
        fontSize: 16,
        fontWeight:'900'
    }
});

export default styles;