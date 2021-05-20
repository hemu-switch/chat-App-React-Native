import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-elements';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imgURL, setImageURL] = useState('');
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
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
