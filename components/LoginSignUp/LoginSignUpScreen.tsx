import React, {useEffect, useState} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  EmitterSubscription,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import OTPVerify from 'react-native-otp-verify'; // Import OTPVerify

const LoginSignUpScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    let otpListener: EmitterSubscription;

    const startListeningForOTP = async () => {
      try {
        const listenerStarted = await OTPVerify.getOtp();
        if (listenerStarted) {
          otpListener = OTPVerify.addListener(otp => {
            console.log('OTP received:', otp);
            // Do something with the received OTP, e.g., auto-fill OTP input field
          });
        } else {
          console.log('Failed to start OTP listener');
        }
      } catch (error) {
        console.error('Error starting OTP listener:', error);
      }
    };

    startListeningForOTP();

    return () => {
      if (otpListener) {
        otpListener.remove();
        console.log('OTP listener removed');
      }
    };
  }, []);

  const sendOTP = () => {
    console.log(`Sending OTP to ${phoneNumber}`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/svg/Vector-2.png')} />
      <Text style={styles.plural}>Plural</Text>
      <Text style={styles.organizineYourNostalgia}>
        Organizine your nostalgia
      </Text>
      <Image
        style={styles.illustrationDoodle10}
        source={require('../../assets/images/Doodle-10.png')}
      />
      <Text style={styles.signUpOr}>Sign up or Log in</Text>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}> */}
      <TextInput
        style={styles.enterYourPhone}
        placeholder="Enter your Phone number"
        textAlign="center"
        keyboardType="phone-pad"
        onChangeText={text => setPhoneNumber(text)} // Update phone number state
      />
      {/* </KeyboardAvoidingView> */}
      <TouchableOpacity style={styles.rectangle34} onPress={sendOTP}>
        <Text style={styles.sendOtpText}>Send OTP</Text>
      </TouchableOpacity>

      <Image
        style={styles.vector3}
        source={require('../../assets/svg/Vector-3.png')}
      />
      <Image
        style={styles.swingingIcon}
        source={require('../../assets/images/swinging.png')}
      />
      <Image
        style={styles.illustrationDoodle23}
        source={require('../../assets/images/Doodle-23.png')}
      />
      <Image
        style={styles.vector4}
        source={require('../../assets/svg/Vector-4.png')}
      />
      <Image
        style={styles.vector5}
        source={require('../../assets/svg/Vector-5.png')}
      />
    </SafeAreaView>
  );
};

export default LoginSignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  plural: {
    top: 50,
    fontSize: 45,
    color: '#000',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    fontFamily: 'recoleta',
    textAlign: 'center',
    fontWeight: '700',
  },
  organizineYourNostalgia: {
    top: 50,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
    color: '#eb5757',
  },
  signUpOr: {
    top: 230,
    textAlign: 'center',
    fontSize: 20,
    color: '#eb5757',
    fontFamily: 'RecoletaBold',
    fontWeight: '700',
  },
  enterYourPhone: {
    top: 250,
    fontSize: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    fontFamily: 'Inter-Medium',
    width: 260,
    height: 55,
    backgroundColor: '#F2F2F2',
    borderRadius: 26.5,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  rectangle34: {
    top: 270,
    width: 120,
    height: 45,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#EB5757',
    borderRadius: 22.5,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  sendOtpText: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 20,
    color: '#fff',
  },
  vector2: {
    left: 0,
    top: 0,
  },
  vector3: {
    position: 'absolute',
    right: 0,
    top: 40.8,
  },
  swingingIcon: {
    position: 'absolute',
    left: 0,
    top: 200.0,
  },
  illustrationDoodle23: {
    top: 182,
    right: 0,
    position: 'absolute',
  },
  illustrationDoodle10: {
    top: 220,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 145,
    height: 108,
  },
  vector5: {
    position: 'absolute',
    left: 130,
    bottom: 0,
    zIndex: -1,
  },
  vector4: {
    position: 'absolute',
    left: 0,
    top: 390,
  },
});
