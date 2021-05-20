import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignIn = () => {};

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style='light' />
      <Image
        source={{
          uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png'
        }}
        style={{ width: 150, height: 150 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder='Email'
          autofocus
          type='email'
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder='Password'
          secureTextEntry={true}
          type='password'
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <Button containerStyle={styles.button} onPress={SignIn} title='Login' />
      <Button
        containerStyle={styles.button}
        onPress={() => navigation.navigate('Register')}
        type='outline'
        title='Register'
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  inputContainer: {
    width: 300
  },
  button: {
    width: 200,
    marginTop: 10,
    marginBottom: 10
  }
});
