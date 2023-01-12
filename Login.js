import { Button, Card } from "react-native-paper";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ImageBackground,
    Image,
    ScrollView,
    Dimensions,
    Platform,
    SafeAreaView,
    AsyncStorage
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from 'react';
import axios from "axios";


export default function Clientlogin() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const RedirectToRegister = () => {
        navigation.navigate("Register");
    };
    const RedirectToHome = () => {
        navigation.navigate("Stores");
    };
  
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <ImageBackground
                source={{
                    uri: "https://i.pinimg.com/originals/9a/0e/a9/9a0ea95dac11dc515c448dc1c88e608a.jpg"
                }}
                style={{ height: height, width: width }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: height,
                    }}
                >
                    <Card style={{ padding: 40, borderRadius: 20, width: width / 1.12, height: height / 1.42 }}>
                        <ScrollView>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image
                                    style={{ height: 100, width: 100, marginBottom: 20 }}
                                    source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/book-shopping-store-5669296-4728239.png' }}
                                />
                            </View>
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    marginBottom: 20,
                                    fontSize: 20,
                                }}
                            >
                                BOOK BAZAAR BUSINESS
                            </Text>
                            <View>
                                <TextInput
                                    placeholder="Email"
                                    style={styles.Textfields}
                                    value={email}
                                    onChangeText={(e) => { setemail(e) }}
                                ></TextInput>
                                <TextInput
                                    placeholder="Password"
                                    style={styles.Textfields}
                                    value={password}
                                    onChangeText={(e) => { setpassword(e) }}
                                ></TextInput>

                                <Button
                                    style={{ marginBottom: 20, backgroundColor: "#E1B107" }}
                                    mode="contained"
                                    onPress={() => RedirectToHome()}
                                >
                                    Login
                                </Button>
                            </View>
                            <Text style={{ textAlign: "center", marginBottom: 10 }}>
                                Don't have an account?
                            </Text>
                            <Button color="grey" onPress={() => RedirectToRegister()}>
                                Sign Up
                            </Button>
                        </ScrollView>
                    </Card>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    socialbuttonfb: {
        borderRadius: 20,
        backgroundColor: "#4267B2",
        marginBottom: 20,
    },
    socialbuttontw: {
        borderRadius: 20,
        backgroundColor: "#1DA1F2",
        marginBottom: 20,
    },
    Textfields: {
        borderRadius: 20,
        borderColor: "grey",
        padding: 10,
        marginBottom: 20,
    },
});