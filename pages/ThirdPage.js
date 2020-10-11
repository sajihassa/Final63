// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/

import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView
} from 'react-native';

const ThirdPage = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Customer
          </Text>
          <Button
            onPress={
              () => navigation.navigate('FirstPage')
            }
            title="Home Page"
          />
          <Button
            onPress={
              () => navigation.navigate('SecondPage')
            }
            title="Staff"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ThirdPage;