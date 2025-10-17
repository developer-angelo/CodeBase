import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Projects() {
     return (
          <ScrollView style={styles.body}>
               <Text style={styles.title}>Bienvenido a los <Text style={styles.mark}>Proyectos</Text></Text>

               <View style={styles.cards}>
                    <View style={styles.card}>
                         <Text style={styles.titleCard}>Clon de Yape</Text>
                         <Text style={styles.text}>Crearemos un clon de Yape, una app de pago, será hecho en la web con React.JS, usando una API de usuarios simulada con un frontend exquisito e identico al original. Al subir el proyecto al repo de GitHub, habrán cambios en el diseño y logos para evitar problemas legales.</Text>
                         <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
                              <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#61ea8e', padding: 10, borderRadius: 5, alignItems: 'center' }}>
                                   <Text style={{ color: 'black', fontWeight: 'bold' }}>Ver Repo</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={{ marginTop: 10, borderWidth: 2, borderColor: '#61ea8e', padding: 10, borderRadius: 5, alignItems: 'center' }}>
                                   <Text style={{ color: 'white' }}>Ver Demo</Text>
                              </TouchableOpacity>
                         </View>
                    </View>
               </View>
               <StatusBar style="light" backgroundColor="#11131f" />
          </ScrollView>
     );
}

const styles = StyleSheet.create({
     body: {
          flex: 1,
          backgroundColor: '#11131f',
          color: 'white'
     },
     title: {
          fontSize: 45,
          fontWeight: 'bold',
          paddingTop: 15,
          paddingLeft: 10,
          color: 'white'
     },
     text: {
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: 18,
          paddingLeft: 12,
     },
     mark: {
          fontSize: 45,
          fontWeight: 'bold',
          marginBottom: 20,
          padding: 10,
          textAlign: 'center',
          color: '#61ea8e'
     },
     cards: {
          padding: 10,
          flexDirection: 'column',
          gap: 15,
     },
     card: {
          padding: 10,
          borderRadius: 10,
          backgroundColor: '#1c1e2b',
          // Cross-platform shadow
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 4,
          marginBottom: 15
     },
     titleCard: {
          fontSize: 26,
          color: 'white',
          padding: 7,
          fontWeight: 'bold'
     }
});