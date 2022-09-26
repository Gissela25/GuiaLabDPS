import React, { useState } from 'react';
import {
    Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert, ScrollView
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';
import RNPickerSelect from 'react-native-picker-select';
const Formulario = ({ reservas, setReservas, guardarMostrarForm, guardarReservasStorage }) => {
    //variables para el formulario
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState('');
    const [seccion, guardarSeccion] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const confirmarFecha = date => {
        const opciones = { year: 'numeric', month: 'long', day: "2-digit" };
        guardarFecha(date.toLocaleDateString('es-ES', opciones));
        hideDatePicker();
    };
    // Muestra u oculta el Time Picker
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };
    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };
    const confirmarHora = hora => {
        const opciones = { hour: 'numeric', minute: '2-digit', hour12: false };
        guardarHora(hora.toLocaleString('es-ES', opciones));
        hideTimePicker();
    };
    // Crear nueva cita
    const crearNuevaReserva = () => {
        // Validar
        if (nombre.trim() === '' ||
            cantidad.trim() === '' ||
            seccion.trim() === '' ||
            fecha.trim() === '' ||
            hora.trim() === '') {
            // Falla la validación
            mostrarAlerta();
            return;
        }
        // Crear una nueva cita
        const reserva = { nombre, cantidad, seccion, fecha, hora};
        reserva.id = shortid.generate();
        // console.log(cita);
        // Agregar al state
        const reservasNuevo = [...reservas, reserva];
        setReservas(reservasNuevo);
        // Pasar las nuevas citas a storage
        guardarReservasStorage(JSON.stringify(reservasNuevo));
        // Ocultar el formulario
        guardarMostrarForm(false);
        // Resetear el formulario
        guardarNombre('');
        guardarCantidad('');
        guardarSeccion('');
        guardarHora('');
        guardarFecha('');
        
    }
    // Muestra la alerta si falla la validación
    const mostrarAlerta = () => {
        Alert.alert(
            'Error', // Titulo
            'Todos los campos son obligatorios', // mensaje
            [{
                text: 'OK' // Arreglo de botones
            }]
        )
    }

    return (
        <>
            <ScrollView style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Nombre del Cliente:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto => guardarNombre(texto)}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Seccion:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto => guardarSeccion(texto)}  
                        placeholder="Fumadores/No Fumadores"
                        placeholderTextColor="#FFF" 
                    />
                </View> 
                <View>
                    <Text style={styles.label}>Cantidad de Invitados:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto => guardarCantidad(texto)}
                        keyboardType='numeric'
                    />
                </View>
                <View>
                    <Text style={styles.label}>Fecha de la Reservacion:</Text>
                    <Button style={styles.btnSubmit} title="Seleccionar Fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                        headerTextIOS="Elige la fecha"
                        cancelTextIOS="Cancelar"
                        confirmTextIOS="Confirmar"
                    />
                    <Text style={styles.label}>{fecha}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Hora de la Reservacion:</Text>
                    <Button title="Seleccionar Hora" onPress={showTimePicker} style={styles.btnSubmit} />
                    <DateTimePickerModal 
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmarHora}
                        onCancel={hideTimePicker}
                        locale='es_ES'
                        headerTextIOS="Elige una Hora"
                        cancelTextIOS="Cancelar"
                        confirmTextIOS="Confirmar"
                    />
                    <Text style={styles.label}>{hora}</Text>
                </View>
                <View>
                    <TouchableHighlight onPress={() => crearNuevaReserva()}
                        style={styles.btnSubmit}>
                        <Text style={styles.textoSubmit}>Crear Nueva Reservacion</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#082032',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        color: '#C4FF63'
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#C4FF63',
        borderWidth: 1,
        borderStyle: 'solid',
        color: '#FFF'
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: '#C4FF63',
        marginVertical: 10
    },
    textoSubmit: {
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 10,
    }

});

export default Formulario;
