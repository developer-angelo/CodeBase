import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ToastAndroid, ActivityIndicator, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function Projects() {
     const notProject = () => {
          ToastAndroid.show('Aún no hemos empezado el proyecto 👀', ToastAndroid.SHORT);
     };

     const [courses, setCourses] = useState([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          fetch('https://developer-angelo.github.io/api-for-teccora/proyectos_codebase/activos/data.json')
               .then(response => response.json())
               .then(data => {
                    setCourses(data);
               })
               .catch(error => {
                    console.error('Error al obtener los próximos proyectos:', error);
               })
               .finally(() => setLoading(false));
     }, []);

     if (loading) {
          return (
               <View style={[styles.body, { justifyContent: 'center', alignItems: 'center' }]}>
                    <ActivityIndicator size="large" color="#61ea8e" />
               </View>
          );
     }

     return (
          <ScrollView style={styles.body}>
               <Text style={styles.title}>Bienvenido a los <Text style={styles.mark}>Proyectos</Text></Text>

               {courses.length === 0 ? (
                    <Text style={styles.text}>No hay proyectos disponibles en este momento. ¡Vuelve más tarde!</Text>
               ) : (
                    <View style={styles.cards}>
                         {courses.map((course, index) => (
                              <View key={index} style={styles.card}>
                                   <Text style={styles.titleCard}>{course.title}</Text>
                                   <Text style={styles.text}>{course.description}</Text>
                                   <View style={{
                                        padding: 10
                                   }}>
                                        <TouchableOpacity onPress={() => { Linking.openURL('https://github.com/developer-angelo/codebase-projects/') }} style={{ marginTop: 10, backgroundColor: '#61ea8e', padding: 10, borderRadius: 5, alignItems: 'center', borderWidth: 2, borderColor: '#61ea8e' }}>
                                             <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>Ver Repo</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={notProject} style={{ marginTop: 10, borderWidth: 2, borderColor: '#4e3576', padding: 10, borderRadius: 5, alignItems: 'center' }}>
                                             <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Ver Demo</Text>
                                        </TouchableOpacity>
                                   </View>
                              </View>
                         ))}
                    </View>
               )
               }

               <StatusBar style="light" backgroundColor="#11131f" />
          </ScrollView >
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