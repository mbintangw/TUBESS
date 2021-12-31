import * as React from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, TouchableOpacity, ScrollView, Text, View, Image, Button } from 'react-native';

export const PostList = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [username, setUsername] = useState("tiohalu");
    
    const getData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/post/');
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
        <ScrollView style={{backgroundColor: '#1A374D'}} >
        <View style={{ flex: 1, padding: 4, backgroundColor: '#1A374D' }}>
        {
            data.map((item) => (
            <TouchableOpacity onPress={() => navigation.navigate('PostDetail', {itemId:item.post_id})}>
            <View style={{backgroundColor: '#EEF2FF', margin: 4, padding: 4}}>
            <View style={{flexDirection:'row'}}>
                <View>
                <Image source={require ('../images/man.png')} style={{width: 50, height: 50, resizeMode:'contain'}}/>
            </View>
                <View style={{marginLeft: 10}}>
                <Text style={{fontWeight:'bold', color:'black'}}>{item.username}</Text>
                <Text style={{color: 'black'}}>{item.post}</Text>
            </View>
        </View>
    
        <View>
            <Text style={{fontSize: 12}}>{item.post_date}</Text>
        </View>
    </View>
    </TouchableOpacity>
    ))}
    
    <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
        <Button title="refresh" onPress={() => getData()}/>
        <Button title="tambah" onPress={() => navigation.navigate('PostAdd')} />
        </View>
    </View>
    </ScrollView>
        );
    }
    
