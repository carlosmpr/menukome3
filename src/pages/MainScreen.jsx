import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

import chicken from "../../assets/chicken.png";
import Page from "../components/Page";
import Spacer from "../components/Spacer";
import Titles from "../components/Titles";
import HorizontalScrollView from "../components/HorizontalScrollView";
import OfferCard from "../components/OfferCard";

import Card from "../components/Card";
import taco from "../../assets/taco.png";
import CardItem from "../components/CardItem";
import SelectFavorites from "../components/SelectFavorites";
import Header from "../components/Header";
const windowWidth = Dimensions.get("window").width;
const MainScreen = () => {
  return (
    <Page>
      <Header />
      <Spacer space={50} />
      <Titles text={"Monday Specials"} />
      <Spacer space={20} />
      <SelectFavorites />
      <Spacer space={20} />
      <HorizontalScrollView>
        <OfferCard
          image={chicken}
          desc="Tender chickencryspi and fresh with fries $20"
          titlle={"Chicken cryspi"}
        />
        <OfferCard
          image={chicken}
          desc="Tender chickencryspi and fresh with fries $20"
          titlle={"Chicken cryspi"}
          color="#559cf1"
        />
      </HorizontalScrollView>
      <Spacer space={20} />
      <Titles text={"Todays Plate"} />
      <Spacer space={20} />
      <Card
        title="Ground Beef Tacos"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        rating="4.5"
        price="12.50"
        image={taco}
      />

      <Spacer space={20} />
      <Titles text={"Favorites"} />
      <Spacer space={20} />
      <View style={{ flexDirection: "row" }}>
        <CardItem
          title="Crunchy Chicken"
          image={chicken}
          price="12.99"
          rating="4.5"
        />
        <CardItem
          title="Crunchy Chicken"
          image={chicken}
          price="12.99"
          rating="4.5"
        />
      </View>
    </Page>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
