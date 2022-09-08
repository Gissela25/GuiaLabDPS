// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

/**
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import Form from './src/components/Form';
import colors from './src/utils/colors';
//import Footer from './src/components/Footer';
import Result from './src/components/Result';

export default function App() {

  const [salario, setSalario] = useState(null);
  const [Nombre, setNombre] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (Nombre && salario) {
      calculate();
    }else{
       reset();
    }
  }, [Nombre,salario]);
  const calculate = () => {
    reset();
    if (!salario) {
      setErrorMessage('Añade Salario Neto');
    }else if(!Nombre){
      setErrorMessage('Añade Nombre')
    } else {
      const iss = (salario * 0.03);
      const afp = (salario * 0.04);
      const renta = (salario * 0.05);
      const descuentos = iss + afp + renta;
      const neto = salario - descuentos;
      setTotal({
        salariobase: salario,
        issd: iss,
        afpd: afp,
        rentad: renta,
        netos: neto
      });
    }
  };
  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };


  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}>Calculadora de Salario Neto</Text>
        <Form
        setNombre={setNombre}
         setSalario={setSalario}

        />
      </SafeAreaView>
      <Result
      Nombre={Nombre}
      salario={salario}
      total={total}
      errorMessage={errorMessage}
        
      />

      <View>
        
      </View>
      <View>

      </View>
      {/* <Footer></Footer> */}
    </>
  );
}
const styles = StyleSheet.create({
  Header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    marginBottom: 10
  },
  HeadApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
});
