import {
    Text,
    View,
    Dimensions,
    SafeAreaView,
    ScrollView,
    TextInput,
    Platform,
    ImageBackground,
    Alert,
    Image
} from "react-native";
import React, { useState, useCallback } from 'react';
import { Button } from "react-native-paper";
import DocumentPicker from 'react-native-document-picker';
import productService from "./Services/services/ProductsServices";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from 'expo-image-picker';
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default function AddBook() {
    const [fileResponse, setFileResponse] = useState([]);
    const [date, setDate] = useState(new Date(1598051730000));

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            console.log(result);
            setImage(result.uri);
            setEdit({ ...edit, image: result.uri })
        }
    };
    const [edit, setEdit] = React.useState({});
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };
    const navigation = useNavigation();
    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
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
    const editBook = () => {
        productService.AddProduct(edit).then((val) => {
            Alert.alert("Book is Add");
            console.log(val)
            navigation.navigate("Stores");


        }).catch((e) => {
            console.log(e.errors[0].msg);
            Alert.alert(e.errors[0].msg);

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
                            ADD BOOK DETAILS
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
                            value={edit.bookName}
                            onChangeText={(e) => setEdit({ ...edit, bookName: e })}
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
                            value={edit?.price?.toString()}
                            onChangeText={(e) => setEdit({ ...edit, price: parseInt(e) })}
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
                            isbn Number *
                        </Text>
                        <TextInput
                            placeholder="Enter Book Price"
                            value={edit?.isbn?.toString()}
                            onChangeText={(e) => setEdit({ ...edit, isbn: e })}
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
                            Quantity
                        </Text>
                        <TextInput
                            value={edit?.quantity?.toString()}
                            keyboardType='numeric'
                            onChangeText={(e) => setEdit({ ...edit, quantity: parseInt(e) })}
                            placeholder="Enter quantity"
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
                            Description
                        </Text>
                        <TextInput
                            placeholder="Enter Description"
                            value={edit.description}
                            multiline

                            onChangeText={(e) => setEdit({ ...edit, description: e })}
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
                            Edition *
                        </Text>
                        <TextInput
                            placeholder="Enter Edition"
                            value={edit?.edition?.toString()}
                            onChangeText={(e) => setEdit({ ...edit, edition: parseFloat(e) })}
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
                            Condition *
                        </Text>
                        <Picker
                            selectedValue={edit.category}
                            style={{
                                height: 50, width: width * 0.9, backgroundColor: '#e6e6e6', padding: 10
                            }}
                            onValueChange={(itemValue, itemIndex) => setEdit({ ...edit, category: itemValue })}
                        >
                            <Picker.Item label="New" value="New" />
                            <Picker.Item label="Old" value="Old" />
                        </Picker>

                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "black",
                                paddingBottom: 10,
                                marginTop: 10,
                            }}
                        >
                            Category *
                        </Text>
                        <Picker
                            selectedValue={edit.condition}
                            style={{
                                height: 50, width: width * 0.9, backgroundColor: '#e6e6e6', padding: 10
                            }}


                            onValueChange={(itemValue, itemIndex) => setEdit({ ...edit, condition: itemValue })}
                        >

                            <Picker.Item value="School Books" label="School Books" />
                            <Picker.Item value="Medical Books" label="Medical Books" />


                            <Picker.Item value="Accounting and Financial Books" label="Accounting and Financial Books" />


                            <Picker.Item value="Dictionaries" lable="Dictionaries" />
                            <Picker.Item value="Novels" label="Novels" />
                            <Picker.Item value="General Knowledge"
                                label="General Knowledge" />

                            <Picker.Item value="Biographies" label="Biographies" />
                            <Picker.Item value="Argumentatives" lable="Argumentatives" />
                            <Picker.Item value="Others" label="Others" />

                        </Picker>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "black",
                                paddingBottom: 10,
                                marginTop: 10,
                            }}
                        >
                            Auther Name *
                        </Text>
                        <TextInput
                            placeholder="Enter auther name"
                            value={edit.authorName}
                            onChangeText={(e) => setEdit({ ...edit, authorName: e })}
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
                            Tags *(Comma Separated)
                        </Text>
                        <TextInput
                            placeholder="Enter tags"
                            value={edit.tags}
                            onChangeText={(e) => setEdit({ ...edit, tags: e.split(",") })}
                            style={{
                                height: 50, width: width * 0.9, backgroundColor: '#e6e6e6', padding: 10
                            }}
                        ></TextInput>

                        <Button onPress={pickImage} >   Pick an image
                        </Button>
                        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

                        <View style={{ margin: 10 }}>
                            <Button icon="pencil" mode="contained" style={{ backgroundColor: "#E1B107" }} onPress={editBook}>
                                ADD BOOK
                            </Button>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}
