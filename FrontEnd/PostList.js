import * as React from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, TouchableOpacity, Text, View, Image, Button } from 'react-native';

export const PostList = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [username, setUsername] = useState("mbintangw");
    
    const getData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/post/username/'+username);
                const json = await response.json();
                setData(json.data);
        } catch (error) {
            console.error(error);
        } 
}

useEffect(() => {
        getData();
    }, []);
    
    return (
        <View style={{ flex: 1, padding: 4, backgroundColor: '#E2E2E2' }}>
        {
            data.map((item) => (
            <TouchableOpacity onPress={() => navigation.navigate('PostDetail', {itemId:item.post_id})}>
            <View style={{backgroundColor: 'white', margin: 4, padding: 4}}>
            <View style={{flexDirection:'row'}}>
                <View>
                <Image source={{uri:'http://10.0.2.2:3000/images/user.png'}} style={{width: 50, height: 50, resizeMode:'contain'}}/>
            </View>
                <View style={{marginLeft: 10}}>
                <Text style={{fontWeight:'bold', color:'black'}}>{item.username}</Text>
                <Text>{item.post_date}</Text>
            </View>
        </View>
    
        <View>
            <Text>{item.post}</Text>
        </View>
    </View>
    </TouchableOpacity>
    ))}
    
    <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
        <Button title="refresh" onPress={() => getData()}/>
        <Button title="tambah" onPress={() => navigation.navigate('PostAdd')} />
        </View>
    </View>
        );
    }
    
