import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from 'react-native';

const App = () => {
  const [modalVisiblePlaya, setModalVisiblePlaya] = useState(false);
  const [modalVisiblePlatillos, setModalVisiblePlatillos] = useState(false);
  const [modalVisibleRutas, setModalVisibleRutas] = useState(false);

  return (
    <>
      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblePlaya}
          onRequestClose={() => { alert('Modal has been closed'); }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la playa</Text>
              <Text>El Salvador cuenta con hermosas playas a nivel Centromerica.</Text>
              <Button title="Cerrar" onPress={() => (setModalVisiblePlaya(!modalVisiblePlaya))}></Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblePlatillos}
          onRequestClose={() => { alert('Modal has been closed'); }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Plantillos Tipicos</Text>
              <Text>El Salvador cuenta con esquisitos platillos tipicos como pupusas,yuca frita,elotes locos,etc.</Text>
              <Button title="Cerrar" onPress={() => (setModalVisiblePlatillos(!modalVisiblePlatillos))}></Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleRutas}
          onRequestClose={() => { alert('Modal has been closed'); }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Rutas</Text>
              <Text>El Salvador cuenta con bellisimas rutas para recorrerer destacando la Rutas de las Flores.</Text>
              <Button title="Cerrar" onPress={() => (setModalVisibleRutas(!modalVisibleRutas))}></Button>
            </View>
          </View>
        </Modal>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.banner}
            source={require('./src/img/sa.jpg')}
          />
        </View>

        <View styles={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en El Salvador</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight onPress={() => { setModalVisiblePlaya(!modalVisiblePlaya) }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/playa.png')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/Juayua.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/sa.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/sa.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/sa.jpg')}
              />
            </View>
          </ScrollView>

          <Text style={styles.titulo}>Platillo Salvadoreños</Text>
          <View>
            <View>
              <TouchableHighlight onPress={() => { setModalVisiblePlatillos(!modalVisiblePlatillos) }}>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/elotes.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./src/img/pupusas.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./src/img/yuca.jpg')}
              />
            </View>
          </View>

          <Text style={styles.titulo}>Rutas Turisticas</Text>
          <View style={styles.listado}>

            <View style={styles.listaItem}>
              <TouchableHighlight onPress={() => { setModalVisibleRutas(!modalVisibleRutas) }}>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/ataco.jpg')}
                />
              </TouchableHighlight>
            </View>

            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/img/flores.jpg')}
              />
            </View>

            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/img/apaneca.png')}
              />
            </View>

            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/img/Juayua.jpg')}
              />
            </View>
          </View>

        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 150,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10
  },
  contenedor: {
    marginHorizontal: 10
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listaItem: {
    flexBasis: '49%'
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center'
  }
});

export default App;