import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Cursos() {
    return (
        <ScrollView style={styles.body}>
            <Text style={styles.title}>Bienvenido a los <Text style={styles.mark}>Cursos</Text></Text>
            
            <View style={styles.cards}>
              <Link href="/cursos/html">
                <View style={styles.card}>
                  <FontAwesome name="html5" size={70} color="#fd714b" style={{textAlign: 'center', padding: 15}} />
                  <Text style={styles.titleCard}>Curso HTML</Text>
                  <Text style={styles.text}>Aprende a elaborar plataformas webs, armando su esqueleto ☠.</Text>
                </View>
              </Link>
              <Link href="/cursos/css">
                <View style={styles.card}>
                  <Fontisto name="css3" size={70} color="#09f" style={{textAlign: 'center', padding: 15}} />
                  <Text style={styles.titleCard}>Curso CSS</Text>
                  <Text style={styles.text}>Aprende a darle estilo y formato a tus páginas web, transformando estructuras planas en experiencias visuales atractivas 🎨.</Text>
                </View>
              </Link>
              <Link href="/cursos/javascript">
                <View style={styles.card}>
                  <Ionicons name="logo-javascript" size={70} color="yellow" style={{textAlign: 'center', padding: 15}} />
                  <Text style={styles.titleCard}>Curso JS</Text>
                  <Text style={styles.text}>Aprende el lenguaje de programación que da vida a las páginas web, desde interactividad básica hasta lógica avanzada ⚡.</Text>
                </View>
              </Link>
              <Link href="/cursos/python">
                <View style={styles.card}>
                  <FontAwesome5 name="python" size={70} color="#ffa808" style={{textAlign: 'center', padding: 15}} />
                  <Text style={styles.titleCard}>Curso Python</Text>
                  <Text style={styles.text}>Aprende Python, uno de los lenguajes más populares y versátiles del mundo, ideal para desarrollo web, automatización y ciencia de datos 🐍.</Text>
                </View>
              </Link>
              <Link href="/cursos/php">
                <View style={styles.card}>
                  <Fontisto name="php" size={70} color="#7377ad" style={{textAlign: 'center', padding: 15}} />
                  <Text style={styles.titleCard}>Curso PHP</Text>
                  <Text style={styles.text}>Aprende PHP, el lenguaje de programación del lado del servidor que impulsa millones de sitios web, incluyendo WordPress y plataformas dinámicas 🖥️.</Text>
                </View>
              </Link>
              <Link href="/cursos/sql">
                <View style={styles.card}>
                  <Fontisto name="mysql" size={70} color="#98d7f4" style={{textAlign: 'center', padding: 15}} />
                  <Text style={styles.titleCard}>Curso SQL y SQLite</Text>
                  <Text style={styles.text}>Aprende SQL y SQLite para manejar bases de datos, almacenar información y consultarla de manera eficiente 🗄️.</Text>
                </View>
              </Link>
              <Link href="/cursos/nodejs">
                <View style={styles.card}>
                  <Ionicons name="logo-nodejs" size={70} color="#90ca51" style={{textAlign: 'center', padding: 15}} />
                  <Text style={styles.titleCard}>Curso Node.JS</Text>
                  <Text style={styles.text}>Aprende Node.js, el entorno de ejecución de JavaScript en el servidor, para crear aplicaciones rápidas, escalables y modernas 🖥️.</Text>
                </View>
              </Link>
              <Link href="/cursos/framework7">
                <View style={styles.card}>
                  <MaterialCommunityIcons name="numeric-7-circle" size={70} color="#ef3b17" style={{textAlign: 'center', padding: 15}} />
                  <Text style={styles.titleCard}>Curso Framework7</Text>
                  <Text style={styles.text}>Aprende Framework7 para crear aplicaciones móviles híbridas con apariencia nativa usando HTML, CSS y JavaScript 📲.</Text>
                </View>
              </Link>
              <Link href="/cursos/react">
                <View style={styles.card}>
                  <Fontisto name="react" size={70} color="cyan" style={{textAlign: 'center', padding: 15}} />
                  <Text style={styles.titleCard}>Curso React.JS</Text>
                  <Text style={styles.text}>Aprende React, la librería de JavaScript para construir interfaces de usuario modernas, dinámicas y reactivas 💻.</Text>
                </View>
              </Link>
              <Link href="/cursos/reactnative">
                <View style={styles.card}>
                  <Fontisto name="react" size={70} color="cyan" style={{textAlign: 'center', padding: 15}} />
                  <Text style={styles.titleCard}>Curso React Native</Text>
                  <Text style={styles.text}>Aprende React Native para crear aplicaciones móviles nativas usando JavaScript y React, compatibles con iOS y Android 📲.</Text>
                </View>
              </Link>
              <Link href="/cursos/flutter">
                <View style={styles.card}>
                  <FontAwesome6 name="flutter" size={70} color="#09f" style={{textAlign: 'center', padding: 15}} />
                  <Text style={styles.titleCard}>Curso Flutter</Text>
                  <Text style={styles.text}>Aprende Flutter para crear aplicaciones móviles nativas y multiplataforma con rendimiento nativo usando Dart 📲.</Text>
                </View>
              </Link>
              <Link href="/cursos/ciberseguridad">
                <View style={styles.card}>
                  <FontAwesome5 name="dragon" size={70} color="white" style={{textAlign: 'center', padding: 15}} />
                  <Text style={styles.titleCard}>Curso Ciberseguridad con Kali Linux</Text>
                  <Text style={styles.text}>Aprende Kali Linux y ciberseguridad: desde comandos básicos hasta hacking ético y pruebas de penetración 🔐.</Text>
                </View>
              </Link>
            </View>

            <StatusBar style="auto" />
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
  description: {
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    color: 'white'
  },
  cards: {
    padding: 10,
    flexDirection: 'column',
    gap: 15
  },
  card: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#1c1e2b',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'
  },
  titleCard: {
    fontSize: 26,
    color: 'white',
    padding: 7,
    fontWeight: 'bold'
  }
});