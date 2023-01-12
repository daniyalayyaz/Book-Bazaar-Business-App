import { Button, Card, Avatar, List } from 'react-native-paper';
import { Text, View, Dimensions, SafeAreaView, ScrollView, Platform, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

export default function Pendingorders() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();
    const RedirectToCart = () => {
        navigation.navigate("Cart");
    };
    const orderdetails = [
        {
            img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564",
            title: "Memory",
            price: "1295 Rs",
            dateTime: "06-Sep-2022 1:30 pm"
        },
        {
            img: "https://static-cse.canva.com/blob/921487/ColorfulIllustrationYoungAdultBookCover.jpg",
            title: "Hypocrite World",
            price: "340 Rs",
            dateTime: "05-Sep-2022 6:30 pm"
        },
        {
            img: "https://pub-static.fotor.com/assets/projects/pages/dddda0b59fb9433eb53e7174981c8b67/blue-minimal-novel-cover-6e355184dc3545c6bec6a9f618f83e0d.jpg",
            title: "Summer Holiday",
            price: "1399 Rs",
            dateTime: "03-Sep-2022 10:30 pm"
        },
    ]
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
                        <ImageBackground
                source={{
                    uri: "https://i.pinimg.com/originals/9a/0e/a9/9a0ea95dac11dc515c448dc1c88e608a.jpg"
                }}
                style={{ height: height, width: width }}
            >
            <View style={{ display: 'flex', flexDirection: 'column', height: height, justifyContent: 'space-between', overflow: 'hidden' }}>
            <Text style={{ marginTop: 50, marginLeft: 20, marginRight: 20,  fontSize: 20, fontWeight: 'bold', color: 'black' }}>Pending Orders</Text>
                <ScrollView>
                    {orderdetails.map((idx, index) => (
                        <Card style={{
                            margin: 20, padding: 10, shadowColor: 'black', borderRadius: 16,
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.5,
                            shadowRadius: 2,
                            elevation: 7,
                        }} key={index}>
                            <List.Item
                                title={<Text style={{ fontSize: 16, fontWeight: 'bold' }}>{idx.title}</Text>}
                                left={props => <Image source={{ uri: idx.img }} {...props} style={{ height: 48, width: 48, borderRadius: 10 }}></Image>}
                                description={props => <Text {...props} style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>{idx.price}</Text>}
                            />
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text>{idx.dateTime}</Text>
                                <Button
                                    style={{ backgroundColor: "#E1B107", width: width / 2.5, fontSize: 8 }}
                                    mode="contained"
                                    onPress={() => RedirectToHome()}
                                >
                                    Complete</Button>
                            </View>
                        </Card>
                    ))}
                </ScrollView>
            </View>
            </ImageBackground>
        </SafeAreaView>

    );
}