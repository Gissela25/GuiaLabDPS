import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, FlatList, Image } from 'react-native';
const DATA = [
    {
        id: '1',
        title: 'orange Tabby',
        country: 'Europa',
        src: require('../Imgs/11.png'),
    },
    {
        id: '2',
        title: 'Bombay',
        country: 'United State',
        src: require('../Imgs/12.jpg'),
    },
    {
        id: '3',
        title: 'El cartujo',
        country: 'Siria',
        src: require('../Imgs/13.jpg'),
    },
    {
        id: '4',
        title: 'Gato común europeo',
        country: 'Europa',
        src: require('../Imgs/14.jpg'),
    },
    {
        id: '5',
        title: 'Mau egipcio',
        country: 'Egipto',
        src: require('../Imgs/15.jpeg'),
    },
    {
        id: '6',
        title: 'Neva masquerade',
        country: 'Rusia',
        src: require('../Imgs/16.jpg'),
    },
    {
        id: '7',
        title: 'Savannah',
        country: 'Africa',
        src: require('../Imgs/17.jpg'),
    },
    {
        id: '8',
        title: 'Snowshoe',
        country: 'United States',
        src: require('../Imgs/18.jpeg'),
    },
];
const Item = ({ title, img, country }) => (
    <View style={styles.caja} >
        <View style={styles.caja2}>
            <Image style={styles.img} source={img} />
        </View>
        <View style={styles.caja3}>
            <Text style={styles.titulo} >{title}</Text>
            <Text style={styles.pais}>{country}</Text>
        </View>
    </View>

);
export default function Contact() {
    const renderItem = ({ item }) => (
        <Item title={item.title} img={item.src} country={item.country} />
    );
    return (
        <View style={styles.contenedor}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </View>
    );
}
const styles = StyleSheet.create({

    contenedor:{
        flex:1,
        flexDirection:'column',
        //backgroundColor:'#4B7BE5'
    },
    caja:{
        flexDirection:'row',
        //backgroundColor:'#A85CF9'
    },
    img:{
        width:70,
        height:80
    },
    caja2:{
        marginHorizontal: '10%',
        marginTop:'5%',
        flex:1
    },
    caja3:{
        flex:6,
        marginHorizontal: '5%',
        marginTop:'5%',
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold'
    },
    pais:{
        fontSize:15,
        marginTop: '5%'
    }

});