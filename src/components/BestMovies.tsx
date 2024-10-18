// import React from 'react';
// import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
// import { useTheme } from '../theme/ThemeContext';
// import Carousel from 'react-native-snap-carousel';

// export default function BestMovies({ data }) {
//     const { theme } = useTheme();

//     return (
//         <View style={[styles.container, {backgroundColor: theme.background}]}>
//             <Text style={[styles.text, {color: theme.text}]}>Best Moviesss</Text>
//             <Carousel
//                 data={data}
//                 renderItem={({ item }) => <MovieCard item={item} />}
//                 firstItem={1}
//                 inactiveSlideOpacity={0.60}
//                 sliderWidth={600}
//                 itemWidth={400}
//                 slideStyle={{ display: 'flex', alignItems: 'center' }}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 16, // Assure un padding pour ne pas coller les éléments aux bords
//     },
//     text: {
//         alignSelf: 'flex-start',
//         fontSize: 25,
//     }
// });

// const MovieCard = ({ item }) => {
//     return (
//         <TouchableWithoutFeedback>
//             <View style={styles.movieCard}>
//                 <Text>Movie: {item.title}</Text>
//             </View>
//         </TouchableWithoutFeedback>
//     );
// };

// styles.movieCard = {
//     padding: 10,
//     marginVertical: 10,
//     backgroundColor: '#fff',
//     borderRadius: 5,
// };
