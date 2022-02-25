import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LinearGradient } from 'expo-linear-gradient';
import Home from '../../screens/home';
import Profile from '../../screens/profile';
import Remedies from '../../screens/remedies';
import Camera from '../../screens/camera';
import Stats from '../../screens/stats';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ children, onPress }) => {
  return (
    <Pressable
      style={{
        top: -50,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      onPress={onPress}>
      <LinearGradient
        colors={['#4E4DEB', '#1B1D2C']}
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
        }}>
        {children}
      </LinearGradient>
    </Pressable>
  );
};
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          backgroundColor: 'white',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderTopColor: 'transparent',
          height: 100,
        },
      }}>
      <Tab.Screen
        name="Heeme1"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/home3.png')}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? '#4E4DEB' : 'black',
                }}
              />

              <Text style={{ color: focused ? '#4E4DEB' : 'black' }}>HOME</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('./../../assets/portfolio.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? '#4E4DEB' : 'black',
                }}
              />
              <Text style={{ color: focused ? '#4E4DEB' : 'black' }}>
                PROFILE
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cameraa"
        component={Camera}
        options={{
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./../../assets/camera.png')}
              resizeMode="contain"
              style={{
                height: 30,
                width: 30,
                tintColor: 'black',
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
        //  headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/icons/line_graph.png')}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? '#4E4DEB' : 'black',
                }}
              />
              <Text style={{ color: focused ? '#4E4DEB' : 'black' }}>
                STATS
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="REMEDIES"
        component={Remedies}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('./../../assets/prescription.png')}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? '#4E4DEB' : 'black',
                }}
              />
              <Text style={{ color: focused ? '#4E4DEB' : 'black' }}>
                Remedies
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#4E4DEB',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Tabs;
