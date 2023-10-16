import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableHighlight,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { recipes } from './recipe.js';


const windowWidth = Dimensions.get('window').width;

const Tab = createBottomTabNavigator();

  

const imageSources = recipes;


function HomeScreen() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const filteredRecipes = imageSources.filter(food => {
    if (selectedFilter === 'All' || food.tag === selectedFilter) {
      return true;
    } else {
      return false;
    }
  });

  const searchedRecipes = filteredRecipes.filter(food => {
    return (
      food.name.toLowerCase().includes(searchText.toLowerCase()) ||
      food.tag.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const handleFilterClick = (filterName) => {
    setSelectedFilter(filterName);
  };

  const addToFavorites = (recipe) => {
    setFavoriteRecipes((prevFavorites) => [...prevFavorites, recipe]);
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Only Foods</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for food..."
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
        <View style={styles.FilterButton}>
          <View style={styles.filterButtonContainer}>
            <Button title="All" onPress={() => handleFilterClick('All')} />
          </View>
          <View style={styles.filterButtonContainer}>
            <Button title="Beef" onPress={() => handleFilterClick('beef')} />
          </View>
          <View style={styles.filterButtonContainer}>
            <Button title="Chicken" onPress={() => handleFilterClick('chicken')} />
          </View>
          <View style={styles.filterButtonContainer}>
            <Button title="Pork" onPress={() => handleFilterClick('pork')} />
          </View>
        </View>
        <Text style={styles.LabelDesign}>Recipe</Text>
        <View style={styles.buttonContainer}>
          {searchedRecipes.map((food, index) => (
            <TouchableHighlight
              key={index}
              style={styles.imageContainer}
              underlayColor="#ddd"
              onPress={() => {
                setSelectedFood(food);
                setModalVisible(true);
              }}
            >
              <>
                <Image source={food.source} style={styles.image} />
                <Text style={styles.foodName}>{food.name}</Text>
              </>
            </TouchableHighlight>
          ))}
        </View>
      </View>

      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <TouchableOpacity
                style={styles.modalBackButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalBackButtonText}>Back</Text>
              </TouchableOpacity>
              <FlatList
                horizontal
                data={Array(1).fill(selectedFood)}
                keyExtractor={(item, index) => `${item.tag}-${index}`}
                renderItem={({ item }) => (
                  <View style={styles.modalImageContainer}>
                    <Image source={item.source} style={styles.modalImage} />
                    
                    <Text style={styles.modalFoodName}>{item.name}</Text>
                    <Text style={styles.modalRecipeText}>{selectedFood.recipe}</Text>
                   
                  </View>
                )}
              />
              
              <TouchableOpacity
                style={styles.modalFavoritesButton}
                onPress={() => addToFavorites(selectedFood)}
              >
                <Text style={styles.modalFavoritesButtonText}>Favorite</Text>
              </TouchableOpacity>
              <Text style={styles.modalRecipeText}>
                {/* Add your recipe text here */}
                
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </ScrollView>
  );
}

function AboutUs(){

};

function FavoritesScreen() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const removeFromFavorites = (recipe) => {
    setFavoriteRecipes((prevFavorites) => prevFavorites.filter((r) => r !== recipe));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Favorites</Text>
      <View style={styles.buttonContainer}>
        {favoriteRecipes.map((recipe, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={recipe.source} style={styles.image} />
            <Text style={styles.foodName}>{recipe.name}</Text>
            <Button
              title="Remove from Favorites"
              onPress={() => removeFromFavorites(recipe)}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarStyle: { 
          backgroundColor: '#0F0F0F',
          borderColor: '#0F0F0F',
          borderWidth: 0,
          borderRadius: 0,
          padding: 10, 
        }, // Background color for all tabs
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: '', 
          showLabel: false,
          tabBarIcon:({focused}) => (
            <View style = {{
              backgroundColor: '',
              alignItems: "center", 
              justifyContent:'center',
              top:3,
             
             }}>
              <Image 
                source={require("./assets/home_.png")}
                resizeMode='contain'
                style={{
                  borderColor: 'black', 
                  borderWidth: 2, 
                  width: focused ? 50 : 35, 
                  height: 35,
                  tintColor: focused ? 'white' : 'grey',
                  
              }} 
                />
              <Text></Text>
            </View>
          ),
        }} 
        />
        <Tab.Screen name="Favorites" component={FavoritesScreen}options={{
          tabBarLabel: '', showLabel: false, 
          tabBarIcon:({focused}) => (
            <View style = {{
            alignItems: "center", 
            justifyContent:'center',
            top:3,
             
             }}>
              <Image 
                source={require("./assets/fave.png")}
                resizeMode='contain'
                style={{
                  borderColor: 'black', 
                  borderWidth: 2, 
                  width: focused ? 50 : 35, 
                  height: 35,
                  tintColor: focused ? 'white' : 'grey',
                
              }} 
                />
              <Text></Text>
            </View>
          ),
        }} 
      />
        <Tab.Screen name="About us" component={AboutUs}options={{
          tabBarLabel: '', showLabel: false, 
          tabBarIcon:({focused}) => (
            <View style = {{
            alignItems: "center", 
            justifyContent:'center',
            top:3,
             
             }}>
              <Image 
                source={require("./assets/about.png")}
                resizeMode='contain'
                style={{
                  borderColor: 'black', 
                  borderWidth: 2, 
                  width: focused ? 50 : 35, 
                  height: 35,
                  tintColor: focused ? 'white' : 'grey',
              }}
                />
              <Text></Text>
            </View>
          ),
        }} 
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0F0F0F',
    alignItems: 'center',
    padding: 20,
  },
  titleText: {
    color: '#F7F7F7',
    fontSize: 46,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageContainer: {
    aspectRatio: 1,
    width: '35%',
    maxWidth: windowWidth / 3 - 20,
    marginBottom: 75,
  },
  image: {
    width: '100%',
    borderRadius: 55,
    height: undefined, // Allows the height to adjust based on the image aspect ratio
    aspectRatio: 1, // Keeps the aspect ratio (1:1 for square images)
    maxWidth: windowWidth / 3 - 20,
  },
  foodName: {
    color: '#F7F7F7',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  searchInput: {
    color: '#F7F7F7',
    width: '70%',
    height: 40,
    borderColor: '#61677A',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlign: 'center',
    marginVertical: 10,
    backgroundColor: '#16181d',
  },
  FilterButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  LabelDesign: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  // Styles for Modal, BackButton, and FavoritesButton here
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: 320,
    padding: 20,
    borderRadius: 10,
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  modalFoodName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  modalRecipeText: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'left',
  },
  modalBackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    padding: 10,
  },
  modalBackButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  modalFavoritesButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    padding: 10,
  },
  modalFavoritesButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexGrow: 1,
  },
});