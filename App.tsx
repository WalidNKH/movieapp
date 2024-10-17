import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Assure-toi d'importer le bon pack d'icônes
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import WishlistScreen from './src/screens/WishlistScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { ThemeProvider, useTheme } from './src/theme/ThemeContext'; // Assure-toi que le chemin est correct
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const AppContent = () => {
  const { theme } = useTheme(); // Utiliser le thème ici

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Wishlist') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.activeTab,
        tabBarInactiveTintColor: theme.text,
        tabBarStyle: { backgroundColor: theme.background },
        headerStyle: { backgroundColor: theme.background },
        headerShown: false,
        safeAreaInsets: { bottom : 0, top: 0 }, 
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
     </SafeAreaView>
  );
};

export default function App() {
  return (
    <ThemeProvider> 
      <NavigationContainer>
        <AppContent />
      </NavigationContainer> 
    </ThemeProvider>
  );
}

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const App = () => (
//   <View style={styles.container}>
//     <Text style={styles.welcomeText}>Welcome to React Native!</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcomeText: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: 'blue',
//   }
// });

// export default App;

