import { text } from 'body-parser';
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text,Image, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';

export const Register = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const saveData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/users/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
    });
} catch (error) {
    console.error(error);
    } finally {
    navigation.navigate('Login');
    }
}
    return (
       <ScrollView  style={{ backgroundColor:"#1A374D"}}>
       <View>
            <View style={{padding: 5, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color: '#B1D0E0', fontSize:50}}>WELCOME</Text>
            </View>
            <View style={{paddingVertical : 70,alignItems:'center'}}>
            <Image source = {require('../images/round-table.png')} style={{width :220, height: 220}}/>
            </View>
            <View style={{padding: 5,}}>
            <TextInput placeholder ='Username' placeholderTextColor = 'white' style={{ color:'white', borderWidth: 2, borderColor: '#B1D0E0', }} onChangeText={(text)=>setUsername(text)} />
            </View>
            <View style={{padding: 5,}}>
            <TextInput placeholder ='Password'placeholderTextColor = 'white' style={{ color:'white', borderWidth: 2, borderColor: '#B1D0E0' }} onChangeText={(text)=>setPassword(text)}/>

            </View>
            <View style={{padding: 5,}}>
                <Button title='REGISTER' onPress={()=>saveData()}/>
            </View>
            <View style={{padding: 5, flexDirection:'row'}}>
                <Text style={{color: 'white'}}>
                    Have account?
                </Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Login')} >
                <Text style={{color:'cyan'}}>
                    Login
                </Text>
                </TouchableOpacity>
            </View>
            
        </View>
        </ScrollView>
    )
}

