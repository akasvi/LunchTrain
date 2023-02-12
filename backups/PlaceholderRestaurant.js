1069;

/*
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

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

export default PlaceholderRestaurant;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
*/

2069;

/*
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const PlaceholderRestaurant = ({
  restaurantName,
  restaurantImage,
  colleagueCount,
}) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
    if (!selected) {
      colleagueCount += 1;
    } else {
      colleagueCount -= 1;
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container, selected && styles.selected]}>
        <Image source={restaurantImage} style={styles.image} />
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        <Text style={styles.colleagueCount}>
          {colleagueCount} colleagues going
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceholderRestaurant;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#fff",
  },
  selected: {
    backgroundColor: "#ddd",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  restaurantName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  colleagueCount: {
    fontSize: 12,
    color: "#999",
  },
});
*/
