import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import WraperContainer from '../components/WraperContainer';
import {getStoreData} from '../utils/helperFunction';

const Home = ({navigation,route}) => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getStoreData('users')
      .then(res => {
        setUserData(res);
      })
      .catch(err => {
        console.log('Getting user data error', err);
      });
  }, [userData]);

  return (
    <WraperContainer>
      <Text
        style={{
          ...styles.nameText,
          textAlign: 'center',
          fontSize: 22,
          marginVertical: 20,
        }}>
        User List
      </Text>
      <View
        style={{flex: 1, justifyContent: 'space-between', paddingVertical: 10}}>
        <View style={{gap: 20}}>
          {
          userData && userData?.map((item,ind) => (
              <View key={String(ind)} style={styles.card}>
              <Text style={styles.nameText}>{item?.name}</Text>
              <Text style={styles.age}>{item?.age}</Text>
            </View>
            ))
          }
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('addEmployee')}>
          <Text style={styles.btnText}>Add Employee</Text>
        </TouchableOpacity>
      </View>
    </WraperContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 12,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: '#e0e0e0',
    padding: 16,
    borderRadius: 8,
  },
  nameText: {
    fontSize: 16,
    fontWeight: '700',
  },
  age: {
    fontSize: 16,
    fontWeight: '700',
  },
});
