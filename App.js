import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PlaceholderRestaurant from "./components/PlaceholderRestaurant";

import burgerBarImage from "./images/burger_bar.jpg";
import pizzaPalaceImage from "./images/pizza_palace.jpg";
import sushiStationImage from "./images/sushi_station.jpg";

const restaurants = [
  {
    id: 1,
    restaurantName: "Burger Bar",
    restaurantImage: burgerBarImage,
    colleagueCount: 2,
  },
  {
    id: 2,
    restaurantName: "Pizza Palace",
    restaurantImage: pizzaPalaceImage,
    colleagueCount: 0,
  },
  {
    id: 3,
    restaurantName: "Sushi Station",
    restaurantImage: sushiStationImage,
    colleagueCount: 4,
  },
];

const App = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handlePress = (id) => {
    let updatedRestaurants = [...restaurants];
    let selectedIndex = updatedRestaurants.findIndex((r) => r.id === id);
    let selectedRest = updatedRestaurants[selectedIndex];

    if (selectedRestaurant) {
      let previouslySelectedIndex = updatedRestaurants.findIndex(
        (r) => r.id === selectedRestaurant.id
      );
      updatedRestaurants[previouslySelectedIndex].colleagueCount -= 1;
    }

    selectedRest.colleagueCount += 1;
    setSelectedRestaurant(selectedRest);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Which restaurant are you going to?</Text>
      <ScrollView style={styles.restaurantContainer}>
        {restaurants.map((restaurant) => (
          <PlaceholderRestaurant
            key={restaurant.id}
            restaurantName={restaurant.restaurantName}
            restaurantImage={restaurant.restaurantImage}
            colleagueCount={restaurant.colleagueCount}
            selected={
              selectedRestaurant
                ? restaurant.id === selectedRestaurant.id
                : false
            }
            onPress={() => handlePress(restaurant.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 100,
    marginBottom: 20,
  },
  restaurantContainer: {
    marginTop: 20,
  },
});

export default App;
