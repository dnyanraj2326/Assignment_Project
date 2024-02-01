import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import WraperContainer from '../components/WraperContainer';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {getStoreData, setStoreData} from '../utils/helperFunction';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      if (username == '' || password == '') {
        return Alert.alert('All filed is mendetory');
      }
      let body = {
        email: username,
        password: password,
      };
      console.log('body', body);
      let res = await axios.post('https://reqres.in/api/login', body);
      console.log('res', res.data.token);
      if (res?.status == 200) {
        setStoreData('token', res?.data?.token);
      } else {
        console.log('Something went wrong');
      }
    } catch (error) {
      console.log('Something went wrong during login function', error);
    }
  };

  return (
    <WraperContainer>
      <View style={{flex: 1, gap: 20}}>
        <Text style={styles.loginText}>Login</Text>
        <TextInput
          placeholder="Name"
          style={styles.inputStyle}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.inputStyle}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnSection}
          onPress={handleLogin}>
          <Text style={{...styles.loginText, fontSize: 18, color: '#fff'}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </WraperContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputStyle: {
    height: 55,
    backgroundColor: '#e0e0e0',
    borderRadius: 14,
    paddingHorizontal: 20,
  },
  loginText: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
  },
  btnSection: {
    backgroundColor: 'red',
    borderRadius: 14,
    marginTop: 20,
  },
});
