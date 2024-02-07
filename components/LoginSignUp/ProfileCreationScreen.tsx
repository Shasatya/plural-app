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
const ProfileCreationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rectangle31}>
        <Image
          // style={styles.vector3}
          source={require('../../assets/icons/create-icon-dark.png')}
        />
      </View>
      <Text style={styles.subText1}>Upload your profile Picture</Text>
      <Text style={styles.subText2}>Must not be bigger than 5 MB</Text>

      <TextInput
        style={styles.input}
        placeholder="Choose a username"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Choose a unique @ name"
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

export default ProfileCreationScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'#fff'
  },
  rectangle31: {
    // boxSizing: 'border-box',
    position: 'relative',
    width: 90,
    height: 120,
    left: 'auto',
    top: 100,
    backgroundColor: '#E15151',
    borderRadius: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group13: {
    // position: 'absolute',
    width: 37,
    height: 37,
    borderRadius: 50,
    marginLeft: 'auto',
    top: 40,
    marginRight: 'auto',
    backgroundColor: '#fff',
  },
  subText1: {
    top: 130,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    marginBottom: 5,
  },
  subText2: {
    top: 130,
    fontSize: 10,
    // fontFamily:'italic',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    top: 150,
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
    top: 170,
    width: 113,
    height: 45,
    borderRadius: 22.5,
    elevation: 3,
    backgroundColor: 'rgba(235, 87, 87, 0.5)',
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
    top: 200,
  },
});
