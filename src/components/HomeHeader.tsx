import {Text, StyleSheet, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useTheme} from '../theme/ThemeContext';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/Ionicons';
import { baseImagePath, GENRE_IDS, getMoviesByGenre } from '../api/apicalls';


const {width, height} = Dimensions.get('window');

// Définition des catégories avec leurs images
const categories = [
  { id: 1, name: 'All', genreId: GENRE_IDS.ALL },
  { id: 2, name: 'Romance', genreId: GENRE_IDS.ROMANCE },
  { id: 3, name: 'Sport', genreId: GENRE_IDS.SPORT },
  { id: 4, name: 'Kids', genreId: GENRE_IDS.KIDS },
  { id: 5, name: 'Horror', genreId: GENRE_IDS.HORROR },
];

const HomeHeader = () => {
  const {theme} = useTheme();
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [categoryImages, setCategoryImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fetchCategoryImages = async (genreId: number | string) => {
    try {
      const response = await fetch(getMoviesByGenre(genreId));
      const data = await response.json();
      const topFiveImages = data.results
        .slice(0, 5)
        .map((movie: any) => baseImagePath('w780', movie.backdrop_path));
      setCategoryImages(topFiveImages);
      setCurrentImageIndex(0);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    const category = categories.find(cat => cat.id === activeCategory);
    if (category) {
      fetchCategoryImages(category.genreId);
    }
  }, [activeCategory]);

  const handleCategoryPress = (categoryId: number) => {
    setActiveCategory(categoryId);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: categoryImages[currentImageIndex] }}
        style={styles.backgroundImage}
      />
      <LinearGradient
        colors={['transparent', theme.background]}
        style={styles.gradient}
      />

      {/* Barre de catégories */}
      <View style={styles.categoryBar}>
        <BlurView
          style={styles.blurContainer}
          blurType="dark"
          blurAmount={3}
          overlayColor="transparent"
        >
          <View style={styles.categoryContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                onPress={() => handleCategoryPress(category.id)}
                style={[
                  styles.categoryButton,
                  activeCategory === category.id && styles.activeCategoryButton
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    activeCategory === category.id && styles.activeCategoryText,
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </BlurView>
      </View>

      {/* Boutons */}
      <View style={styles.buttonContainer}>
        <View>
          <Text style={[styles.labelText, {color: theme.text, paddingLeft: 100 }]}>My List</Text>
          <TouchableOpacity 
            style={[styles.button, styles.buttonMyList, { backgroundColor: '#333333', marginRight: 16 }]} 
            onPress={() => {}}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="add" size={16} color="#FFFFFF" style={{ marginRight: 5 }} />
              <Text style={[styles.buttonText, { color: '#FFFFFF', fontWeight: 'semibold' }]}>Wishlist</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={[styles.labelText, {color: theme.text}]}>Discover</Text>
          <TouchableOpacity 
            style={[styles.button, styles.buttonDetails, { backgroundColor: theme.activeTab }]} 
            onPress={() => {}}
          >
            <Text style={[styles.buttonText, { color: theme.background, fontWeight: 'semibold' }]}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Ajout des points de défilement */}
      <View style={styles.paginationDots}>
        {categoryImages.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setCurrentImageIndex(index)}
            style={[
              styles.dot,
              currentImageIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    labelText: {
        color: '#FFFFFF',
        marginBottom: 8,
        fontSize: 16,
        paddingBottom: 24,
    },
    blurView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 25,
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    buttonDetails: {
        alignSelf: 'flex-start', 
        paddingHorizontal: 55,
        paddingVertical: 15,
        borderRadius: 8,
    },
    buttonMyList: {
        alignSelf: 'flex-end',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 8,
    },
    buttonText: {
        color: '#000000', // Couleur du texte du bouton
        textAlign: 'center', // Centre le texte
        fontSize: 16,
    },
  container: {
    position: 'relative',
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    // top: height * 0.5,
    bottom: -10,
    left: 0,
    right: 0,
},
  backgroundImage: {
    width: width,
    height: height * 0.5,
    resizeMode: 'cover',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 180,
  },
  categoryBar: {
    position: 'absolute',
    top: 40,
    width: '100%',
    alignSelf: 'center',
    zIndex: 10,
    overflow: 'hidden',
    paddingHorizontal: 24,
    marginTop: height * 0.02
  },
  blurContainer: {
    width: '100%',
    padding: 4,
    borderRadius: 25,

  },
  categoryButton: {
    alignItems: 'center',
    paddingHorizontal: 11,
    paddingVertical: 11,
    borderRadius: 90,
    minWidth: 50,
  },
  activeCategoryButton: {
    backgroundColor: 'white',
  },
  categoryText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  },
  activeCategoryText: {
    color: 'black',
  },
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDots: {
    position: 'absolute',
    bottom: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#F2F2F2'
  },
  activeDot: {
    backgroundColor: '#F2C94C',
  },
});

export default HomeHeader;
