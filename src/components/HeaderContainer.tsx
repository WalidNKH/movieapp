import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderContainer = (props: any) => {
    const[searchText, setSearchText] = useState<string>('');
    const { theme, toggleTheme } = useTheme();
    return (
        <View style={[styles.inputBox, { backgroundColor: theme.background, borderColor: theme.text }]}>
            <TextInput style=
            {[styles.textInput, { color: theme.text, borderColor: theme.text }]} 
            placeholder="Search"
            placeholderTextColor={theme.text}
            onChangeText={textInput => setSearchText(textInput)}
            value={searchText}
            />
            <TouchableOpacity style={styles.iconContainer} onPress={() => props.searchFunction(searchText)}>
                <Icon name="search" size={24} color={theme.text} />
            </TouchableOpacity>
            {/* <Text style={{ color: theme.text }}>{searchText}</Text> */}
        </View>

    );
}

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderRadius: 25,
    width: 327,
    height: 47,
  },
  textInput:{
    flex: 1,
    fontSize: 20,
  },
  iconContainer:{
    marginLeft: 8
  }
});

export default HeaderContainer;
