import React, { useState, useEffect } from 'react';
import {
  Text, StyleSheet, View, FlatList, TouchableHighlight, TouchableWithoutFeedback,
  Keyboard, Platform
} from 'react-native';
//import Cita from './componentes/Cita';
//import Formulario from './componentes/Formulario';
import Reserva from './src/components/Reserva';
import Formulario from './src/components/Formulario';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const App = () => {
  // definir el state de citas
  const [reservas, setReservas] = useState([]);
  const [mostrarform, guardarMostrarForm] = useState(false);
  useEffect(() => {
    const obtenerReservasStorage = async () => {
      try {
        const reservasStorage = await AsyncStorage.getItem('reservas');
        if (reservasStorage) {
          setReservas(JSON.parse(reservasStorage))
        }
      } catch (error) {
        console.log(error);
      }
    }
    obtenerReservasStorage();
  }, []);
  // Elimina los pacientes del state
  const eliminarReserva = id => {
    const reservasFiltradas = reservas.filter(reserva => reserva.id !== id);
    setReservas(reservasFiltradas);
    guardarReservasStorage(JSON.stringify(reservasFiltradas));
  }
  // Muestra u oculta el Formulario
  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarform);
  }
  // Ocultar el teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  }
  // Almacenar las citas en storage
  const guardarReservasStorage = async (reservasJSON) => {
    try {
      await AsyncStorage.setItem('reservas', reservasJSON);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Reservaciones</Text>
        <View>
          <TouchableHighlight onPress={() => mostrarFormulario()}
            style={styles.btnMostrarForm}>
            <Text style={styles.textoMostrarForm}> {mostrarform ? 'Cancelar Crear Reserva' : 'Crear Nueva Reserva'} </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.contenido}>
          {mostrarform ? (
            <>
              <Text style={styles.titulo}>Crear Nueva Reservacion</Text>
              <Formulario
                reservas={reservas}
                setReservas={setReservas}
                guardarMostrarForm={guardarMostrarForm}
                guardarReservasStorage={guardarReservasStorage}
              />
            </>
          ) : (
            <>
              <Text style={styles.titulo}> {reservas.length > 0 ? 'Administra tus Reservaciones' :
                'No hay Reservaciones, agrega una'} </Text>
              <FlatList
                style={styles.listado}
                data={reservas}
                renderItem={({ item }) => <Reserva item={item}
                  eliminarReserva={eliminarReserva} />}
                keyExtractor={reserva => reserva.id}
              />
            </>
          )}


        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#082032',
    flex: 1
  },
  titulo: {
    color: '#C4FF63',
    marginTop: Platform.OS === 'ios' ? 50 : 40,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor:'#C4FF63',
    marginVertical: 10,
    borderRadius: 10,
    margin: 10,
  },
  textoMostrarForm: {
    color: '#082032',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
export default App;
