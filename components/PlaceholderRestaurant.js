import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const PlaceholderRestaurant = ({
  restaurantName,
  restaurantImage,
  colleagueCount,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selected ? styles.containerSelected : styles.containerNotSelected,
      ]}
      onPress={onPress}
    >
      <Image style={styles.image} source={restaurantImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        <Text style={styles.colleagueCount}>
          {colleagueCount} colleagues going
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    height: 150,
    width: 300,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 1,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  containerSelected: {
    backgroundColor: "#f9f9f9",
  },
  containerNotSelected: {
    backgroundColor: "#fff",
  },
  image: {
    height: 150,
    width: 150,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  detailsContainer: {
    height: 150,
    width: 150,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  restaurantName: {
    fontWeight: "bold",
    fontSize: 20,
  },
  colleagueCount: {
    fontSize: 15,
    color: "#999",
  },
});

export default PlaceholderRestaurant;
