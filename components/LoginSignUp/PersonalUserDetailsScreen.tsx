import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const PersonalUserDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.chooseGender}>Choose </Text>
      <Text style={styles.chooseGender}>Your Gender</Text>
      <Text style={styles.maleText}>Male</Text>
      <Text style={styles.femaleText}>Female</Text>
      <Text style={styles.rathersayText}>I'd Rather not say</Text>
      <Text style={styles.dob}>Enter Your DOB</Text>
      <View
        style={{
          position: 'absolute',
          width: 213,
          height: 53,
          left: '50%',
          marginLeft: -106.5,
          top: 462,
          flexDirection: 'row',
        }}
      />
      <TextInput
        style={{
          position: 'absolute',
          width: 53,
          height: 53,
          backgroundColor: '#F2F2F2',
          fontWeight: 'bold',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 4,
          borderRadius: 5,
          top: 462,
          left: '23%',
          fontStyle: 'normal',
          color: '#EB5757',
          fontSize: 30,
          lineHeight: 41,
        }}
        textAlign="center"
        keyboardType="phone-pad"
      />
      <TextInput
        style={{
          position: 'absolute',
          width: 53,
          height: 53,
          backgroundColor: '#F2F2F2',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 4,
          borderRadius: 5,
          fontWeight: 'bold',
          top: 462,
          left: '40%',
          fontStyle: 'normal',
          color: '#EB5757',
          fontSize: 30,
          lineHeight: 41,
        }}
        textAlign="center"
        keyboardType="phone-pad"
      />
      <TextInput
        style={{
          position: 'absolute',
          width: 79,
          height: 53,
          backgroundColor: '#F2F2F2',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 4,
          borderRadius: 5,
          top: 462,
          left: '57%',
          fontStyle: 'normal',
          fontWeight: 'bold',
          color: '#EB5757',
          fontSize: 28,
          lineHeight: 41,
        }}
        textAlign="center"
        keyboardType="phone-pad"
      />
      <TouchableOpacity
        style={styles.rectangle34}
        onPress={() => {
          console.log('Sending OTP...');
        }}></TouchableOpacity>
      <Text style={styles.btnText}>Next</Text>
      <Image
        style={styles.gender1}
        source={require('../../assets/images/peep-1.png')}
      />
      <Image
        style={styles.gender2}
        source={require('../../assets/images/peep-4.png')}
      />
    </SafeAreaView>
  );
};

export default PersonalUserDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  chooseGender: {
    width: 173,
    height: 47,
    left: 93,
    top: 128,
    fontFamily: 'Recoleta',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 41,
    color: '#EB5757',
  },
  maleText: {
    position: 'absolute',
    width: 32,
    left: 124,
    top: 230,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
    color: '#828282',
  },
  femaleText: {
    position: 'absolute',
    width: 50,
    left: 124,
    top: 277,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
    color: '#828282',
  },
  rathersayText: {
    width: 140,
    left: 124,
    top: 230,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
    color: '#828282',
  },
  dob: {
    position: 'absolute',
    left: 93,
    top: 406,
    fontFamily: 'Recoleta',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 41,
    color: '#EB5757',
  },
  rectangle34: {
    position: 'absolute',
    width: 113,
    height: 45,
    left: 130,
    top: 544,
    backgroundColor: '#EB5757',
    borderRadius: 22.5,
  },
  btnText: {
    position: 'absolute',
    width: 64,
    height: 16,
    left: 169,
    top: 555,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 20,
    color: '#fff',
  },

  gender1: {
    position: 'absolute',
    top: 615,
    left: 105,
  },
  gender2: {
    position: 'absolute',
    top: 595,
    left: 190,
  },
});
