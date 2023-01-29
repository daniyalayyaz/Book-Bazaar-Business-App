import { Button, Card, IconButton, Searchbar } from 'react-native-paper';
import { Text, View, Dimensions, SafeAreaView, FlatList, TouchableOpacity, Image, Platform, ImageBackground, Alert } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import axios from "axios";
import productService from './Services/services/ProductsServices';

export default function Home({route}) {
    const [category, setcategory] = React.useState([]);
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [update,setUpdate]=React.useState(false);
    const isFocused = useIsFocused();
  
    const DATA = [


        {
            img: 'https://cdn.britannica.com/82/175382-050-8B76E4A8/Greta-Garbo-Anna-Karenina-Clarence-Brown.jpg?w=600&q=60',
            title: 'Anna Karenina',
            price: '100 Rs'
        },
        {
            img: 'https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg?w=600&q=60',
            title: 'Mockingbird',
            price: '120 Rs'

        },
        {
            img: 'https://cdn.britannica.com/12/154812-050-D4E47005/Don-Quixote-Sancho-Panza-illustration-Miguel-de.jpg?w=600&q=60',
            title: 'Don Quixote',
            price: '150 Rs'

        },

    ];
    React.useEffect(() => {
        booking();
        store();
      }, [update,isFocused]);
      const [stores,setStores]=React.useState([]);
      const [check,setCheck]=React.useState("");
      const [ori,setOriginal]=React.useState([]);
      const booking = async () => {
        // const user = await AsyncStorage.getItem("user");
        // const userInfo = JSON.parse(user);
        productService.getSellerProducts().then((val) => {
         console.log(val);
         
          setStores(val.products);
          setOriginal(val.products);
        }).catch((e)=>{
          console.log(e)
        });
      };
      
      const store = async () => {
   
        productService.checkStore().then((val) => {
            console.log(val?.store?.isApproved)
 setCheck(val?.store?.isApproved);

        }).catch((e)=>{
          console.log(e)
        });
      };
      

    const navigation = useNavigation();

    const RedirectToDetailPage = (val) => {
        navigation.navigate('DetailPage',{val:val,setUpdate})
    }
    const RedirectToCart = () => {
        navigation.navigate('Login')
    }
    const RedirectToProfile = () => {
        if(!check){
     Alert.alert("You need to add a store first")
        }
        else{
            navigation.navigate('AddBook')
        }
    }

    const search=(e)=>{
        setStores(ori.filter((val)=>val.bookName.toLowerCase().includes(e.toLowerCase())));
      }
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <ImageBackground
                source={{
                    uri: "https://i.pinimg.com/originals/9a/0e/a9/9a0ea95dac11dc515c448dc1c88e608a.jpg"
                }}
                style={{ height: height, width: width }}
            >
                <View style={{ display: 'flex', flexDirection: 'column', height: height, overflow: 'hidden' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20, marginBottom: 10, marginTop: 50 }}>
                        <Image
                            style={{ height: 50, width: 50 }}
                            source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/book-shopping-store-5669296-4728239.png' }}
                        />
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ backgroundColor: '#E1B107', borderRadius: 10, marginRight: 10 }}>
                                <IconButton
                                    icon="plus"
                                    size={24}
                                    onPress={RedirectToProfile}
                                />
                            </View>
                            <View style={{ backgroundColor: '#E1B107', borderRadius: 10, marginRight: 20 }}>
                                <IconButton
                                    icon="logout"
                                    size={24}
                                    onPress={RedirectToCart}
                                />
                            </View>
                        </View>

                    </View>
                    <View style={{ padding: 20 }}>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={search}
                          
                        />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'black', marginLeft: 20 }}>Your Books</Text>
                    </View>
                    <View>
                   
                    </View>
                    <View style={{ flex: 1, marginBottom: 60 }}>
                        <FlatList
                            // data={currenttab}
                            data={stores}
                            numColumns={2}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity onPress={()=>RedirectToDetailPage(item)}>
                                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 10, backgroundColor: '#E1B107', padding: 20, borderRadius: 12 }}>
                                        <Image  source={{ uri: `http://192.168.100.18:5000${item.image}` }} style={{ height: height / 5, width: width / 3, borderRadius: 10 }} />
                                        <Text style={{ fontWeight: 'bold', width:width/3,textAlign:"center", fontSize: 8, color: 'black' }}>      {item.bookName}</Text>
                                        <Text>  {item.price}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>

    );
}