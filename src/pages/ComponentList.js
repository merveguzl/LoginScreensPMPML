import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from "../style/Container"

export default function ComponentList({setPage}) {

    const data = [1,2,3,4,5,6,7,8,9]

    return (
        <View style={styles.container} >
            {
                data.map((item) =>(
                    <TouchableOpacity style={styles.button} onPress={()=>setPage(item)} >
                        <Text>
                            Login{' ',item}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}
