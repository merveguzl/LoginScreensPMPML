import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../style/login2'

export default function LoginTwo({setPage}) {
    return (
        <View style={styles.container} >
            <View style={styles.boxOne} >
                <Image 
                    source={require("../asset/loginTwo.png")}
                />
                <View style={styles.empty} />
                <Text style={styles.pmpml} >
                    PMPML
                </Text>
                <View style={styles.empty} />
                <Text style={styles.desc} >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                </Text>
            </View>
            <View style={styles.boxTwo} >
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.textOne} >Email Address</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.textOne} >Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.log]} onPress={()=>setPage(0)} >
                    <Text style={styles.textTwo} >LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.pass} >
                    <Text style={styles.activeText} >Password</Text>
                    <View style={styles.line} />
                    <Text style={styles.activeText} >Register</Text>
                </View>
            </View>
            <View style={styles.boxThree} >
                <Text style={styles.miniText} >
                    By signing up, you agree with our 
                    <TouchableOpacity style={{marginBottom:-3}} >
                        <Text style={[styles.activeText, styles.underline]} >
                            {' '} Terms {'&'} Conditions
                        </Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    )
}
