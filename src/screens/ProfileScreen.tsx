import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext'; // Assure-toi que le chemin est correct

const ProfileScreen = () => {
    const { theme, toggleTheme } = useTheme();
    const [isEnabled, setIsEnabled] = useState(false); // Initialiser avec le mode sombre actuel

    // Fonction pour basculer le thème et l'état du Switch
    const toggleSwitch = () => {
        setIsEnabled((previousState: boolean) => !previousState);
        toggleTheme();
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={{ color: theme.text, marginBottom: 20 }}>Profile Screen</Text>
            <Switch
                trackColor={{ false: "#767577", true: theme.activeTab }} // Couleur de la piste
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"} // Couleur du thumb
                ios_backgroundColor="#3e3e3e" // Couleur de fond sur iOS
                onValueChange={toggleSwitch} // Gestionnaire pour basculer le thème
                value={isEnabled} // L'état actuel du Switch
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ProfileScreen;
