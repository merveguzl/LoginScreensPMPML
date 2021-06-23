import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from '../style/login4'
import LinearGradient from 'react-native-linear-gradient';

export default function LoginFour({setPage}) {
    return (
        <View style={styles.container} >
            <View style={styles.boxOne} >
                <Image 
                    source={require("../asset/loginFour.png")}
                />
                <View style={styles.empty} />
                <Text style={styles.header} >PMPML</Text>
            </View>
            <View style={styles.boxtwo} >
                <Text style={styles.title} >Welcome</Text>
                <View style={styles.empty2} />
                <Text style={styles.text} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</Text>
                <View style={styles.empty2} />
                <View style={styles.input} >
                    <Image 
                        source={require("../asset/mail.png")}
                    />
                    <TextInput 
                        style={styles.textInput}
                        placeholder="Email Address"
                    />
                </View>
                <View style={styles.empty2} />
                <View style={styles.input} >
                    <Image 
                        source={require("../asset/password.png")}
                        />
                    <TextInput 
                        style={styles.textInput}
                        placeholder="Password"
                    />
                </View>
                <View style={styles.empty2} />
                <TouchableOpacity style={styles.logButton} onPress={()=>setPage(0)}  >
                    <LinearGradient 
                        start={{x: 1, y: 0}} 
                        end={{x: 0, y: 1}} 
                        style={styles.linear}
                        colors={['#F3A866','#FF6A83']} 
                    >
                        <Text style={styles.loginText} >
                            Login
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={styles.empty2} />
                <View style={styles.social} >
                    <TouchableOpacity style={[styles.socialButton, styles.facebook]} >
                        <Image 
                            source={require("../asset/facebook.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton} >
                        <LinearGradient 
                            start={{x: 1, y: 0}} 
                            end={{x: 0, y: 1}} 
                            style={[styles.socialButton,{width:'100%'}]}
                            colors={['#00E589','#00BF9E']} 
                        >
                        <Text>Guest User</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
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
