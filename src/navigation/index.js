// In App.js in a new project

import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './../screens/Splash'
import Home from '../screens/Home';
import FBLive from '../screens/FBLive';
import Youtube from '../screens/Youtube';
import Staff from '../screens/Staff';
import Contact from '../screens/ContactUs';
import styles from '../styles/style';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {

    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: "#460000",
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderTopWidth: 0,
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    height: 60,
                    elevation: 0,
                },
                labelStyle: {
                    fontWeight: "bold",
                    fontSize: 13
                },
                activeTintColor: '#a58430',
                inactiveTintColor: 'white',
                tabBar: (props) => (
                    <View style={styles.navigatorContainer}>
                        <BottomTabBar
                            {...props}
                        />
                        {IS_IPHONE_X && (
                            <View style={[styles.xFillLine, {
                                backgroundColor: barColor
                            }]} />
                        )}
                    </View>
                ),
            }}
        >
            <Tab.Screen name="Home" component={Home}

                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? <Image
                            source={require('./../assets/Home.png')}
                            style={{ height: 20, width: 20 }}
                        /> :
                            <Image
                                source={require('./../assets/Home.png')}
                                style={{ height: 20, width: 20 }}
                            />
                }} />
            <Tab.Screen name="Staff" component={Staff}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ?
                            <Image
                                source={require('./../assets/emp.png')}
                                style={{ height: 24, width: 24 }}
                            /> : <Image
                                source={require('./../assets/emp.png')}
                                style={{ height: 24, width: 24, marginBottom: 10 }}
                            />
                }} />

            <Tab.Screen name="Youtube" component={Youtube}

                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? <Image
                            source={require('./../assets/youtube.png')}
                            style={{ height: 20, width: 20 }}
                        /> : <Image
                            source={require('./../assets/youtube.png')}
                            style={{ height: 22, width: 22 }}
                        />
                }} />

            <Tab.Screen name="Contact Us" component={Contact}

                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? <Image
                            source={require('./../assets/contact.png')}
                            style={{ height: 20, width: 24 }}
                        /> : <Image
                            source={require('./../assets/contact.png')}
                            style={{ height: 18, width: 18 }}
                        />
                }} />


            <Tab.Screen name="FB Live" component={FBLive}

                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? <Image
                            source={require('./../assets/fbLive.png')}
                            style={{ height: 20, width: 20 }}
                        /> : <Image
                            source={require('./../assets/fbLive.png')}
                            style={{ height: 23, width: 23 }}
                        />
                }} />
            {/* <Tab.Screen name="" component={Wallet} /> */}
        </Tab.Navigator >
    );
}
function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Home" component={HomeTabs} screenOptions={{ backgroundColor: styles.secoundaryBG }} options={{ headerShown: false }} /> */}
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Fblive" component={FBLive} options={{ headerShown: false }} />
                <Stack.Screen name="Youtube" component={Youtube} options={{ headerShown: false }} />
                <Stack.Screen name="Staff" component={Staff} options={{ headerShown: false }} />
                <Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;