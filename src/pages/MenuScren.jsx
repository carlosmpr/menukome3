import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Page from '../components/Page'
import SearchBar from '../components/SearchBar'
import SelectFavorites from '../components/SelectFavorites'
import Spacer from '../components/Spacer'
import Titles from '../components/Titles'
import chicken from "../../assets/chicken.png";
import CardItem from "../components/CardItem";
const MenuScreen = () => {
    return (
      <Page >
          <Header />
          <Spacer space={20}/>
        
          <SearchBar />
          <SelectFavorites />
          <Spacer space={20}/>
          <Titles text="Main"/>
          <Spacer space={20}/>
          <View style={{flexDirection:'row', flexWrap:'wrap' }}>
    
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
    )
}

export default MenuScreen

const styles = StyleSheet.create({})
