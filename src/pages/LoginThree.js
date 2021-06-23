import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import styles from '../style/login3'
import LinearGradient from 'react-native-linear-gradient';

export default function LoginThree({setPage}) {

    const [active, setActive] = useState(1)

    return (
        <View style={styles.container} >
            <View style={styles.tab} >
                <Image 
                    source={require("../asset/loginThree.png")}
                />
                <View style={styles.empty} />
                <Text style={styles.title} >PMPML</Text>
            </View>
            <View style={styles.bottom} >
                <View style={{height:'3%'}} />
                <View style={styles.navBar} >
                    <TouchableOpacity style={[styles.button, active == 1 && styles.activeButton]} onPress={()=>setActive(1)} >
                        <Text style={[styles.buttonText, active === 1 && styles.activeButtonText]} >Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, active == 2 && styles.activeButton]} onPress={()=>setActive(2)} >
                        <Text style={[styles.buttonText, active === 2 && styles.activeButtonText]} >Signup</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body} >
                    <View style={styles.empty2} />
                    <Text style={styles.header}>
                        Welcome
                    </Text>
                    <View style={styles.empty2} />
                    <Text style={styles.desc} >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                    </Text>
                    <View style={styles.empty2} />
                    <TextInput 
                        style={styles.input}
                        placeholder="Email Address"
                        placeholderTextColor="rgba(29,34,38,0.5)"
                    />
                    <View style={styles.empty2} />
                    <View style={styles.input}>
                        <TextInput
                            style={styles.input2}
                            placeholder="Password"
                            placeholderTextColor="rgba(29,34,38,0.5)"
                        />
                        <Image 
                            source={require("../asset/eyes.png")}
                        />
                    </View>
                    <View style={styles.empty2} />
                    <TouchableOpacity style={styles.button2} onPress={()=>setPage(0)} >
                        <LinearGradient 
                            start={{x: 1, y: 0}} 
                            end={{x: 0, y: 1}} 
                            style={styles.linear}
                            colors={['#E93354','#1D55C5']} 
                        >
                            <Text style={styles.logText} >LOGIN</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View style={styles.empty2} />
                    <TouchableOpacity>
                        <Text style={styles.forgot} >
                            Forgut Password?
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.empty2} />
                    <View style={styles.bottomV} >
                        <View style={styles.line} />
                        <View style={styles.social} >
                            <Image 
                                source={require("../asset/facebookBold.png")}
                                style={[styles.icon,{marginRight:-25}]}
                                resizeMode="contain"
                            />
                            <Image 
                                source={require("../asset/twitter.png")}
                                style={styles.icon}
                                resizeMode="contain"
                            />
                            <Image 
                                source={require("../asset/mailbold.png")}
                                style={[styles.icon,{marginLeft:-25}]}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}
