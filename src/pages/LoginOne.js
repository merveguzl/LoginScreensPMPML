import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from '../style/login1'

export default function LoginOne({setPage}) {
    return (
        <View style={styles.container} >
            <View style={[styles.subView,{flex:1}]} >
                <Image source={require("../asset/loginOne.png")} />
                <Text style={styles.title} >PMPML</Text>
            </View>
            <View style={[styles.subView,{flex:1.3}]} >
                <View style={styles.inputContainer} >
                    <View style={styles.iconContainer} >
                        <Image 
                            source={require("../asset/mail.png")}
                            style={styles.icon}
                            resizeMode="contain"
                        />
                        <Image 
                            source={require("../asset/password.png")}
                            style={styles.icon}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.textInputContainer} >
                        <TextInput 
                            placeholder="Email Address"
                            style={styles.input}
                        />
                        <View style={styles.line} />
                        <TextInput 
                            placeholder="Password"
                            style={styles.input}
                        />
                    </View>
                </View>
                <View style={styles.empty} />
                <TouchableOpacity>
                    <Text style={styles.forgot} >
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
                <View style={styles.empty} />
                <View style={styles.ButtonContainer} >
                    <TouchableOpacity style={[styles.button, styles.facebook]} >
                        <Image 
                            source={require("../asset/facebook.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.log]} onPress={()=>setPage(0)} >
                        <Text style={styles.logText} >LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.empty} />
                <Text style={styles.bottom} >
                    By signing up, you agree with our 
                    <TouchableOpacity style={{marginBottom:-3}} >
                        <Text style={[styles.forgot, styles.underline]} >
                            {' '} Terms {'&'} Conditions
                        </Text>
                    </TouchableOpacity>
                </Text>
                <View style={styles.empty} />
            </View>
        </View>
    )
}
