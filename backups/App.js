import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

/*
import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PlaceholderRestaurant from "./PlaceholderRestaurant";
import burgerBarImage from "./images/burger_bar.jpg";
import pizzaPalaceImage from "./images/pizza_palace.jpg";
import sushiStationImage from "./images/sushi_station.jpg";

const App = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "Pizza Palace",
      image: require("./images/pizza_palace.jpg"),
      colleaguesGoing: 3,
    },
    {
      id: 2,
      name: "Sushi Station",
      image: require("./images/sushi_station.jpg"),
      colleaguesGoing: 5,
    },
    {
      id: 3,
      name: "Burger Bar",
      image: require("./images/burger_bar.jpg"),
      colleaguesGoing: 2,
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Recommended Lunches</Text>
      <View style={styles.restaurantsContainer}>
        {restaurants.map((restaurant) => (
          <PlaceholderRestaurant
            key={restaurant.id}
            restaurant={restaurant}
            isSelected={selectedRestaurant === restaurant}
            onSelect={() => setSelectedRestaurant(restaurant)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  restaurantsContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default App;
*/

2069;

/*
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import burgerBarImage from "./images/burger_bar.jpg";
import pizzaPalaceImage from "./images/pizza_palace.jpg";
import sushiStationImage from "./images/sushi_station.jpg";

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

const PlaceholderRestaurant = ({
  restaurantName,
  restaurantImage,
  colleagueCount,
}) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={restaurantImage} style={styles.image} />
      <Text>{restaurantName}</Text>
      <Text>{colleagueCount} colleagues going</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
*/

3069;

/*
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import burgerBarImage from "./images/burger_bar.jpg";
import pizzaPalaceImage from "./images/pizza_palace.jpg";
import sushiStationImage from "./images/sushi_station.jpg";

const PlaceholderRestaurant = ({
  restaurantName,
  restaurantImage,
  colleagueCount,
}) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={restaurantImage} style={styles.image} />
      <Text>{restaurantName}</Text>
      <Text>{colleagueCount} colleagues going</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          height: 60,
          backgroundColor: "#000000",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "semibold", color: "#fff" }}>
          Today's Lunch Recommendation
        </Text>
      </View>
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
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
*/

4069;

/*
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
*/

5069;

/*
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PlaceholderRestaurant from "./components/PlaceholderRestaurant";

import burgerBarImage from "./images/burger_bar.jpg";
import pizzaPalaceImage from "./images/pizza_palace.jpg";
import sushiStationImage from "./images/sushi_station.jpg";

const App = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      restaurantName: "Burger Bar",
      restaurantImage: burgerBarImage,
      colleagueCount: 4,
    },
    {
      id: 2,
      restaurantName: "Pizza Palace",
      restaurantImage: pizzaPalaceImage,
      colleagueCount: 2,
    },
    {
      id: 3,
      restaurantName: "Sushi Station",
      restaurantImage: sushiStationImage,
      colleagueCount: 6,
    },
  ]);

  const handleRestaurantPress = (id) => {
    setSelectedRestaurant(id);
    let updatedRestaurants = [...restaurants];
    let selectedIndex = restaurants.findIndex((r) => r.id === id);
    updatedRestaurants[selectedIndex].colleagueCount += 1;
    setRestaurants(updatedRestaurants);
  };

  return (
    <View style={styles.restaurantGallery}>
      <Text style={styles.subtitle}>Today's Lunch Recommendation</Text>
      {restaurants.map((restaurant) => (
        <PlaceholderRestaurant
          key={restaurant.id}
          restaurantName={restaurant.restaurantName}
          restaurantImage={restaurant.restaurantImage}
          colleagueCount={restaurant.colleagueCount}
          selected={selectedRestaurant === restaurant.id}
          onPress={() => handleRestaurantPress(restaurant.id)}
        />
      ))}
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
*/
