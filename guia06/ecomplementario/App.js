import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from 'react-native';

const App = () => {
  const [modalVisibleSer, setModalVisibleSer] = useState(false);
  const [modalVisibleHotel, setModalVisibleHotel] = useState(false);
  const [modalVisiblehab1, setModalVisiblehab1] = useState(false);
  const [modalVisiblehab2, setModalVisiblehab2] = useState(false);
  const [modalVisiblehab3, setModalVisiblehab3] = useState(false);

  return (
    <>
      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblehab1}
          onRequestClose={() => { alert('Modal has been closed'); }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <ScrollView>
                <Text style={styles.subtitulo}>Standard Room, Balcony (Creek View)</Text>
                <Image
                  style={styles.detalles}
                  source={require('./src/img/hab11.webp')}
                />
                <Text>-29 metros cuadrados</Text>
                <Text>-1 cama individual O 2 camas individuales</Text>
                <Text>-3 huéspedes</Text>
                <Image
                  style={styles.detalles}
                  source={require('./src/img/hab12.webp')}
                />
                <Button title="Cerrar" onPress={() => (setModalVisiblehab1(!modalVisiblehab1))}></Button>
              </ScrollView>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblehab2}
          onRequestClose={() => { alert('Modal has been closed'); }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <ScrollView>
                <Text style={styles.subtitulo}>Grand Suite, Balcony (Creek View, Lounge Access)</Text>
                <Image
                  style={styles.detalles}
                  source={require('./src/img/hab21.webp')}
                />
                <Text>-104 metros cuadrados</Text>
                <Text>-1 cama matrimonial</Text>
                <Text>-4 huéspedes</Text>
                <Image
                  style={styles.detalles}
                  source={require('./src/img/hab22.webp')}
                />
                <Button title="Cerrar" onPress={() => (setModalVisiblehab2(!modalVisiblehab2))}></Button>
              </ScrollView>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblehab3}
          onRequestClose={() => { alert('Modal has been closed'); }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <ScrollView>
                <Text style={styles.subtitulo}>Suite presidencial (Lounge Access)</Text>
                <Image
                  style={styles.detalles}
                  source={require('./src/img/hab31.webp')}
                />
                <Text>-150 metros cuadrados</Text>
                <Text>-1 cama matrimonio grande</Text>
                <Text>-4 huéspedes</Text>
                <Image
                  style={styles.detalles}
                  source={require('./src/img/hab32.webp')}
                />
                <Button title="Cerrar" onPress={() => (setModalVisiblehab3(!modalVisiblehab3))}></Button>
              </ScrollView>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleHotel}
          onRequestClose={() => { alert('Modal has been closed'); }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Dubai</Text>
              <Text>Radisson Blu Hotel, Dubai Deira Creek se encuentra a orillas del agua, más concretamente, en Deira, un barrio de Dubái que destaca especialmente por la proximidad al aeropuerto y su gran variedad de tiendas. Centro comercial Dubai Festival City y Terminal de cruceros de Dubái son excelentes opciones para los que buscan unas vacaciones activas, pero si lo tuyo son las compras, no te pierdas Souk Gold y Centro comercial BurJuman. ¿Viajas con niños? Pues llévalos a Acuario y zoológico submarino de Dubái y, si te apetece disfrutar de un evento especial, consulta el calendario de Estadio de Tenis de Dubái. ¡Saca los palos y mejora tu swing! Podrás recibir clases en un campo de golf cercano, o bien ir en busca de aventuras practicando actividades como el paracaidismo.</Text>
              <Button title="Cerrar" onPress={() => (setModalVisibleHotel(!modalVisibleHotel))}></Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleSer}
          onRequestClose={() => { alert('Modal has been closed'); }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Servicios Disponibles</Text>
              <Text>Entre los principales servicios disponibles destacan:</Text>
              <Text>-Spa</Text>
              <Text>-Bar</Text>
              <Text>-Piscina</Text>
              <Text>-Gimnasio</Text>
              <Text>-Restaurante</Text>
              <Text>-Servicio de Habitacion</Text>
              <Button title="Cerrar" onPress={() => (setModalVisibleSer(!modalVisibleSer))}></Button>
            </View>
          </View>
        </Modal>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.banner}
            source={require('./src/img/hotel.webp')}
          />
        </View>

        <View styles={styles.contenedor}>
          <Text style={styles.titulo}>Radisson Blu Hotel, Dubai Deira Creek</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight onPress={() => { setModalVisibleHotel(!modalVisibleHotel) }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/mapa.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/beach.jpg')}
              />
            </View>
            {/* <View>
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
            </View> */}
          </ScrollView>

          <Text style={styles.titulo}>Habitaciones</Text>
          <View>
            <View>
              <Text>Standard Room, Balcony (Creek View)</Text>
              <TouchableHighlight onPress={() => { setModalVisiblehab1(!modalVisiblehab1) }}>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/hab1.webp')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <Text>Grand Suite, Balcony (Creek View, Lounge Access)</Text>
              <TouchableHighlight onPress={() => { setModalVisiblehab2(!modalVisiblehab2) }}>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/hab2.webp')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <Text>Suite presidencial (Lounge Access)</Text>
              <TouchableHighlight onPress={() => { setModalVisiblehab3(!modalVisiblehab3) }}>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/hab3.webp')}
                />
              </TouchableHighlight>
            </View>
          </View>

          <Text style={styles.titulo}>Lugares cercanos al hotel</Text>
          <View>
            <View>
              <Text>Dubai Creek - A 3 min a pie</Text>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/lug1.jpg')}
                />
            </View>
            <View>
              <Text>Centro Al Ghurair - A 8 min a pie</Text>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/lug3.jpg')}
                />
            </View>
            <View>
              <Text>Centro comercial Torres Gemelas de Deira - A 5 min a pie</Text>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/lug2.jpg')}
                />
            </View>
          </View>
          <Text style={styles.titulo}>Sevicios Ofrecidos</Text>
          <View style={styles.listado}>

            <View style={styles.listaItem}>
              <TouchableHighlight onPress={() => { setModalVisibleSer(!modalVisibleSer) }}>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/ser1.webp')}
                />
              </TouchableHighlight>
            </View>

            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/img/ser2.webp')}
              />
            </View>

            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/img/ser3.webp')}
              />
            </View>

            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/img/ser4.webp')}
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
  },
  detalles: {
    width: 230,
    height: 230,
    marginRight: 10
  },
});

export default App;