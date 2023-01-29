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
import { useIsFocused, useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';

import React, { useState } from 'react';
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import productService from "./Services/services/ProductsServices";

export default function ClientSignup() {
  const [storeName, setStoreName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [storeType, setStoreType] = useState("book");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [isCustomer, setIsCustomer] = useState("Yes");
  var width = Dimensions.get('window').width;
  var height = Dimensions.get('window').height;
  const navigation = useNavigation();
  const [check, setcheck] = React.useState({});
  const isFocused = useIsFocused();

  const RedirectToLogin = () => {
    navigation.navigate("Login");
  };
  React.useEffect(() => {
    store();
  }, [isFocused])
  const addStore = () => {
    productService.AddStore({
      storeName,
      ownerName,
      contact,
      email,
      storeType,
      address,
      location,
      image,
      isCustomer,
    }).then((val) => {
      Alert.alert("Store is Add");

      navigation.navigate("Stores");


    }).catch((e) => {
      console.log(e.errors[0].msg);
      Alert.alert(e.errors[0].msg);

    })
  }
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
  const store = async () => {

    productService.checkStore().then((val) => {

      setcheck(val?.store.isApproved);
      if (val?.store) {
        const { address, email, contact, ownerName, location, storeType, storeName } = val.store;

        setAddress(address);
        setEmail(email);
        setContact(contact);
        setOwnerName(ownerName);
        setLocation(location);
        setStoreType(storeType);
        setStoreName(storeName);

      }

    }).catch((e) => {
      console.log(e)
    });
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
            justifyContent: 'center',
            alignItems: 'center',
            height: "100%",
          }}
        >
          <Card style={{ padding: 40, borderRadius: 20, width: width / 1.12, height: height / 1.2 }}>
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
                  textAlign: 'left',
                  marginBottom: 20,
                  fontSize: 20,
                }}
              >
                {!check ? 'Create an Business' : 'You already have a business registered'}
              </Text>
              <View>
                <TextInput
                  placeholder="Business Name"
                  style={styles.Textfields}
                  value={storeName}
                  onChangeText={(e) => { setStoreName(e) }}
                ></TextInput>
                <TextInput
                  placeholder="Business Email"
                  style={styles.Textfields}
                  value={email}
                  onChangeText={(e) => { setEmail(e) }}
                ></TextInput>
                <TextInput
                  placeholder="Business Phone"
                  style={styles.Textfields}
                  value={contact}
                  onChangeText={(e) => { setContact(e) }}
                ></TextInput>
                <TextInput
                  placeholder="Business Address"
                  style={styles.Textfields}
                  value={address}
                  onChangeText={(e) => { setAddress(e) }}
                ></TextInput>
                <TextInput
                  placeholder="Owner Name"
                  style={styles.Textfields}
                  value={ownerName}
                  onChangeText={(e) => { setOwnerName(e) }}
                ></TextInput>
                <Picker
                  selectedValue={storeType}
                  style={{
                    height: 50, width: width * 0.9, backgroundColor: '#e6e6e6', padding: 10
                  }}


                  onValueChange={(itemValue, itemIndex) => setStoreType(itemValue)}
                >


                  <Picker.Item value="Book" label="Book" />
                  <Picker.Item value="Printing Press" label="Printing Press" />

                </Picker>
                <TextInput
                  placeholder="Location"
                  style={styles.Textfields}
                  value={location}
                  onChangeText={(e) => { setLocation(e) }}
                ></TextInput>
                {!check && <Button onPress={pickImage} >   Pick an image
                </Button>}
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                {!check && <Button
                  style={{ marginBottom: 20, backgroundColor: "#E1B107" }}
                  mode="contained"
                  onPress={() => addStore()}
                >
                  Add Store
                </Button>}

              </View>
            </ScrollView>
          </Card>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Textfields: {
    borderRadius: 20,
    borderColor: "grey",
    padding: 10,
    marginBottom: 20,
  },
});