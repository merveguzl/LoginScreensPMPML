import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flex:1,
    },
    boxOne:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    boxTwo:{
        flex:0.7,
        justifyContent:'space-around',
        alignItems:'center',
    },
    boxThree:{
        flex:0.4,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    pmpml:{
        color: "#FF344C",
        fontSize: 30,
        fontWeight:"800"
    },
    desc:{
        width: '80%',
        textAlign: 'center',
        fontSize:12,
        color: "#1A1A1A",
    },
    button:{
        paddingVertical:'4%',
        borderRadius:30,
        borderColor:'#1A1A1A',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        width: '80%'
    },
    log:{
        backgroundColor:'#1A1A1A'
    },
    textOne:{
        color: "#1A1A1A",
        fontSize:16
    },
    textTwo:{
        color:"#ffffff",
        fontSize:16,
        fontWeight:"800"
    },
    empty:{
        height: '5%'
    },
    pass:{
        flexDirection:'row',
        width: '40%',
        justifyContent:'space-between'
    },
    line:{
        height: 16,
        backgroundColor: "#FF001F",
        width: 1
    },
    activeText:{
        color: "#FF001F",
        fontSize:12
    },
    miniText:{
        color: "#1A1A1A",
        fontSize:12
    },
    underline:{textDecorationLine: 'underline', textDecorationStyle: 'solid'},
});

export default styles;