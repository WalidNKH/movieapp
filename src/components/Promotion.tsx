import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'
import { useTheme } from '../theme/ThemeContext'; // Assure-toi que le chemin est correct


const {width, height} = Dimensions.get('window');

  const Promotion = () => {
    const { theme, toggleTheme } = useTheme();
    const showPromoCode = () => {
        Alert.alert("Code Promo", "Votre code promo est: WALID TU AURAS 20/20", [{ text: "OK" }]);
    };

    return (
      <View style={{marginBottom:50}}>
        <View style={styles.imageContainer}>
        <Image 
        source={require('../assets/blackfriday.jpg')}
        style={[styles.backgroundImage, styles.centeredImage]}/>
        </View>
        <Text style={[styles.text, { color: theme.text}]}>Black Friday is here!</Text>
        <Text style={[styles.secondText, { color: theme.text}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sociis pulvinar auctor nibh nibh iaculis id.</Text>
        <TouchableOpacity style={[styles.button, {backgroundColor: theme.activeTab}]} onPress={showPromoCode}>
          <Text style={[styles.buttonText]}>Check Detail</Text>
        </TouchableOpacity>
      </View>
    )
  }


const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        fontWeight: 500,
        paddingHorizontal: 20,
        paddingTop: 15
    },
    secondText:{
        fontSize: 12,
        paddingHorizontal: 20,
        paddingTop: 15

    },
    imageContainer: {
        paddingHorizontal: 20, // Add margins to the container instead of the image
      },
    backgroundImage: {
        width: `100%`,
        height: height * 0.2,
        paddingHorizontal: 50,
        marginLeft: 20,
        marginRight: 20
    },
    centeredImage: {
        alignSelf: 'center', 
    },
    button: {
        padding: 15,
        borderRadius: 5,
        marginTop: 15, // Espace au-dessus du bouton
        marginHorizontal: 20
    },
    buttonText: {
        color: '#000000', // Couleur du texte du bouton
        textAlign: 'center', // Centre le texte
        fontSize: 16,
    }
});

export default Promotion;