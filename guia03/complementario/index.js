
import { AppRegistry } from 'react-native';
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { Card } from 'react-native-paper';

const DATA = [
    {
        id: '1',
        title: 'Pupusas',
        src: require('./src/imgs/pupusas.jpg'),
        descripcion: 'La pupusa es una tortilla gruesa de maíz o arroz hecha a mano que se rellena con uno o más ingredientes. Los ingredientes más comunes son el queso, el chicharrón, el ayote o los frijoles refritos.'
    },
    {
        id: '2',
        title: 'Riguas',
        src: require('./src/imgs/riguas.jpg'),
        descripcion: 'Las riguas son tortas delgadas de maíz fresco y tierno que se cocinan en hojas de plátano. Originarias de El Salvador, son una preparación básica de la cocina salvadoreña. Estas tortas generalmente se comen solas, como acompañamiento de un plato dulce o como postre con crema o cuajada.'
    },
    {
        id: '3',
        title: 'Tamales',
        src: require('./src/imgs/tamales.jpg'),
        descripcion: 'Están hechos con harina de maíz, llevan pollo o gallina, manteca vegetal y verduras. A los de azúcar se les añaden pasas, canela; algunos les colocan chocolate y por supuesto azúcar. A los de sal no pueden faltarles las papas, las aceitunas y el ajo.',
    },
    {
        id: '4',
        title: 'Nuegados',
        src: require('./src/imgs/nuegados.jpg'),
        descripcion: 'Los Nuégados o buñuelos, es un platillo de sabor dulce que suele degustarse como entrada antes del almuerzo o incluso la cena. Se preparan a base de masa de yuca o de maíz, y generalmente pueden servirse acompañadas del típico chilate, una bebida de maíz tostado muy conocida en la gastronomía salvadoreña.',
    },
    {
        id: '5',
        title: 'Elotes Locos',
        src: require('./src/imgs/elotes.jpg'),
        descripcion: ' Es una mazorca entera de maíz dulce, cocida o asada, cubierta con mayonesa, mostaza, salsa negra (o salsa inglesa), kétchup y queso, que es muy popular en El Salvador.',
    },
  
];
const Item = ({ title, img, descripcion }) => (
    <Card style={styles.item}>
        

            <Image style={styles.img} source={img} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.descripcion}>{descripcion}</Text>
    </Card>
);

const App = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} img={item.src} descripcion={item.descripcion} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
     item: {
         //backgroundColor: '#f9c2ff',
         //padding: 20,
         marginVertical: 15,
         marginHorizontal: 20,
         alignItems: 'center',
         backgroundColor: '#F9F5EB',
         borderRadius: 8,

     },
    title: {
        marginVertical: 7,
        fontSize: 20,
        fontFamily: "Cochin",
        textAlign: 'center'
    },
    img: {
        width: 350,
        height: 150,
        borderRadius: 8,
        margin: 8,
    },
    descripcion:{
        fontSize: 15,
        fontFamily: "Cochin",
        textAlign: 'justify',
        marginHorizontal: 10,
        marginVertical: 12
    }
});


AppRegistry.registerComponent("complementario", () => App);
