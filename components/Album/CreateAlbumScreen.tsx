import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const CreateAlbumScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Pressable
          style={styles.arrowBackBtn}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/arrow_back.png')} />
        </Pressable>
        <Text style={styles.textCreateAlbum}>Choose a thumbnail</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollViewContainer}>
        <Pressable style={styles.albumCoverContainer}>
          <Image
            style={styles.albumCover}
            source={require('../../assets/images/dp.png')}
          />
          <Text style={styles.albumCoverText}>Travel</Text>
        </Pressable>
        <Pressable style={styles.albumCoverContainer}>
          <Image
            style={styles.albumCover}
            source={require('../../assets/images/dp.png')}
          />
          <Text style={styles.albumCoverText}>Mountain Trek</Text>
        </Pressable>
        <Pressable style={styles.albumCoverContainer}>
          <Image
            style={styles.albumCover}
            source={require('../../assets/images/dp.png')}
          />
          <Text style={styles.albumCoverText}>Mountain Trek</Text>
        </Pressable>
        <Pressable style={styles.albumCoverContainer}>
          <Image
            style={styles.albumCover}
            source={require('../../assets/images/dp.png')}
          />
          <Text style={styles.albumCoverText}>Mountain Trek</Text>
        </Pressable>
      </ScrollView>

      <View style={[styles.textContainer]}>
        <Text style={styles.textAlbumName}>Enter your {'\n'}album name</Text>
        <Image
          style={styles.albumIcon}
          source={require('../../assets/images/hike.png')}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Username's New Album 01"
        keyboardType="email-address"
      />

      <View style={styles.btnContainer}>
        <Pressable
          style={styles.addPeersButton}
          onPress={() => {
            navigation.navigate('AddPeers' as never);
          }}>
          <Image
            style={styles.addPeersIcon}
            source={require('../../assets/icons/create-icon-primary.png')}
          />
          <Text style={styles.btnsText}>Add Peers</Text>
        </Pressable>
        <Pressable style={styles.startButton}>
          <Image
            style={styles.startIcon}
            source={require('../../assets/icons/play.png')}
          />
          <Text style={[styles.btnsText, styles.startText]}>Start</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default CreateAlbumScreen;
const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#000',
    top: 250,
    width: '100%',
    height: 30,
  },
  arrowBackBtn: {
    width: 30,
    height: 30,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCreateAlbum: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 22,
    color: '#EB5757',
  },
  scrollViewContainer: {
    top: 20,
    height: 200,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    // paddingRight: 30,
    // paddingLeft:30
  },
  albumCoverContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 20,
    width: 160,
    height: 140,
    top: 20,
  },
  albumCover: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  albumCoverText: {
    top: 8,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 10.4,
    lineHeight: 16,
    color: '#EB5757',
  },
  textContainer: {
    top: 40,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  textAlbumName: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 30,
    color: '#EB5757',
  },
  albumIcon: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  input: {
    top: 60,
    width: 244,
    height: 53,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#C8C8C8',
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
  btnContainer: {
    top: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  addPeersButton: {
    width: 150,
    height: 50,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: '#EB5757',
  },
  startButton: {
    width: 120,
    height: 50,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: '#EB5757',
  },
  startIcon: {
    top: 16,
    left: 22,
  },
  addPeersIcon: {
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
  btnsText: {
    left: 50,
    bottom: 10,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16.125,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  startText: {bottom: 5},
});
