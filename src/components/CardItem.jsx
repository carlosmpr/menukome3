import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Spacer from "./Spacer";
import { FontAwesome } from "@expo/vector-icons";
const CardItem = ({ image, title, price, rating }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <View style={styles.rating}>
        <FontAwesome name="star" size={12} color="#FFC529" />
        <Text>{rating}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price} USD</Text>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    width: "40%",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "white",
    position: "relative",
    alignItems: "center",
    margin:18,
    paddingVertical:10
  },

  image: {
    width: "100%",
    height: 120,
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: { fontWeight: "700" },
  price: { fontWeight: "300", color: "#A1A1A1" },
});
