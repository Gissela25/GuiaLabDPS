import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, FlatList, Image } from 'react-native';
const DATA = [
    {
        id: '1',
        title: 'Afghan Hound',
        country: 'Afghanistan',
        src: require('../Imgs/1.jpg'),
    },
    {
        id: '2',
        title: 'Alpine Dachsbracke',
        country: 'Austria',
        src: require('../Imgs/2.jpg'),
    },
    {
        id: '3',
        title: 'American Bulldog',
        country: 'United States',
        src: require('../Imgs/3.jpg'),
    },
    {
        id: '4',
        title: 'Bearded Collie',
        country: 'Scotland',
        src: require('../Imgs/4.jpg'),
    },
    {
        id: '5',
        title: 'Bosyon Terrier',
        country: 'United States',
        src: require('../Imgs/5.jpg'),
    },
    {
        id: '6',
        title: 'Canadian Eskimo',
        country: 'Canada',
        src: require('../Imgs/6.jpg'),
    },
    {
        id: '7',
        title: 'Eurohound',
        country: 'Scandinavia',
        src: require('../Imgs/7.jpg'),
    },
    {
        id: '8',
        title: 'Irish Terrier',
        country: 'Ireland',
        src: require('../Imgs/8.jpg'),
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