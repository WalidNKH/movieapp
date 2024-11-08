import { Text, StyleSheet, View,TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { useTheme } from '../theme/ThemeContext'; // Assure-toi que le chemin est correct
import Icon from 'react-native-vector-icons/Ionicons'; // Ajouter cet import

const MovieCard = (props: any) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <TouchableOpacity onPress={() => {}}>
            <View style={[
                styles.container, 
                props.shoudlMarginatedAtEnd 
                    ? props.isFirst 
                    ? {marginLeft: 24} : props.isLast ? {marginRight: 36}
                    :{}
                    :{},
                props.shoudlMarginatedAround?{margin: 12} : {},
                {maxWidth: props.cardWidth},
                { backgroundColor: theme.background }]}>
                <Image 
                style={[styles.cardImage, {width: props.cardWidth}]}
                source={{uri : props.imagePath}}/>
                
                {props.isSecondCarousel ? (
                    <View style={[styles.overlayContainer]}>
                        <Text numberOfLines={1} style={[styles.text, { color: theme.text, fontSize: 10, paddingTop: 10}]}>
                            {props.title}
                        </Text>
                        <View style={[styles.ratingContainer]}>
                            <Icon name="star" size={14} color="#FFD700" />
                            <Text style={[styles.ratingText, {fontSize: 10, color: theme.text}]}>
                                {props.vote_average?.toFixed(1)} 
                            </Text>
                        </View>
                    </View>
                ) : (
                    <>
                        <Text numberOfLines={1} style={[styles.text, { color: theme.text, paddingTop: 24}]}>
                            {props.title}
                        </Text>
                    </>
                )}
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    text:{
        fontSize: 14,
        fontWeight: 500,
        flex: 1,
    },
    container: {
        display: 'flex', 
        flex: 1, 
        marginBottom: 28,
    },
    overlayContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        backgroundColor: 'transparent',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: 'space-between',
    },
    cardImage: {
        aspectRatio: 2 / 3,
        borderRadius: 8
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8,
    },
    ratingText: {
        color: '#FFFFFF',
        marginLeft: 4,
        fontSize: 12,
    },
    voteCount: {
        fontSize: 12,
    },
});

export default MovieCard;