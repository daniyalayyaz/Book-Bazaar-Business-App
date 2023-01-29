import { Button, Card, Avatar, List } from 'react-native-paper';
import { Text, View, Dimensions, SafeAreaView, ScrollView, Platform, Image, ImageBackground, Alert } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import productService from './Services/services/ProductsServices';

export default function Completeorders() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();
    const [order, setOrders] = React.useState([]);
    const isFocused = useIsFocused();
    const [update,setUpdate]=React.useState(false);
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
    const booking = async () => {
        // const user = await AsyncStorage.getItem("user");
        // const userInfo = JSON.parse(user);
        productService.getOrdersSel("complete").then((val) => {
            console.log(val, 2);

            setOrders(val.orders);

        }).catch((e) => {
            console.log(e)
        });
    };
    React.useEffect(() => {
        booking();
        setUpdate(false);

    }, [update,isFocused])
    const approveOrder=(id)=>{
        productService.approveOrder(id).then((val) => {
            setUpdate(true);

            Alert.alert("order is Approved");
    
    
        }).catch((e)=>{
            console.log(e);
            Alert.alert("Book is not updated");
     
        })
    }
    const handleCancel=(data)=>{
        productService.cancelOrder(data).then((val) => {
            setUpdate(true);
        Alert.alert("order is cancelled");
       
    
        }).catch((e)=>{
            console.log(e);
            Alert.alert("order is not updated");
     
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
                <View style={{ display: 'flex', flexDirection: 'column', height: height, justifyContent: 'space-between', overflow: 'hidden' }}>
                    <Text style={{ marginTop: 50, marginLeft: 20, marginRight: 20, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Complete Orders</Text>
                    <ScrollView style={{marginBottom:40}}>
                        {order.map((idx, index) => (
                            <Card style={{
                                margin: 20, padding: 10, shadowColor: 'black', borderRadius: 16,
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.5,
                                shadowRadius: 2,
                                elevation: 7,
                            }} key={index}>
                                <List.Item
                                    title={<Text style={{ fontSize: 16, fontWeight: 'bold' }}>{idx.orderItems[0].bookName}</Text>}
                                    left={props => <Image source={{ uri: `http://192.168.100.18:5000${idx.orderItems[0].image}` }} {...props} style={{ height: 48, width: 48, borderRadius: 10 }}></Image>}
                                    description={props => <Text {...props} style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>{idx.orderItems[0].price}</Text>}
                                />
                          
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>



                                 

                                </View>
                            </Card>
                        ))}
                    </ScrollView>
                </View>
            </ImageBackground>
        </SafeAreaView>

    );
}