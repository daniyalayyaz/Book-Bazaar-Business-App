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
    Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useState, useEffect } from 'react';
import axios from "axios";
import UerServices from "./Services/services/UserServices";


export default function Clientlogin() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();
    const moves = () => {

      UerServices.login(email,password).then(async(val)=>{
      
 
        await AsyncStorage.setItem("user", val.token);
      navigation.navigate("Stores");
    }).catch((val)=>{
       Alert.alert(val.errors[0].msg);
      })
    };
    const move = () => {
      navigation.navigate("Signup");
    };

    const [email, setemail] = useState('PrinceBookDepot@gmail.com');
    const [password, setpassword] = useState('abc123');

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
                                {/* <Image
                                    style={{ height: 100, width: 100, marginBottom: 20 }}
                                    source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/book-shopping-store-5669296-4728239.png' }}
                                /> */}
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
                                    onPress={() => moves()}
                                >
                                    Login
                                </Button>
                            </View>
                       
                       
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