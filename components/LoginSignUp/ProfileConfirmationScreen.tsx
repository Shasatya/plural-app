import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const ProfileConfirmationScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileBG}></View>
      <Pressable style={styles.arrowBack} 
      // onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.arrowBackIcon}
          source={require('../../assets/icons/arrow_back.png')}
        />
      </Pressable>
      <View style={styles.rectangle31}></View>
      <Text style={styles.subText}>Disha Shravasti</Text>
      <Text style={styles.subText}>@dishashravasti</Text>

      <TextInput
        style={styles.input}
        placeholder="Disha Shravasti"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="@dishashravasti"
        keyboardType="email-address"
      />
      <Pressable style={styles.button}>
        <Text style={styles.text}>Create</Text>
      </Pressable>
      <Image
        style={styles.doodle6}
        source={require('../../assets/images/Doodle-6.png')}
      />
    </SafeAreaView>
  );
};
export default ProfileConfirmationScreen;
const styles = StyleSheet.create({
  container: {
    // backgroundColor:'#fff'
  },
  profileBG: {
    position: 'absolute',
    width: 521.41,
    height: 611.33,
    left: -11,
    top: -177.17,
    backgroundColor: '#EB5757',
    borderRadius: 180,
    transform: [{rotate: '-0.2deg'}],
  },
  arrowBack: {
    height: 30,
    width: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    top: 20,
    left: 10,
  },
  arrowBackIcon: {
    top: 6,
    left: 6,
  },
  rectangle31: {
    // boxSizing: 'border-box',
    position: 'relative',
    width: 90,
    height: 120,
    top: 100, //
    backgroundColor: '#51C7E1',
    borderRadius: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subText: {
    top: 130, //
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    marginBottom: 5,
    color: '#fff',
  },
  input: {
    top: 150, //
    width: 244,
    height: 53,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: '#FFF',
    borderRadius: 27,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    top: 170, //
    width: 113,
    height: 45,
    borderRadius: 22.5,
    elevation: 3,
    backgroundColor: '#EB5757',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    top: 12,
  },
  doodle6: {
    width: 215,
    height: 161,
    flexShrink: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    top: 200, //
  },
});
