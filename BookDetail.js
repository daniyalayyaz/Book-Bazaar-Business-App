import { Button, Card, IconButton, Searchbar } from 'react-native-paper';
import { Text, View, Dimensions, SafeAreaView, ScrollView, Platform, Image, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react'
import productService from './Services/services/ProductsServices';

export default function DetailPage({route}) {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const [counter, setCounter] = React.useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter < 1) {
        decrementCounter = () => setCounter(1);
    }
    const navigation = useNavigation();
    const RedirectToCart = () => {
        navigation.navigate("EditBook",{val:route.params.val,setUpdate:route.params.setUpdate});
    };
const deletBook=()=>{
    productService.deleteSellerProduct(route.params.val._id).then((val) => {
    Alert.alert("Book is deleted");
    route.params.setUpdate(true);
    navigation.navigate("Stores");


    }).catch((e)=>{
        Alert.alert("Book is not deleted");
 
    })
}
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
                            <ImageBackground
                source={{
                    uri: "https://i.pinimg.com/originals/9a/0e/a9/9a0ea95dac11dc515c448dc1c88e608a.jpg"
                }}
                style={{ height: height, width: width }}
            >
            <View style={{ display: 'flex', flexDirection: 'column', height: height, justifyContent: 'space-between', overflow: 'hidden' }}>
                <ScrollView>

                    <View>
                        <Image
                            style={{ height: height / 2, width: width, marginBottom: 20 }}
                            source={{              uri: `http://192.168.100.72:5000${route.params.val.image}`,
                        }}
                        />
                        <Text style={{ fontSize: 24, fontWeight: 'bold', paddingLeft: 10 }}> {route.params.val.bookName}</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10, color: 'grey' }}> {route.params.val.price} Rs</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10 }}>Total Stocks Left  {route.params.val.quantity}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10 }}> Isbn: {route.params.val.isbn||'N/A'}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10 }}> condition: {route.params.val.edition}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10 }}> Edition: {route.params.val.condition}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10 }}> Description: {route.params.val.description}</Text>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        </View>

                        
                    </View>
                    <View style={{ margin: 10, width: width/2.5 }}>
                        <Button icon="pencil" mode="contained" style={{ backgroundColor: "#E1B107" }} onPress={RedirectToCart}>
                            Edit Book
                        </Button>
                    </View>
                    <View style={{ margin: 10, width: width/2.5 }}>
                        <Button icon="delete" mode="contained" style={{ backgroundColor: "#E1B107" }} onPress={deletBook}>
                            Delete Book
                        </Button>
                    </View>

                </ScrollView>

            </View>
            </ImageBackground>
        </SafeAreaView>

    );
}