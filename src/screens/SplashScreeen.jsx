import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import WraperContainer from '../components/WraperContainer';
import {ImagePath} from '../constant/ImagePath';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {getStoreData} from '../utils/helperFunction';

const SplashScreeen = () => {
  let navigation = useNavigation();
  const [token, setToken] = useState(null);
  useEffect(() => {
    getStoreData('token')
      .then(res => {
        setToken(res);
        if (res) {
          setTimeout(() => {
            navigation.navigate('home');
          }, 2000);
        } else {
          setTimeout(() => {
            navigation.navigate('login');
          }, 2000);
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  }, []);

  console.log('Token', token);

  return (
    <WraperContainer>
      <View>
        <Image source={ImagePath.splashIcon} style={styles.splashIcon} />
      </View>
    </WraperContainer>
  );
};

export default SplashScreeen;

const styles = StyleSheet.create({
  splashIcon: {
    alignSelf: 'center',
  },
});
