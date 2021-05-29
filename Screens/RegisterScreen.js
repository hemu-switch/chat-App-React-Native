import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imgURL, setImageURL] = useState('');

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        userCredential.user.updateProfile({
          displayName: name,
          photoURL:
            imgURL ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVCVV2vEZkPS1sMCHgmPsfLpWfr8wb-OubQ&usqp=CAU'
        });
      })
      .catch(error => alert('Error'));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style='light' />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a new account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder='Full Name'
          type='text'
          value={name}
          onChangeText={text => setName(text)}
        />
        <Input
          placeholder='Email'
          type='email'
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder='Password'
          secureTextEntry
          type='password'
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Input
          placeholder='Profile Picture URL (Optional)'
          type='text'
          value={imgURL}
          onChangeText={text => setImageURL(text)}
          onSubmitEditing={register}
        />
      </View>
      <View>
        <Button
          containerStyle={styles.button}
          raised
          title='Register'
          onPress={register}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  inputContainer: {
    width: 300
  },
  button: {
    width: 300,
    marginTop: 10
  }
});
