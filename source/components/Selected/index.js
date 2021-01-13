import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const select = () => {
    return (
        <View>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Change')}>
                <Titles titles={route.params.Header}/>
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Titles titles={route.params.Header}/>
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Titles titles={route.params.Header}/>
                </TouchableOpacity>
        </View>
    )
}

export default select

const styles = StyleSheet.create({})
