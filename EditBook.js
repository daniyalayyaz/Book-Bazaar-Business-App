import {
    Text,
    View,
    Dimensions,
    SafeAreaView,
    ScrollView,
    TextInput,
    Platform,
    ImageBackground,
    Alert
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import React, { useState, useCallback } from 'react';
import { Button } from "react-native-paper";
import DocumentPicker from 'react-native-document-picker';
import productService from "./Services/services/ProductsServices";
import { useNavigation } from "@react-navigation/native";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default function EditBook({route}) {
    const [fileResponse, setFileResponse] = useState([]);
    const [date, setDate] = useState(new Date(1598051730000));
const [edit,setEdit]=React.useState(route.params.val);
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
    const editBook=()=>{
        productService.updateSellerProduct(route.params.val._id,edit).then((val) => {
        Alert.alert("Book is update");
        route.params.setUpdate(true);
        navigation.navigate("Stores");
    
    
        }).catch((e)=>{
            console.log(e);
            Alert.alert("Book is not updated");
     
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
                        EDIT BOOK DETAILS
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
                        onChangeText={(e)=>setEdit({...edit,bookName:e})}
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
                        value={edit.price.toString()}
                        onChangeText={(e)=>setEdit({...edit,price:parseInt(e)})}
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
                        isbn Number *
                    </Text>

                    <TextInput
                        placeholder="Enter isbn"
                        value={edit.isbn.toString()}
                        onChangeText={(e)=>setEdit({...edit,isbn:e})}
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
                         value={edit.quantity.toString()}
                         keyboardType='numeric'
                         onChangeText={(e)=>setEdit({...edit,quantity:parseInt(e)})}
                        placeholder="Enter Book Price"
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
                        placeholder="Enter Book Price"
                        value={edit.description}
                        multiline
                 
                        onChangeText={(e)=>setEdit({...edit,description:e})}
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
                        placeholder="Enter Book Price"
                        value={edit.edition.toString()}
                        onChangeText={(e)=>setEdit({...edit,edition:parseFloat(e)})}
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
                        Auther Name *
                    </Text>
                    <TextInput
                        placeholder="Enter Book Price"
                        value={edit.authorName}
                        onChangeText={(e)=>setEdit({...edit,authorName:e})}
                        style={{
                            height: 50, width: width * 0.9, backgroundColor: '#e6e6e6', padding: 10
                        }}
                    ></TextInput>

                    


                    <View style={{ margin: 10 }}>
                        <Button icon="pencil" mode="contained" style={{ backgroundColor: "#E1B107" }} onPress={editBook}>
                            EDIT BOOK
                        </Button>
                    </View>
                </ScrollView>
            </View>
            </ImageBackground>
        </SafeAreaView>
    );
}
