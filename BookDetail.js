import { Button, Card, IconButton, Searchbar } from 'react-native-paper';
import { Text, View, Dimensions, SafeAreaView, ScrollView, Platform, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react'

export default function DetailPage() {
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
        navigation.navigate("EditBook");
    };

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
                            source={{ uri: 'https://cdn.britannica.com/82/175382-050-8B76E4A8/Greta-Garbo-Anna-Karenina-Clarence-Brown.jpg?w=600&q=60' }}
                        />
                        <Text style={{ fontSize: 24, fontWeight: 'bold', paddingLeft: 10 }}>Anna Karenina</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10, color: 'grey' }}>1000 Rs</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10 }}>Set Total Stocks Left</Text>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <IconButton
                                icon="plus-circle"
                                size={24}
                                onPress={incrementCounter}
                            />
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{counter}</Text>
                            <IconButton
                                icon="minus-circle"
                                size={24}
                                onPress={decrementCounter}
                            />
                        </View>

                        
                    </View>
                    <View style={{ margin: 10, width: width/2.5 }}>
                        <Button icon="pencil" mode="contained" style={{ backgroundColor: "#E1B107" }} onPress={RedirectToCart}>
                            Edit Book
                        </Button>
                    </View>
                    <View style={{ margin: 10, width: width/2.5 }}>
                        <Button icon="delete" mode="contained" style={{ backgroundColor: "#E1B107" }} onPress={RedirectToCart}>
                            Delete Book
                        </Button>
                    </View>
                </ScrollView>

            </View>
            </ImageBackground>
        </SafeAreaView>

    );
}