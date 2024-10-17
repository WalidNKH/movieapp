import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext'; // Assure-toi que le chemin est correct

const WishlistScreen = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text }}>Wishlist Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  }
});

export default WishlistScreen;
