import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react'
import { View,Image,Alert,Text, TextInput,ScrollView, Button, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';
export const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigation=useNavigation();
    const AuthLogin = async () =>{
        const response = await fetch('http://10.0.2.2:3000/users/',{
          method:"POST",
          headers:{
             'Content-type':'application/json'
          },
          body:JSON.stringify({
            username:username,
            password:password
          })
        })
        const resData= await response.json()
        if(resData.status==200){
            navigation.navigate('PostList')
        }else{
          Alert.alert('ERROR', 'Login Gagal')
        }
    }
    return (
        <ScrollView  style={{ backgroundColor:"#1A374D"}}>
            <View>
            <View style={{ padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#B1D0E0', fontSize: 50 ,fontFamily: 'Roboto'}}>antara</Text>
            </View>
            <View style={{ paddingVertical: 90,alignItems: 'center' }}>
                <Image source = {require('../images/round-table.png')} style={{width :220, height: 220}}/>
            </View>
            <View style={{ padding: 5, }}>
                <TextInput placeholder ='Username' placeholderTextColor = 'white' style={{ color:'white', borderWidth: 2, borderColor: '#B1D0E0', }} onChangeText={(text)=>setUsername(text)} />
            </View>
            <View style={{ padding: 5, }}>
                <TextInput placeholder ='Password'placeholderTextColor = 'white' style={{ color:'white', borderWidth: 2, borderColor: '#B1D0E0' }} onChangeText={(text)=>setPassword(text)}/>
            </View>
            <View style={{ padding: 5, }}>
                <Button title='Login' onPress={()=>AuthLogin()} />
            </View>
            <View style={{ padding: 5, flexDirection: 'row' }}>
                <Text style={{ color : 'white'}}>
                    Dont have account?
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Register')} >
                    <Text style={{ color: 'cyan' }}>
                        Create
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
        </ScrollView>
    );
};