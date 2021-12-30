import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Button, Image } from 'react-native';

export const PostDetail = ({ route, navigation }) => {
    const { itemId } = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [username, setUsername] = useState("");
    const [postDate, setPostDate] = useState("");
    const [post, setPost] = useState("");

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

    const deleteData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/post/id/'+itemId, {method:'DELETE'});
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
                <View>
                    <Text>{item.post}</Text>
                </View>
            </View>
        ))}

            <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                <Button title="kembali" onPress={() => navigation.navigate('PostList')} />
                <Button title="hapus" onPress={() => deleteData()} />
                <Button title="edit" onPress={() => navigation.navigate('PostEdit', {itemId})}/>
            </View>
        </View>
    );
}