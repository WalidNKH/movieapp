// src/screens/HomeScreen.tsx
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Dimensions, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext'; // Assure-toi que le chemin est correct
// import BestMovies from '../components/BestMovies';
import { SafeAreaView } from 'react-native-safe-area-context';
import { nowPlayingMovies, topRatedMovies, popularMovies, upcomingMovies, searchMovies, baseImagePath, marvelMovies } from '../api/apicalls';
import { TouchableOpacity } from 'react-native';
import animation from '../assets/loading.json' 
import LottieView from 'lottie-react-native';
import { StatusBar } from 'react-native';
import HeaderContainer from '../components/HeaderContainer';
import CategoryHeader from '../components/CategoryHeader';
import MovieCard from '../components/MovieCard';
import HomeHeader from '../components/HomeHeader';
import Promotion from '../components/Promotion';

type SectionProps = PropsWithChildren<{
    title: string;
}>;


const {width, height} = Dimensions.get('window');

const getMarvelMoviesList = async () => {
    try {
        let response = await fetch(marvelMovies);
        let json = await response.json();
        console.log("getMarvelMoviesList response:", json);
        return json;
    }catch (error) {
        console.error("Quelque chose n'est pas correct avec la fonction getMarvelMoviesList", error);
    }
}

const getNowPlayingMoviesList = async () => {
    try {
        let response = await fetch(nowPlayingMovies);
        let json = await response.json();
        console.log("getNowPlayingMoviesList response:", json);
        return json;
    }catch (error) {
        console.error("Quelque chose n'est pas correct avec la fonction getNowPlayingMoviesList", error);
    }
}

const getUpcomingMoviesList = async () => {
    try {
        let response = await fetch(upcomingMovies);
        let json = await response.json();
        console.log("getUpcomingMoviesList response:", json);
        return json;
    }catch (error) {
        console.error("Quelque chose n'est pas correct avec la fonction upcomingMoviesList", error);
    }
}

const getPopularMoviesList = async () => {
    try {
        let response = await fetch(popularMovies);
        let json = await response.json();
        console.log("getPopularMoviesList response:", json); // Debug log
        return json;
    }catch (error) {
        console.error("Quelque chose n'est pas correct avec la fonction popularMoviesList", error);
    }
}



const HomeScreen = ({navigation}: any) => {
    const { theme } = useTheme();

    const [ marvelMoviesList, setmarvelMoviesList ] = useState<any>(undefined);
    const [ nowPlayingMoviesList, setNowPlayingMoviesList ] = useState<any>(undefined);
    const [ upcomingMoviesList, setUpcomingMoviesList ] = useState<any>(undefined);
    const [ popularMoviesList, setPopularMoviesList ] = useState<any>(undefined);
 
    useEffect(() => {
        (async() => {
            let tempMarvel = await getMarvelMoviesList();
            console.log("tempMarvel:", tempMarvel); // Debug log
            if (tempMarvel?.results) {
                setmarvelMoviesList(tempMarvel.results);
            }

            let tempNowPlaying = await getNowPlayingMoviesList();
            console.log("tempNowPlaying:", tempNowPlaying); // Debug log
            if (tempNowPlaying?.results) {
                setNowPlayingMoviesList(tempNowPlaying.results);
            }
    
            let tempUpcoming = await getUpcomingMoviesList();
            console.log("tempUpcoming:", tempUpcoming); // Debug log
            if (tempUpcoming?.results) {
                setUpcomingMoviesList(tempUpcoming.results);
            }
    
            let tempPopular = await getPopularMoviesList();
            console.log("tempPopular:", tempPopular); // Debug log
            if (tempPopular?.results) {
                setPopularMoviesList(tempPopular.results);
            }
        })();
    },[]);
    useEffect(() => {
        if (nowPlayingMoviesList && popularMoviesList && upcomingMoviesList) {
            console.log(
                'Lengths:',
                // marvelMoviesList.lenght,
                nowPlayingMoviesList.length,
                popularMoviesList.length,
                upcomingMoviesList.length
            );
        }
    }, [nowPlayingMoviesList, popularMoviesList, upcomingMoviesList, marvelMoviesList]);

    const searchMoviesFunction = () => {
        navigation.navigate('Search');
    }
    if (
        marvelMoviesList == undefined &&
        marvelMoviesList == null &&
        nowPlayingMoviesList == undefined &&
        nowPlayingMoviesList == null &&
        upcomingMoviesList == undefined &&
        upcomingMoviesList == null &&
        popularMoviesList == undefined &&
        popularMoviesList == null
    ) {
        return (
                <SafeAreaView style={{ flex: 1, backgroundColor: theme.background, alignItems: 'center' }}>
                    <View>
                        <HeaderContainer searchFunction={searchMoviesFunction}/>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <LottieView
                        source={require('../assets/loading.json')}
                        style={{ width: 200, height: 200 }}
                        autoPlay
                        loop
                    />
                    <Text style={{ color: theme.text, fontSize: 25}}>Loading ...</Text>
                    </View>
                </SafeAreaView> 
        );
    }
    
    return (
        <View style={{ flex: 1, backgroundColor: theme.background }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContainer}
            >
                <HomeHeader/>
                <View>
                    <CategoryHeader title={'Marvel studios'}/>
                    <FlatList 
                        data={marvelMoviesList}
                        keyExtractor={(item:any) => item.id}
                        horizontal
                        contentContainerStyle={styles.list}
                        renderItem={({item,index}) => (
                            <MovieCard 
                            shoudlMarginatedAtEnd={true}
                            cardFunction={() => {
                                navigation.push('MovieDetails', {movieid: item.id});
                            }}
                            cardWidth={width / 3}
                            isFirst={index == 0 ? true:false }
                            isLast={index == upcomingMoviesList?.length - 1 ? true : false }
                            title={item.original_title} 
                            vote_average={item.vote_average}
                            vote_count={item.vote_count} 
                            imagePath={baseImagePath('w342', item.poster_path)}
                            />
                        )}
                    />
                    <CategoryHeader title={'Best movies'}/>
                    <FlatList 
                        data={popularMoviesList}
                        keyExtractor={(item:any) => item.id}
                        horizontal
                        contentContainerStyle={styles.list}
                        renderItem={({item,index}) => (
                            <MovieCard 
                            isSecondCarousel={true} 
                            shoudlMarginatedAtEnd={true}
                            cardFunction={() => {
                                navigation.push('MovieDetails', {movieid: item.id});
                            }}
                            cardWidth={width / 3}
                            isFirst={index == 0 ? true:false }
                            isLast={index == upcomingMoviesList?.length - 1 ? true : false }
                            title={item.original_title} 
                            vote_average={item.vote_average}
                            vote_count={item.vote_count} 
                            imagePath={baseImagePath('w342', item.poster_path)}
                            />
                        )}
                    />
                    <Promotion/>
                </View>
            </ScrollView>
        </View>
    );
}

console.log(searchMovies('batman'));

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        fontSize: 24,
        fontFamily: 'Gilroy-Regular',
    },
    scrollViewContainer: {
        flexGrow: 1
    }, 
    headerContainer: {
        marginHorizontal: 30
    },
    list: {
        gap: 36
    }
});

export default HomeScreen;
