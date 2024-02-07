import {Text, View, StyleSheet, TextInput, Image} from 'react-native';
import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const OtpScreen = () => {
  const et1 = useRef<TextInput>(null);
  const et2 = useRef<TextInput>(null);
  const et3 = useRef<TextInput>(null);
  const et4 = useRef<TextInput>(null);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> Waiting for</Text>
      <Text style={styles.text}> OTP</Text>
      <View style={styles.inputContainer}>
        <TextInput
          ref={et1}
          style={[styles.rectangle, styles.input]}
          placeholder="-"
          textAlign="center"
          keyboardType="phone-pad"
          placeholderTextColor="#EB5757"
          onChangeText={txt => {
            if (txt.length >= 1 && et2.current) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          ref={et2}
          style={[styles.rectangle, styles.input]}
          placeholder="-"
          textAlign="center"
          keyboardType="phone-pad"
          placeholderTextColor="#EB5757"
          maxLength={1}
          onChangeText={txt => {
            if (txt.length >= 1 && et3.current) {
              et3.current.focus();
            } else if (txt.length < 1) {
              et1?.current?.focus();
            }
          }}
        />
        <TextInput
          ref={et3}
          style={[styles.rectangle, styles.input]}
          placeholder="-"
          textAlign="center"
          keyboardType="phone-pad"
          placeholderTextColor="#EB5757"
          maxLength={1}
          onChangeText={txt => {
            if (txt.length >= 1 && et4.current) {
              et4.current.focus();
            } else if (txt.length < 1) {
              et2?.current?.focus();
            }
          }}
        />
        <TextInput
          ref={et4}
          style={[styles.rectangle, styles.input]}
          placeholder="-"
          textAlign="center"
          keyboardType="phone-pad"
          placeholderTextColor="#EB5757"
          maxLength={1}
          onChangeText={txt => {
            if (txt.length < 1) {
              et3?.current?.focus();
            }
          }}
        />
      </View>
      <Image
        style={styles.vector10}
        source={require('../../assets/images/Doodle-10.png')}
      />
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  text: {
    fontFamily: 'Recoleta',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 41,
    color: '#EB5757',
    top: 220,
    left: 70,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 240,
    paddingHorizontal: 80,
  },
  rectangle: {
    width: 50,
    height: 50,
    backgroundColor: '#F2F2F2',
    borderRadius: 11,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    color: '#EB5757',
    fontSize: 25,
    paddingTop: -25,
    fontWeight: '700',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textAlign: 'center',
  },
  vector10: {
    top: 350,
    height: 100,
    width: 180,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignSelf: 'center',
  },
});
