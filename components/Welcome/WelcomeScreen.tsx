import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.profileBG}></View>
      <Pressable onPress={() => navigation.navigate('Menu' as never)}>
        <Image
          style={styles.menuIcon}
          source={require('../../assets/icons/menu_icon.png')}
        />
      </Pressable>
      <View style={styles.notifAlert}>
        <Text style={styles.notifCount}>12</Text>
      </View>
      <Pressable
        style={styles.notifBtnBg}
        onPress={() => {
          navigation.navigate('Notification' as never);
        }}>
        <Image
          style={styles.notifBtn}
          source={require('../../assets/icons/notification-bell-icon.png')}
        />
      </Pressable>

      <Text style={styles.pluralText}>Plural</Text>
      <Text style={styles.welcomeText}>Welcome {'\n'}Disha !!</Text>
      <Text style={styles.recentSessionsText}>Your recent sessions</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.albumContainer}>
        <Pressable style={styles.rectangle101}>
          <Image
            style={styles.rectangleImg}
            source={require('../../assets/images/pic_1.jpg')}
          />
          <Text style={styles.rectangle101Text}>
            Album : <Text style={styles.rectangle101TextValue}>Goa 2022</Text>
          </Text>
          <Text style={styles.rectangle101Text}>
            Created by : <Text style={styles.rectangle101TextValue}>Vikas</Text>
          </Text>
        </Pressable>
        <Pressable style={styles.rectangle101}>
          <Image
            style={styles.rectangleImg}
            source={require('../../assets/images/pic_1.jpg')}
          />
          <Text style={styles.rectangle101Text}>
            Album : <Text style={styles.rectangle101TextValue}>Goa 2022</Text>
          </Text>
          <Text style={styles.rectangle101Text}>
            Created by : <Text style={styles.rectangle101TextValue}>Vikas</Text>
          </Text>
        </Pressable>
      </ScrollView>

      <Text style={styles.createSessionText}>Create a new session </Text>
      <Pressable
        style={styles.createButton}
        onPress={() => {
          navigation.navigate('CreateAlbum' as never);
        }}>
        <Image
          style={styles.createButtonIcon}
          source={require('../../assets/icons/create-icon-primary.png')}
        />
        <Text style={styles.createText}>Create</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
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
  menuIcon: {
    top: 35,
    left: 20,
  },
  notifBtnBg: {
    width: 50,
    height: 50,
    left: 345,
    top: 10,
    borderRadius: 50,
    backgroundColor: '#F26E6E',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  notifBtn: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    zIndex: -1,
  },
  notifAlert: {
    zIndex: 1,
    position: 'absolute',
    left: 330,
    top: 20,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0CEF4C',
    borderRadius: 50,
  },
  notifCount: {
    fontWeight: 'bold',
  },
  pluralText: {
    top: 10,
    left: 20,
    fontFamily: 'Recoleta',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 27,
    color: '#FFFFFF',
  },
  welcomeText: {
    position: 'absolute',
    width: 189,
    height: 88,
    left: 20,
    top: 130,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 40,
    color: '#FFFFFF',
  },
  recentSessionsText: {
    width: 138,
    height: 31,
    left: 20,
    top: 140,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 20,
    color: '#FFFFFF',
  },
  albumContainer: {
    flexDirection: 'row',
    top: 160,
    width: '100%',
    paddingLeft: 25,
  },
  rectangle101: {
    width: 226.51,
    height: 266.42,
    marginRight: 30,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E15151',
    borderRadius: 30,
  },
  rectangleImg: {
    width: 200,
    height: 170,
    top: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderRadius: 15,
  },
  rectangle101Text: {
    left: 20,
    top: 30,
    marginBottom: 5,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 20, // Note: line height in React Native doesn't require 'px' units
    color: '#EB5757',
  },
  rectangle101TextValue: {
    fontWeight: 'bold',
  },
  createSessionText: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: 200,
    width: 166,
    height: 21,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 22,
    color: '#EB5757',
  },
  createButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    top: 230, //
    width: 120,
    height: 50,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: '#EB5757',
  },
  createButtonIcon: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    top: 14,
    left: 14,
  },
  createText: {
    left: 50,
    bottom: 10,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16.125,
    lineHeight: 24,
    color: '#FFFFFF',
  },
});
