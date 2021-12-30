import React from 'react'
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';

export const Login = () => {
    return (
        <View>
            <View style={{ padding: 30, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 50 }}>LOGIN</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Icon name="user" style={{ fontSize: 250 }} />
            </View>
            <View style={{ padding: 30, }}>
                <TextInput placeholder='Username' style={{ borderWidth: 2, borderColor: 'white', }} />
            </View>
            <View style={{ padding: 30, }}>
                <TextInput placeholder='Password' style={{ borderWidth: 2, borderColor: 'white' }} />
            </View>
            <View style={{ padding: 30, }}>
                <Button title='Login' />
            </View>
            <View style={{ padding: 30, flexDirection: 'row' }}>
                <Text>
                    Dont have account?
                </Text>
                <TouchableOpacity  >
                    <Text style={{ color: 'blue' }}>
                        Create
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
};


