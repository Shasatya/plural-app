import {useNavigation} from '@react-navigation/native';
import {
  Image,
  Text,
  StyleSheet,
  Pressable,
  View,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const MenuScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.cross}>
        <Image source={require('../../assets/icons/cross-icon.png')} />
      </Pressable>

      <View style={styles.profilePicContainer}>
        <Image
          style={styles.profilePic}
          source={require('../../assets/images/profile-pic.png')}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textUsername}>Disha Shravasti</Text>
        <Text style={styles.textUserHandle}>@dishashravasti</Text>
        <Pressable>
          <Text style={styles.textEditProfile}>Edit Profile</Text>
        </Pressable>
      </View>

      <View style={styles.btnsContainer}>
        <View style={styles.btnRow}>
          <Image source={require('../../assets/icons/create-album.png')} />
          <Pressable>
            <Text style={styles.btnRowText}>Create a new Album</Text>
          </Pressable>
        </View>
        <View style={styles.btnRow}>
          <Image source={require('../../assets/icons/my-albums.png')} />
          <Pressable>
            <Text style={styles.btnRowText}>My Albums</Text>
          </Pressable>
        </View>
        <View style={styles.btnRow}>
          <Image source={require('../../assets/icons/search-icon.png')} />
          <Pressable>
            <Text style={styles.btnRowText}>Find Friends</Text>
          </Pressable>
        </View>
        <View style={styles.btnRow}>
          <Image source={require('../../assets/icons/settings-icon.png')} />
          <Pressable>
            <Text style={styles.btnRowText}>Privacy Settings</Text>
          </Pressable>
        </View>
        <View style={styles.btnRow}>
          <Image source={require('../../assets/icons/gift-icon-red.png')} />
          <Pressable>
            <Text style={styles.btnRowText}>Rewards</Text>
          </Pressable>
          <Pressable>
            <Image source={require('../../assets/icons/arrow-down.png')} />
          </Pressable>
        </View>
      </View>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.promotionsContainer}>
        <Pressable style={styles.promotionCard}>
          <Image
            style={styles.promotionCardImg}
            source={require('../../assets/images/pic_1.jpg')}
          />
        </Pressable>
        <Pressable style={styles.promotionCard}>
          <Image
            style={styles.promotionCardImg}
            source={require('../../assets/images/pic_1.jpg')}
          />
        </Pressable>
      </ScrollView>

      <View style={styles.footerContainer}>
        <Pressable>
          <Text style={styles.footerTabs}>Privacy Policy</Text>
        </Pressable>
        <Image source={require('../../assets/icons/dot.png')} />
        <Pressable>
          <Text style={[styles.footerTabs, styles.footerLogoutTab]}>
            Logout
          </Text>
        </Pressable>
        <Image source={require('../../assets/icons/dot.png')} />
        <Pressable>
          <Text style={styles.footerTabs}>Version. Beta 0.1</Text>
        </Pressable>
      </View>

      <Text style={styles.footerText}>Plural Photos @beta </Text>
      <Text style={styles.footerText}>
        All copyrights reserved to plural technologies
      </Text>
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  cross: {
    top: 20,
    left: 25,
  },
  profilePicContainer: {
    top: 40,
    left: 25,
    backgroundColor: '#DAC2DE',
    width: 75,
    height: 75,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  profilePic: {
    width: 50,
    height: 60,
  },
  textContainer: {top: 60, left: 25},
  textUsername: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 38,
    color: '#4F4F4F',
  },
  textUserHandle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 16,
    color: '#4F4F4F',
  },
  textEditProfile: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 16,
    color: '#E35151',
    marginTop: 5,
  },
  btnsContainer: {
    top: 80,
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    paddingHorizontal: 25,
  },
  btnRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  btnRowText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 26,
    color: '#EB5757',
  },
  promotionsContainer: {
    flexDirection: 'row',
    top: 100,
    width: '100%',
    paddingLeft: 20,
  },
  promotionCard: {
    width: 290,
    height: 150,
    marginRight: 20,
    borderRadius: 20,
    backgroundColor: '#000',
  },
  promotionCardImg: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 70,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
  },
  footerTabs: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 15,
    color: '#EB5757',
  },
  footerLogoutTab: {
    fontWeight: '600',
  },
  footerText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 12,
    textAlign: 'center',
    color: '#EB5757',
    bottom: 30,
  },
});
