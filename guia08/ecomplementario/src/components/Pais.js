import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
const Pais = ({ resultado, busqueda }) => {

  const [info, setinfo] = useState([]);
  const [nombre, setnombre] = useState();
  const [capital, setcapital] = useState();
  const [region, setregion] = useState();
  const [lengua, setlengua] = useState([]);
  const [kilometros, setkilometros] = useState();
  const [metros, setMetros] = useState();
  const [Unidades, setUnidades] = useState();
  const { pais } = busqueda

  // const bandera = () =>{
  //   if(pais == 'ar'){
      
  //   }
  // }
  useEffect(() => {
    setinfo(resultado);
    lengua.length = 0;
    Object.values(info).map(e => {
      setnombre(e.nome.abreviado);
      setcapital(e.governo.capital.nome);
      setregion(e.localizacao.regiao.nome);
      const km = (e.area.total);
      const m = km * 1000000;
      setkilometros(km);
      setMetros(m);
      setUnidades(e.area.unidade.símbolo);
      Object.values(e.linguas).map(l => {
        lengua.push(l.nome)
      })

    }
    );

  });

  return (
    <Card>
      <Card.Title>{nombre}</Card.Title>
      <Card.Divider />
      <View style={{ justifyContent: 'center' }}>
        <Text>Capital:{capital}</Text>
        <Text>Region:{region}</Text>
        <Text>Lengua:{lengua.toString()}</Text>
        <Text>Extension Territorial:{kilometros} {Unidades} </Text>
        <Text>Extension Territorial:{metros} m2 </Text>
        <View style={styles.box}>
          <Image
            style={styles.Img}
           //source={require('../Img/sv.png')}
           //source={{uri:`https://github.com/Gissela25/GuiaLabDPS/blob/master/guia08/ecomplementario/src/Img/${pais}.png`}},
           source={{uri:`https://dpsgissepa.000webhostapp.com/Banderas/${pais}.png`}}
          />
        </View>
      </View>
    </Card>

  );
};

export default Pais;
const styles = StyleSheet.create({
  Img: {
    marginVertical: 3,
    width: 200,
    height: 110
  },
  box: {
    marginTop: 4,
    alignContent: 'center',
    alignItems: 'center'
  },
})