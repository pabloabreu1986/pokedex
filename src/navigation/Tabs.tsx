import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

// Navigator
import { HomeStackNavigator } from './HomeStack'

// Screens
import { SearchStackNavigator } from './SearchStack'

const Tab = createBottomTabNavigator()

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#f64b4a',
                tabBarLabelStyle: {
                    marginBottom: Platform.OS === 'ios' ? 0 : 10
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255, 0.89)',
                    borderWidth: 0,
                    elevation: 0,
                    height: Platform.OS === 'ios' ? 80 : 65
                },
                tabBarIconStyle: {
                    marginTop: 10
                }
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="list-outline" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={SearchStackNavigator}
                options={{
                    tabBarLabel: 'Buscar',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="search-outline" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
