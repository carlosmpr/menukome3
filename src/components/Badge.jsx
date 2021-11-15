import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Badge = ({text, active}) => {
    const styles = StyleSheet.create({

        content:{ padding: 10, backgroundColor: active ?  "#F6AD69" :"#E7E6E6" , borderRadius: 10 },
        text:{ color: active ? "white":"black", fontWeight:'600', fontSize:12 }
    });
  return (
    <View style={styles.content}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Badge;


