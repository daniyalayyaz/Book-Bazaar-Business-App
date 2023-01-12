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
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import axios from "axios";

export default function ClientSignup() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [number, setnumber] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  var width = Dimensions.get('window').width;
  var height = Dimensions.get('window').height;
  const navigation = useNavigation();
  const RedirectToLogin = () => {
    navigation.navigate("Login");
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
                Create an Business Account
              </Text>
              <View>
                <TextInput
                  placeholder="Business Name"
                  style={styles.Textfields}
                  value={name}
                  onChangeText={(e) => { setname(e) }}
                ></TextInput>
                <TextInput
                  placeholder="Business Email"
                  style={styles.Textfields}
                  value={email}
                  onChangeText={(e) => { setemail(e) }}
                ></TextInput>
                <TextInput
                  placeholder="Business Phone"
                  style={styles.Textfields}
                  value={number}
                  onChangeText={(e) => { setnumber(e) }}
                ></TextInput>
                <TextInput
                  placeholder="Business Address"
                  style={styles.Textfields}

                ></TextInput>
                <TextInput
                  placeholder="Password"
                  style={styles.Textfields}
                  value={password}
                  onChangeText={(e) => { setpassword(e) }}
                ></TextInput>
                <TextInput
                  placeholder="Confirm Password"
                  style={styles.Textfields}
                  value={cpassword}
                  onChangeText={(e) => { setcpassword(e) }}
                ></TextInput>
                <Button
                  style={{ marginBottom: 20, backgroundColor: "#E1B107" }}
                  mode="contained"
                  onPress={() => Register()}
                >
                  Signup
                </Button>
                <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                  Already have an account?
                </Text>
                <Button color="grey" onPress={() => RedirectToLogin()}>
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
  Textfields: {
    borderRadius: 20,
    borderColor: "grey",
    padding: 10,
    marginBottom: 20,
  },
});