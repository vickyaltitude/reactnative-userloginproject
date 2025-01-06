import { useState } from 'react'
import {Button, StyleSheet, Text,TextInput,View} from 'react-native'

export default function RegisterScreen(){

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    function handleUserClick(){
        console.log(email,password)
    }

    return (

        <View style={{flex: 1,justifyContent: 'center',alignItems:'center'}}>

          <Text>Register</Text> 
          <TextInput onChangeText={setEmail} style={styles.inputText} placeholder='enter email' />
          <TextInput onChangeText={setPassword} style={styles.inputText} secureTextEntry placeholder='enter password' />
          <Button onPress={handleUserClick} title='sign up' />
          <Text>Already a user? Login </Text>

        </View>
    
)
}

const styles = StyleSheet.create({
    inputText :{
        width: 200,
        borderColor: 'black',
        marginVertical: 10,
        paddingHorizontal: 8,
        borderWidth: 1
    }
})
