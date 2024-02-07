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

const NotificationScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headContainer}>
        <Pressable
          style={styles.arrowBackBtn}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/arrow_back.png')} />
        </Pressable>
        <View>
          <Text>
            <Image source={require('../../assets/svg/bell.png')} />
            <Text style={styles.textNotification}>{'  '} Notifications</Text>
          </Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate('UserProfile' as never)}
          style={styles.profliePicBg}>
          <Image source={require('../../assets/svg/profile-pic.png')} />
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.notificationCardContainer}>
        <Pressable
          style={[styles.notificationCard, styles.notificationCardShadowProp]}>
          <Image
            style={styles.notificationCardImg}
            source={require('../../assets/images/dp.png')}
          />
          <View style={styles.notificationCardInfoSection}>
            <View style={styles.notificationCardText}>
              <Text style={styles.notificationCardBoldText}>
                You've Been Spotted!!
              </Text>
              <Text style={styles.notificationCardLightText}>
                You were found with 5 others in an Album
              </Text>
            </View>
            <View style={styles.notificationCardBtnsContainer}>
              <Pressable style={styles.notificationCardButton}>
                <Text style={styles.notificationCardButtonText}>View</Text>
              </Pressable>
              <Pressable style={styles.notificationCardButton}>
                <Text style={styles.notificationCardButtonText}>Reject</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.notificationCard, styles.notificationCardShadowProp]}>
          <Image
            style={styles.notificationCardImg}
            source={require('../../assets/images/dp.png')}
          />
          <View style={styles.notificationCardInfoSection}>
            <View style={styles.notificationCardText}>
              <Text style={styles.notificationCardLightText}>
                Vishal requested access to
              </Text>
              <Text style={styles.notificationCardBoldText}>
                Album : Sandeep ki {'\n'}Shaadi
              </Text>
            </View>
            <View style={styles.notificationCardBtnsContainer}>
              <Pressable style={styles.notificationCardButton}>
                <Text style={styles.notificationCardButtonText}>Accept</Text>
              </Pressable>
              <Pressable style={styles.notificationCardButton}>
                <Text style={styles.notificationCardButtonText}>Reject</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.notificationCard, styles.notificationCardShadowProp]}>
          <Image
            style={styles.notificationCardImg}
            source={require('../../assets/images/dp.png')}
          />
          <View style={styles.notificationCardInfoSection}>
            <View style={styles.notificationCardText}>
              <Text style={styles.notificationCardLightText}>
                Vishal requested access to
              </Text>
              <Text style={styles.notificationCardBoldText}>
                Album : Sandeep ki {'\n'}Shaadi
              </Text>
            </View>
            <View style={styles.notificationCardBtnsContainer}>
              <Pressable style={styles.notificationCardButton}>
                <Text style={styles.notificationCardButtonText}>Accept</Text>
              </Pressable>
              <Pressable style={styles.notificationCardButton}>
                <Text style={styles.notificationCardButtonText}>Reject</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  arrowBackBtn: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headContainer: {
    top: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  textNotification: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 26,
    color: '#EB5757',
  },
  profliePicBg: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DAC2DE',
    height: 48,
    width: 48,
    borderRadius: 50,
  },
  notificationCardContainer: {
    top: 80,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
  },
  notificationCard: {
    width: 323,
    height: 147,
    marginTop: 20,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  notificationCardInfoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  notificationCardImg: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  notificationCardText: {
    width: 165,
  },
  notificationCardBoldText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 13,
    lineHeight: 20,
    color: '#EB5757',
  },
  notificationCardLightText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 15,
    color: '#EB5757',
  },
  notificationCardShadowProp: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 1,
  },
  notificationCardBtnsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },
  notificationCardButton: {
    width: 60,
    height: 30,
    borderRadius: 16,
    backgroundColor: '#EB5757',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationCardButtonText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 20,
    color: '#FFFFFF',
  },
});
export default NotificationScreen;
