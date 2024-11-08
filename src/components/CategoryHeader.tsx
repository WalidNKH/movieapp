import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { useTheme } from '../theme/ThemeContext'; // Assure-toi que le chemin est correct

  const CategoryHeader = (props: any) => {
    const { theme, toggleTheme } = useTheme();
    return (
      <View>
        <Text style={[styles.text, { color: theme.text}]}>{props.title}</Text>
      </View>
    )
  }


const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        fontWeight: 500,
        paddingHorizontal: 20,
        paddingVertical:28
    }
});

export default CategoryHeader;