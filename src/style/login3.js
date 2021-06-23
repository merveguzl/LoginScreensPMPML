import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flex:1
    },
    tab:{
        flex:0.7,
        alignItems:'center',
        justifyContent:"flex-end"
    },
    bottom:{
        flex:2.5,
        alignItems:'center'
    },
    title:{
        color: "#FF344C",
        fontSize:30,
        fontWeight:"800"
    },
    empty:{
        height: '10%'
    },
    empty2:{
        height: '4%'
    },
    navBar:{
        width: '100%',
        flexDirection: 'row',
        height: Dimensions.get("window").height*7/100,
        backgroundColor:'white',
        justifyContent:'space-between',
        shadowColor: "#1F54C3",
        shadowOffset: {
            width: 0,
            height:19,
        },
        shadowOpacity: 0.10,
        shadowRadius:10,
        elevation: 5,
    },
    button:{
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeButton:{
        borderBottomColor: "#1F54C3",
        borderBottomWidth:4
    },
    buttonText:{
        color: "#1D2226",
        fontSize:16,
    },
    activeButtonText:{
        fontWeight:"800"
    },
    header:{
        fontSize:49,
        color: "#1A1A1A",
        fontWeight:"800"
    },
    body:{
        width: '80%',
        height: '92%',
    },
    desc:{
        color:"#1A1A1A",
        fontSize:14
    },
    input:{
        width: '100%',
        height: Dimensions.get("window").height*7/100,
        shadowColor: "#1F54C3",
        shadowOffset: {
            width: 5,
            height: 15,
        },
        shadowOpacity: 0.15,
        shadowRadius: 15,
        elevation: 13,
        backgroundColor:"white",
        paddingHorizontal:'5%',
        alignItems:'center',
        flexDirection:'row',
        borderRadius:5
    },
    input2:{
        width: '90%',
        height: '100%'
    },
    linear:{
        width: '100%',
        height: '100%',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
    button2:{
        width: '100%',
        height: Dimensions.get("window").height*7/100,
    },
    logText:{
        color:"#ffffff",
        fontSize:16
    },
    forgot:{
        color: "#1F54C3",
        fontSize: 14
    },
    line:{
        width: '100%',
        height: 2,
        backgroundColor: 'rgba(29,29,29,0.2)'
    },
    social:{
        flexDirection:'row',
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
    },
    icon:{
        width: Dimensions.get("window").width*20/100,
        height: Dimensions.get("window").width*20/100,
    },
    bottomV:{
        position: "absolute",
        bottom: 0,
        width: '100%'
    }
});

export default styles;