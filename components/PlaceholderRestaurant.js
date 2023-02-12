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
