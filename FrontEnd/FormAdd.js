import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';

export const PostAdd = ({ route, navigation }) => {
    const [username, setUsername] = useState("namagua");
    const [textInputPost, setTextInputPost] = useState("");
    
    const saveData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/post/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                post: textInputPost
            })
    });
    
   //const json = await response.json();
   //setData(json.data);

} catch (error) {
    console.error(error);
    } finally {
    navigation.navigate('PostList');
    }
}
    
return (
    <View style={{ flex: 1 }}>
        <Text>Post</Text>
        <TextInput placeholder='tulis post di sini' style={styles.input} onChangeText={text=> setTextInputPost(text)} value={textInputPost} />
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
            <Button title="kembali" onPress={() => navigation.navigate('PostList')} />
            <Button title="simpan" onPress={() => saveData()}/>
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
    button: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        backgroundColor: '#68a0cf',
        borderColor: '#fff',
        flex:1,
    },
    logo: {
        height:75, 
        width:300, 
        resizeMode:'contain', 
        flex:1,
    },
});
 