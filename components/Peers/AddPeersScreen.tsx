import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
const AddPeersScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image
          style={styles.arrowBack}
          source={require('../../assets/icons/arrow_back.png')}
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
          source={require('../../assets/svg/bell.png')}
        />
      </Pressable>

      <Text style={styles.addPeersText}>Add Peers</Text>
      <Text style={styles.addPeersSubText}>For Goa 2022 Album</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search a peer/Phone number"
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.searchSubTextContainer}>
        <Text style={styles.searchSubText}>Recently Added</Text>
        <Image source={require('../../assets/svg/search.png')} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.peersCardContainer}>
        <Pressable style={[styles.peersCard, styles.peersCardShadowProp]}>
          <View style={styles.peersCardInfoSection}>
            <Image
              style={styles.peersCardImg}
              source={require('../../assets/images/dp.png')}
            />
            <View style={styles.peersCardText}>
              <Text style={styles.peersCardName}>Ajay Kohli</Text>
              <Text style={styles.peersCardHandle}>@Rameshhko</Text>
            </View>
          </View>

          <Image
            style={styles.peersCardAddBtn}
            source={require('../../assets/icons/add-icon.png')}
          />
        </Pressable>
        <Pressable style={[styles.peersCard, styles.peersCardShadowProp]}>
          <View style={styles.peersCardInfoSection}>
            <Image
              style={styles.peersCardImg}
              source={require('../../assets/images/dp.png')}
            />
            <View style={styles.peersCardText}>
              <Text style={styles.peersCardName}>Ajay Kohli</Text>
              <Text style={styles.peersCardHandle}>@Rameshhko</Text>
            </View>
          </View>

          <Image
            style={styles.peersCardAddBtn}
            source={require('../../assets/icons/add-icon.png')}
          />
        </Pressable>
        <Pressable style={[styles.peersCard, styles.peersCardShadowProp]}>
          <View style={styles.peersCardInfoSection}>
            <Image
              style={styles.peersCardImg}
              source={require('../../assets/images/dp.png')}
            />
            <View style={styles.peersCardText}>
              <Text style={styles.peersCardName}>Ajay Kohli</Text>
              <Text style={styles.peersCardHandle}>@Rameshhko</Text>
            </View>
          </View>

          <Image
            style={styles.peersCardAddBtn}
            source={require('../../assets/icons/add-icon.png')}
          />
        </Pressable>
        <Pressable style={[styles.peersCard, styles.peersCardShadowProp]}>
          <View style={styles.peersCardInfoSection}>
            <Image
              style={styles.peersCardImg}
              source={require('../../assets/images/dp.png')}
            />
            <View style={styles.peersCardText}>
              <Text style={styles.peersCardName}>Ajay Kohli</Text>
              <Text style={styles.peersCardHandle}>@Rameshhko</Text>
            </View>
          </View>

          <Image
            style={styles.peersCardAddBtn}
            source={require('../../assets/icons/add-icon.png')}
          />
        </Pressable>
        <Pressable style={[styles.peersCard, styles.peersCardShadowProp]}>
          <View style={styles.peersCardInfoSection}>
            <Image
              style={styles.peersCardImg}
              source={require('../../assets/images/dp.png')}
            />
            <View style={styles.peersCardText}>
              <Text style={styles.peersCardName}>Ajay Kohli</Text>
              <Text style={styles.peersCardHandle}>@Rameshhko</Text>
            </View>
          </View>

          <Image
            style={styles.peersCardAddBtn}
            source={require('../../assets/icons/add-icon.png')}
          />
        </Pressable>
      </ScrollView>

      <View style={styles.btnsSection}>
        <Pressable
          onPress={() => {
            navigation.navigate('WelcomeScreen' as never);
          }}>
          <Image
            style={styles.homeBtnIcon}
            source={require('../../assets/icons/home_icon.png')}
          />
        </Pressable>
        <Pressable style={styles.startBtn}>
          <Text style={styles.startBtnText}>
            Start with <Text style={styles.startBtnOPeerCount}>0</Text> peers
          </Text>
        </Pressable>
        <Pressable>
          <Image
            style={styles.contactBtnIcon}
            source={require('../../assets/icons/profile_icon.png')}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AddPeersScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  arrowBack: {
    position: 'absolute',
    borderWidth: 4,
    top: 60,
    left: 25,
  },
  notifBtnBg: {
    width: 50,
    height: 50,
    left: 345,
    top: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  notifBtn: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    zIndex: -1,
  },
  notifAlert: {
    zIndex: 1,
    position: 'absolute',
    left: 335,
    top: 30,
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
  addPeersText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 30,
    color: '#EB5757',
    left: 40,
    top: 70,
  },
  addPeersSubText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    color: '#EB5757',
    left: 40,
    top: 80,
  },
  inputContainer: {
    top: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    width: 301,
    height: 45,
  },
  input: {
    textAlign: 'left',
    paddingLeft: 15,
    backgroundColor: '#F2F2F2',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    borderRadius: 22.5,
  },
  searchSubTextContainer: {
    top: 115,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 70,
  },
  searchSubText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 13,
    color: '#646464',
  },
  peersCardContainer: {
    top: 130,
    width: '100%',
    height: 390,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  peersCard: {
    width: 320,
    height: 75,
    marginTop: 20,
    backgroundColor: '#f1f1f1',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  peersCardInfoSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  peersCardImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  peersCardText: {
    marginTop: 5,
  },
  peersCardName: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
    color: '#E15151',
  },
  peersCardHandle: {
    marginTop: 5,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 12,
    color: '#646464',
  },
  peersCardAddBtn: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  peersCardShadowProp: {
    elevation: 30,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  btnsSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 30,
    paddingHorizontal: 40,
  },
  homeBtnIcon: {
    height: 40,
    width: 40,
  },
  startBtn: {
    width: 150,
    height: 50,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: '#EB5757',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startBtnText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 21,
    color: '#FFFFFF',
  },
  startBtnOPeerCount: {color: '#E0FD2C'},
  contactBtnIcon: {
    height: 40,
    width: 40,
  },
});
