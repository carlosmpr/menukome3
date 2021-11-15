import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Page from "../components/Page";
import aprt from "../../assets/pasta.jpg";
import cola from "../../assets/cola.jpg";
import { FontAwesome, Entypo, AntDesign,Ionicons } from "@expo/vector-icons";
import Titles from "../components/Titles";
import Spacer from "../components/Spacer";
import HorizontalScrollView from "../components/HorizontalScrollView";
import Badge from "../components/Badge";
import MiniCard from "../components/MiniCard";
import chicken from "../../assets/chicken.png";
import CardItem from "../components/CardItem";
const DetailScreen = () => {
  return (
    <View>
      <View style={{ width: "100%", height: 300 }}>
        <Image source={aprt} style={{ width: "100%", height: "100%" }} />
      </View>
      <Page>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <Text style={{ fontWeight: "700", fontSize: 30 }}>
          Pasta A la Bolognesa
        </Text>
        <Text style={{fontSize:20, fontWeight:'bold', color:'#FF4200'}}>
          $20
        </Text>
        </View>
        <View style={styles.formatter}>
        <View style={styles.rating}>
        <FontAwesome name="star" size={12} color="#FFC529" />
        <Text>4.5</Text>
      </View>
        </View>
    <Spacer space={10}/>
        <Titles text="Ingredients"/>
        <Spacer space={10}/>
        <HorizontalScrollView >
          <View style={{marginRight:10}}>
          <Badge text="Beef" active={true}/>
          </View>
          <View style={{marginRight:10}}>
          <Badge text="Pasta" active={true}/>
          </View>
          <View style={{marginRight:10}}>
          <Badge text="Cheese" active={true}/>
          </View>
          <View style={{marginRight:10}}>
          <Badge text="Mozzarella" active={true}/>
          </View>
          <View style={{marginRight:10}}>
          <Badge text="Tomatoes" active={true}/>
          </View>
          </HorizontalScrollView>
        <View style={{marginVertical:10}}></View>
          <Titles  text="Description"/>
          <View style={{marginVertical:10}}></View>
          <Text style={{textAlign:'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          <View style={{marginVertical:10}}></View>
          <Titles  text="Sides"/>
          <View style={{marginVertical:10}}></View>
        
          <View style={{width:"100%", flexDirection:'row', }}>
<View style={{marginRight:10}}>
<Badge text="Favorites"/>
</View>
<Badge text="Recommended"/>   
</View>


           

         
<Spacer space={20}></Spacer>
<View style={{width:"100%", flexDirection:'row', flexWrap:'wrap'}}>
<MiniCard image={aprt} title="Fries" price="2.5"/>
<MiniCard image={aprt} title="Fries" price="2.5"/>
<MiniCard image={aprt} title="Fries" price="2.5"/>
<MiniCard image={aprt} title="Fries" price="2.5"/>
<MiniCard image={aprt} title="Fries" price="2.5"/>
<MiniCard image={aprt} title="Fries" price="2.5"/>
  </View>
  <View style={{marginVertical:10}}></View>
  <Titles  text="Drinks"/>
  <View style={{marginVertical:10}}></View>
  <View style={{width:"100%", flexDirection:'row', flexWrap:'wrap'}}>
<MiniCard image={cola} title="Fries" price="2.5"/>
<MiniCard image={cola} title="Fries" price="2.5"/>

  </View>

          <View style={{marginVertical:10}}></View>
          <Titles  text="Similar Plates"/>
          <View style={{marginVertical:10}}></View>
         
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

        </View>
          <Button title="Contact" />
          <View style={{height:400}}></View>
      </Page>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  formatter: { display: "flex", flexDirection: "row", alignItems: "center" },

  rating: {
    flexDirection: "row",
    alignItems: "center",

  },
});
