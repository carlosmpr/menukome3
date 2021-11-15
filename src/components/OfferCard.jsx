import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const OfferCard = ({ image, titlle, desc, color="rgba(255, 255, 255, 0.4)" }) => {
    const styles = StyleSheet.create({
        content: {
          width: windowWidth - 70,
          height: 100,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          marginRight:20,
          
        },
      
        titlle: { color: "black", fontWeight: "bold", fontSize: 16 },
      });
      

  return (
    <View style={styles.content}>
      <View style={{ width: "70%" }}>
        <Text style={styles.titlle}>{titlle}</Text>
        <Text>{desc}</Text>
      </View>
      <Image source={image} style={{ width: 120, height: 80 }} />
    </View>
  );
};

export default OfferCard;

