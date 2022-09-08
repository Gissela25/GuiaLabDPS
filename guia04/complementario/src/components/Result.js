import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default function Result(props) {
  const {salario, total, errorMessage, Nombre} = props;
  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>RESUMEN DE DESCUENTOS DE {Nombre}</Text>
          <DataResult title="Salario Base" value={`${salario} $`} />
          <DataResult title="Descuento de ISS: (3%)" value={`${total.issd} $`} />
          <DataResult title="Descuento de AFP (4%):" value={`${total.afpd}$`} />
          <DataResult title="Descuento de Renta: (5%)" value={`${total.rentad} $`} />
          <DataResult title="Salario Neto:" value={`${total.netos} $`} />
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}
function DataResult(props) {
  const {title, value} = props;
  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    marginHorizontal: 40,
  },
  boxResult: {
    padding: 30,
  },
  title: {
    fontSize: 19,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
