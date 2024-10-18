// src/screens/HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext'; // Assure-toi que le chemin est correct
// import BestMovies from '../components/BestMovies';
import { SafeAreaView } from 'react-native-safe-area-context';


const HomeScreen = () => {
    const [best, setBest] = useState([
        { title: "Movie 1" },
        { title: "Movie 2" },
        { title: "Movie 3" }
    ]);
    const { theme } = useTheme();

    return (
        <View style={{ flex: 1, backgroundColor: theme.background }}>
            <SafeAreaView style={{ flex: 1, alignSelf: 'stretch' }}>
                <Text>BEST MOVIeeeeeE </Text>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', padding: 16 }}>
                    {/* <BestMovies data={best} /> */}
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 10}}
                >
                </ScrollView>
            </SafeAreaView>
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

export default HomeScreen;
