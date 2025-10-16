import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function About() {
  return (
    <ScrollView style={styles.body}>
      <Text style={styles.title}>Conócenos un <Text style={styles.mark}>poco más</Text></Text>
      <Text style={styles.text}>Aprende, Construye, e Innova</Text>
      <View style={styles.box}>
        <Text style={styles.subtitle}>Historia</Text>
        <Text style={styles.description}>
          Un joven de 14 años, decidió crear una plataforma para que otros usuarios puedan aprender programación y desarrollo. Así que solo penso en el nombre <Text style={styles.markText}>CodeBase</Text>. Así nació una gran aplicación para el aprendizaje.
        </Text>
        <Text style={styles.subtitle}>¿Cómo son los cursos?</Text>
        <Text style={styles.description}>
        Los cursos, están hecho a base de información oficial, además de tener una ayuda de videos en donde se explica de forma más profunda y se muestran ejercicios. Los videos son elaborados por Angelo Benites.
        </Text>
        <Text style={styles.subtitle}>¿Dónde se alojan los proyectos?</Text>
        <Text style={styles.description}>Los proyectos, que se elaboran en el transcurso de los cursos, se hospedan en un repositorio de GitHub, exactamente: </Text>
      </View>
      
      <StatusBar style="light" />
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
  mark: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 10,
    textAlign: 'center',
    color: '#61ea8e'
  },
  markText: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#61ea8e'
  },
  text: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 18,
    paddingLeft: 12,
  },
  box: {
    padding: 15,
  },
  subtitle: {
    color: 'white',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  description: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 19,
    paddingLeft: 12,
  }
});