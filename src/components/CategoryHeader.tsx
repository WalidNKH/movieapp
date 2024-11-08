import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '../theme/ThemeContext';

const CategoryHeader = (props: any) => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: theme.text}]}>{props.title}</Text>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={[styles.seeMore, { color: theme.activeTab}]}>See more</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 28
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Gilroy-Medium',
    },
    seeMore: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Gilroy-Medium',
    }
});

export default CategoryHeader;