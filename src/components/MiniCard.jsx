import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import Spacer from "./Spacer";
const MiniCard = ({ image, title, price }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", margin:2 }}>
      <View
        style={{
          width: 120,
          height: 80,
          backgroundColor: "red",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Image source={image} style={{ width: "100%", height: "100%" }} />
      </View>
      <Spacer space={8} />
      <Text>{title}</Text>
      <Text style={{color:'#FF4200'}}>${price}</Text>
    </View>
  );
};

export default MiniCard;

const styles = StyleSheet.create({});
