import {
    Text,
    View,
    Dimensions,
    SafeAreaView,
    ScrollView,
    TextInput,
    Platform,
    ImageBackground
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import React, { useState, useCallback } from 'react';
import { Button } from "react-native-paper";
import DocumentPicker from 'react-native-document-picker';

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default function AddBook() {
    const [fileResponse, setFileResponse] = useState([]);
    const handleDocumentSelection = useCallback(async () => {
        try {
            const response = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
            });
            setFileResponse(response);
        } catch (err) {
            console.warn(err);
        }
    }, []);

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
                        alignItems: "center",
                        width: width,
                        paddingTop: 50,
                        height: height
                    }}
                >
                    <ScrollView>
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: "bold",
                                color: "#E1B107",
                                paddingBottom: 10,
                                marginTop: 10,
                                alignSelf: 'center'
                            }}
                        >
                            ADD NEW BOOK
                        </Text>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "black",
                                paddingBottom: 10,
                                marginTop: 10,
                            }}
                        >
                            Book Name *
                        </Text>
                        <TextInput
                            placeholder="Enter Book Name"
                            style={{
                                height: 50, width: width * 0.9, backgroundColor: '#e6e6e6', padding: 10
                            }}
                        ></TextInput>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "black",
                                paddingBottom: 10,
                                marginTop: 10,
                            }}
                        >
                            Book Quantity Available *
                        </Text>
                        <TextInput
                            placeholder="Enter Book Quantity Available"
                            style={{
                                height: 50, width: width * 0.9, backgroundColor: '#e6e6e6', padding: 10
                            }}
                        ></TextInput>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "black",
                                paddingBottom: 10,
                                marginTop: 10,
                            }}
                        >
                            Book Price *
                        </Text>
                        <TextInput
                            placeholder="Enter Book Price"
                            style={{
                                height: 50, width: width * 0.9, backgroundColor: '#e6e6e6', padding: 10
                            }}
                        ></TextInput>
                        <Button
                            style={{ marginTop: 10 }}
                            onPress={handleDocumentSelection}
                        >
                            Upload Cover Image 📑
                        </Button>
                        <View style={{ margin: 10 }}>
                            <Button icon="plus" mode="contained" style={{ backgroundColor: "#E1B107" }}>
                                ADD BOOK
                            </Button>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}
