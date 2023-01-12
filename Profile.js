import {
    Text,
    View,
    Dimensions,
    SafeAreaView,
    ScrollView,
    TextInput,
    Image,
  } from "react-native";
  import { Col, Row, Grid } from "react-native-paper-grid";
  import * as React from "react";
  import { Button } from "react-native-paper";
  
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;
  
  export default function Profile() {
    return (
      <SafeAreaView>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: width,
            backgroundColor: "#fff",
            paddingTop: 50,
          }}
        >
          <ScrollView>
            <Image
              source={{
                uri: "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png",
              }}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                borderRadius: 50,
              }}
            />
            <Button
              style={{
                padding: 10,
                width: 0.9 * width,
              }}
            >
              Edit Profile Picture
            </Button>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#E1B107",
                padding: 10,
                width: 0.9 * width,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Name
            </Text>
            <TextInput
              placeholder="Your Name"
              style={{
                marginBottom: 40,
                width: 0.9 * width,
                borderRadius: 30,
                borderColor: "#E1B107",
                borderWidth: 2,
                padding: 10,
                paddingLeft: 30,
                backgroundColor: "white",
              }}
            ></TextInput>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#E1B107",
                padding: 10,
                width: 0.9 * width,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Email
            </Text>
            <TextInput
              placeholder="Your Email"
              style={{
                marginBottom: 40,
                width: 0.9 * width,
                borderRadius: 30,
                borderColor: "#E1B107",
                borderWidth: 2,
                padding: 10,
                paddingLeft: 30,
                backgroundColor: "white",
              }}
            ></TextInput>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#E1B107",
                padding: 10,
                width: 0.9 * width,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Contact Number
            </Text>
            <TextInput
              placeholder="Contact Number"
              style={{
                marginBottom: 40,
                width: 0.9 * width,
                borderRadius: 30,
                borderColor: "#E1B107",
                borderWidth: 2,
                padding: 10,
                paddingLeft: 30,
                backgroundColor: "white",
              }}
            ></TextInput>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#E1B107",
                padding: 10,
                width: 0.9 * width,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Address
            </Text>
            <TextInput
              placeholder="Your Address"
              style={{
                marginBottom: 40,
                width: 0.9 * width,
                borderRadius: 30,
                borderColor: "#E1B107",
                borderWidth: 2,
                padding: 10,
                paddingLeft: 30,
                backgroundColor: "white",
              }}
            ></TextInput>
  
            <Button
              style={{
                borderColor: "#E1B107",
                borderRadius: 25,
                borderWidth: 3,
                padding: 10,
                width: 0.3 * width,
                marginTop: 50,
                marginBottom: 100,
                alignSelf: "center",
              }}
            >
              Save
            </Button>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
  