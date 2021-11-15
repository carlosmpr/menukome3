import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
const Card = ({ title, desc, rating, image, price }) => {
  return (
    <View>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.content}>
        <View style={styles.textContent}>
          <Text style={styles.title}>{title}</Text>
          <Text>{desc} </Text>
        </View>
        <View>
          <View style={styles.rating}>
            <FontAwesome name="star" size={12} color="#FFC529" />
            <Text>{rating}</Text>
          </View>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 200,
    borderRadius: 20,
    overflow:'hidden'
  },
  content: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  textContent: {
    width: "70%",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FE724C",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
