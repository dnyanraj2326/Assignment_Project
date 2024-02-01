import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import WraperContainer from '../components/WraperContainer';
import InputComp from '../components/InputComp';
import {getStoreData, setStoreData} from '../utils/helperFunction';

const AddEmployee = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setaddress] = useState('');
  const [city, setCity] = useState('');

  const handleAddEmp = async () => {
    try {
      if (name == '' || age == '' || address == '' || city == '') {
        return Alert.alert('All filed is mendetory');
      }
      let data = {
        name,
        age,
        address,
        city,
      };
      let existData = await getStoreData('users');

      if (existData) {
        let updateData = [...existData, data];
        await setStoreData('users', updateData);
      } else {
        await setStoreData('users', [data]);
      }
      navigation.navigate('home');
    } catch (error) {
      console.log('something went wrong', error);
    }
  };
  return (
    <WraperContainer>
      <View
        style={{flex: 1, justifyContent: 'space-between', paddingVertical: 20}}>
        <View>
          <InputComp
            placeholder="Enter a name"
            onChangeText={text => setName(text)}
          />
          <InputComp
            placeholder="Enter a age"
            onChangeText={text => setAge(text)}
          />
          <InputComp
            placeholder="Enter a address"
            onChangeText={text => setaddress(text)}
          />
          <InputComp
            placeholder="Enter a city"
            onChangeText={text => setCity(text)}
          />
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleAddEmp}>
          <Text style={styles.textBtn}>Add Employee</Text>
        </TouchableOpacity>
      </View>
    </WraperContainer>
  );
};

export default AddEmployee;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 12,
  },
  textBtn: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
