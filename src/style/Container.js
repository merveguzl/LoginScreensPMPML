import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        alignItems:'center',
        justifyContent:'space-around'
    },
    button: {
        width: '60%',
        height: Dimensions.get("window").height*7/100,
        borderColor:'rgba(29,29,29,0.5)',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    }
})

export default styles