import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight, ScrollView } from 'react-native';
const Reserva = ({ item, eliminarReserva }) => {
    const dialogoEliminar = id => {
        console.log('eliminando....', id);
        eliminarReserva(id);
    }
    return (
        <ScrollView style={styles.formulario}>
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Nombre: </Text>
                <Text style={styles.texto}>{item.nombre}</Text>
            </View>
            <View>
                <Text style={styles.label}>Cantidad: </Text>
                <Text style={styles.texto}>{item.cantidad}</Text>
            </View>
            <View>
                <Text style={styles.label}>Seccion: </Text>
                <Text style={styles.texto}>{item.seccion}</Text>
            </View>
            <View>
                <Text style={styles.label}>Fecha: </Text>
                <Text style={styles.texto}>{item.fecha}</Text>
            </View>
            <View>
                <Text style={styles.label}>Hora: </Text>
                <Text style={styles.texto}>{item.hora}</Text>
            </View>
            <View>
                <TouchableHighlight onPress={() => dialogoEliminar(item.id)}
                    style={styles.btnEliminar}>
                    <Text style={styles.textoEliminar}> Eliminar &times; </Text>
                </TouchableHighlight>
            </View>

        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#082032',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1
    },
    cita: {
        backgroundColor: '#C4FF63',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    texto: {
        fontSize: 18,
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: '#082032',
        marginVertical: 10
    },
    textoEliminar: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
export default Reserva;
