import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileCreationScreen from './components/LoginSignUp/ProfileCreationScreen';
import ProfileConfirmationScreen from './components/LoginSignUp/ProfileConfirmationScreen';
import WelcomeScreen from './components/Welcome/WelcomeScreen';
import CreateAlbumScreen from './components/Album/CreateAlbumScreen';
import AddPeersScreen from './components/Peers/AddPeersScreen';
import LoginSignUpScreen from './components/LoginSignUp/LoginSignUpScreen';
import OtpScreen from './components/LoginSignUp/OtpScreen';
import NotificationScreen from './components/Notification/NotificationScreen';
import PersonalUserDetailsScreen from './components/LoginSignUp/PersonalUserDetailsScreen';
import UserProfileScreen from './components/Profile/UserProfileScreen';
import MenuScreen from './components/Menu/MenuScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="LoginSignUp"
          component={LoginSignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Otp"
          component={OtpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PersonalUserDetails"
          component={PersonalUserDetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileCreation"
          component={ProfileCreationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileConfirmation"
          component={ProfileConfirmationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAlbum"
          component={CreateAlbumScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddPeers"
          component={AddPeersScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
