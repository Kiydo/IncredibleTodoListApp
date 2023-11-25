import React from 'react';
import { View, Text, Button } from 'react-native';

const AboutScreen = ({ navigation }) => {
  return (
    <MainLayout>
        <View>
        <Text>App Name: Incredible To Do List App</Text>
        <Text>Your Name: Edward Magtoto</Text>
        <Text>Current Date: {new Date().toDateString()}</Text>
        <Button
            title="Go to Home Screen"
            onPress={() => navigation.navigate('Home')}
        />
        </View>
    </MainLayout>
  );
};

export default AboutScreen;