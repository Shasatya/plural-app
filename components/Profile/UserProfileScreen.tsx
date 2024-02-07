import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
const UserProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerIcons}>
        <Pressable onPress={() => navigation.navigate('Menu' as never)}>
          <Image source={require('../../assets/icons/menu_icon_red.png')} />
        </Pressable>
        <Pressable style={styles.optionsIcon}>
          <Image source={require('../../assets/icons/options-icon.png')} />
        </Pressable>
      </View>
      <Text style={styles.textUsername}>Disha Shravasti</Text>
      <Text style={styles.textUserHandle}>@dishashravasti</Text>

      <View style={styles.highlightContainer}>
        <View>
          <View style={styles.profilePicContainer}>
            <Image source={require('../../assets/images/profile-pic.png')} />
          </View>
        </View>
        <View>
          <View style={styles.userStatsContainer}>
            <View style={styles.userStatsTextContainer}>
              <Text style={styles.userStatsBoldText}>320 </Text>
              <Text style={styles.userStatsLightText}>Peers</Text>
            </View>
            <View style={styles.userStatsTextContainer}>
              <Text style={styles.userStatsBoldText}>12</Text>
              <Text style={styles.userStatsLightText}> Albums</Text>
            </View>
          </View>
          <View style={styles.friends}>
            <Image
              style={styles.friendsImg}
              source={require('../../assets/images/friend-1.png')}
            />
            <Image
              style={styles.friendsImg}
              source={require('../../assets/images/friend-2.png')}
            />
            <Image
              style={styles.friendsImg}
              source={require('../../assets/images/friend-3.png')}
            />
            <Image
              style={styles.friendsImg}
              source={require('../../assets/images/friend-n.png')}
            />
          </View>
        </View>
      </View>

      <View style={styles.userStatsBtnsContainer}>
        <Pressable style={styles.contributionsBtn}>
          <Text style={styles.contributionsText}>Contributions</Text>
        </Pressable>
        <Text style={styles.textPartner}>Partner</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.albumContainer}>
        <Pressable style={[styles.albumCard, styles.albumCardShadowProp]}>
          <Image
            style={styles.albumCardImg}
            source={require('../../assets/images/pic_1.jpg')}
          />
          <Text style={styles.albumCardText}>
            Album : <Text style={styles.albumCardBoldText}>Goa 2022</Text>
          </Text>
          <Text style={styles.albumCardText}>
            Created by : <Text style={styles.albumCardBoldText}>Vikas</Text>
          </Text>
        </Pressable>

        <Pressable style={[styles.albumCard, styles.albumCardShadowProp]}>
          <Image
            style={styles.albumCardImg}
            source={require('../../assets/images/pic_1.jpg')}
          />
          <Text style={styles.albumCardText}>
            Album : <Text style={styles.albumCardBoldText}>Goa 2022</Text>
          </Text>
          <Text style={styles.albumCardText}>
            Created by : <Text style={styles.albumCardBoldText}>Vikas</Text>
          </Text>
        </Pressable>
        <Pressable style={[styles.albumCard, styles.albumCardShadowProp]}>
          <Image
            style={styles.albumCardImg}
            source={require('../../assets/images/pic_1.jpg')}
          />
          <Text style={styles.albumCardText}>
            Album : <Text style={styles.albumCardBoldText}>Goa 2022</Text>
          </Text>
          <Text style={styles.albumCardText}>
            Created by : <Text style={styles.albumCardBoldText}>Vikas</Text>
          </Text>
        </Pressable>
      </ScrollView>

      <View style={styles.navigationBtnsContainer}>
        <Pressable>
          <Image
            style={styles.navigationBtns}
            source={require('../../assets/icons/home_icon.png')}
          />
        </Pressable>
        <Pressable>
          <Image
            style={styles.navigationBtns}
            source={require('../../assets/icons/create-icon-primary.png')}
          />
        </Pressable>
        <Pressable>
          <Image
            style={styles.navigationBtns}
            source={require('../../assets/icons/bell-red.png')}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  headerIcons: {
    display: 'flex',
    flexDirection: 'row',
    top: 40,
    paddingLeft: 35,
  },
  optionsIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textUsername: {
    left: 34,
    top: 110,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 38,
    color: '#4F4F4F',
  },
  textUserHandle: {
    left: 34,
    top: 110,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 16,
    color: '#4F4F4F',
  },
  highlightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    top: 130,
    paddingHorizontal: 35,
  },
  profilePicContainer: {
    backgroundColor: '#DAC2DE',
    width: 105,
    height: 125,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  userStatsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  userStatsTextContainer: {
    flexDirection: 'column',
  },
  userStatsBoldText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 45,
    color: '#E15151',
  },
  userStatsLightText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 15,
    color: '#646464',
  },
  friends: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  friendsImg: {
    height: 42,
    width: 42,
  },
  userStatsBtnsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 70,
    top: 145,
    paddingLeft: 35,
  },
  contributionsBtn: {
    width: 115,
    height: 35,
    borderRadius: 25,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EB5757',
  },
  contributionsText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 20,
    color: '#FFFFFF',
  },
  textPartner: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 20,
    color: '#BB6BD9',
    opacity: 0.5,
  },
  albumContainer: {
    display: 'flex',
    flexDirection: 'column',
    top: 160,
    width: '100%',
    height: '100%',
  },
  albumCard: {
    width: 296,
    height: 270,
    borderRadius: 30,
    backgroundColor: '#f2f2f2',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 20,
  },
  albumCardImg: {
    width: 260,
    height: 180,
    top: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderRadius: 30,
  },
  albumCardShadowProp: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  albumCardText: {
    left: 20,
    top: 30,
    marginBottom: 5,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 20,
    color: '#EB5757',
  },
  albumCardBoldText: {
    fontWeight: 'bold',
  },
  navigationBtnsContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    paddingHorizontal: 50,
  },
  navigationBtns: {
    height: 30,
    width: 30,
  },
});
