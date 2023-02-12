import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PlaceholderRestaurant from "./components/PlaceholderRestaurant";

import burgerBarImage from "./images/burger_bar.jpg";
import pizzaPalaceImage from "./images/pizza_palace.jpg";
import sushiStationImage from "./images/sushi_station.jpg";

const App = () => {
  return (
    <View style={styles.restaurantGallery}>
      <Text style={styles.subtitle}> Today's Lunch Recommendation </Text>
      <PlaceholderRestaurant
        restaurantName="Burger Bar"
        restaurantImage={burgerBarImage}
        colleagueCount={4}
      />
      <PlaceholderRestaurant
        restaurantName="Pizza Palace"
        restaurantImage={pizzaPalaceImage}
        colleagueCount={2}
      />
      <PlaceholderRestaurant
        restaurantName="Sushi Station"
        restaurantImage={sushiStationImage}
        colleagueCount={6}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 17,
    fontWeight: "semibold",
    color: "#fff",
    backgroundColor: "#000",
  },
  restaurantGallery: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
