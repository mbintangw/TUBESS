import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native';

export const PostEdit = ({ route, navigation }) => {
    const { itemId } = route.params;
    const [textInputPost, setTextInputPost] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [username, setUsername] = useState("");
    const [postDate, setPostDate] = useState("");
    const [postMessage, setPostMessage] = useState("");

    const getData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/post/id/'+itemId);
            const json = await response.json();
            setData(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const updateData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/post/id/'+itemId, {
                method: 'PUT',
                 headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            username: 'mbintangw',
            post: textInputPost
            })
        });
        } catch (error) {
            console.error(error);
        } finally {
            navigation.navigate('PostList');
        }
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <View style={{ flex: 1, padding: 4, backgroundColor: '#E2E2E2' }}>
            {
            data.map((item) => (
            <View style={{backgroundColor: 'white', margin: 4, padding: 4}}>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <Image source={{uri:'http://10.0.2.2:3000/images/user.png'}}
                        style={{width: 50, height: 50, resizeMode:'contain'}}/>
                    </View>
                    <View style={{marginLeft: 10}}>
                        <Text style={{fontWeight:'bold', color:'black'}}>{item.username}</Text>
                        <Text>{item.post_date}</Text>
                    </View>
                </View>
                <View style={{height: 400}}>
                    <TextInput style={styles.input} onChangeText={text =>
                    setTextInputPost(text)} value={textInputPost} />
                </View>
            </View>
        ))}
            <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:11}}>
                <Button title="kembali" onPress={() => navigation.navigate('PostList')} />
                <Button title="update" onPress={() => updateData()} />
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        flex:1,
    },
});  
        