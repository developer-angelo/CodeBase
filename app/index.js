import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Home() {
  return (
    <ScrollView style={styles.body}>
      <Text style={styles.title}>Bienvenido a <Text style={styles.mark}>CodeBase</Text></Text>
      <Text style={styles.text}>Aprende programación y desarrollo con cursos interactivos y un ambiente poderoso.</Text>
      <View style={styles.btnBox}>
        <Link href="/about" style={styles.link}>
          <View style={styles.divBtn}>
            <Entypo name="info-with-circle" size={24} color="white" />
            <Text style={styles.textBtn}>Acerca de</Text>
          </View>
        </Link>
        <Link href="/cursos" style={styles.btnA}>
          <View style={styles.divBtn}>
            <Ionicons name="library" size={24} color="black" />
            <Text style={styles.textBtnA}>Cursos</Text>
          </View>
        </Link>
      </View>
      <View style={styles.cards}>
        <View style={styles.card}>
          <FontAwesome name="leanpub" size={100} color="#61ea8e" style={{ textAlign: 'center', padding: 15 }} />
          <Text style={styles.titleCard}>Muchos recursos</Text>
          <Text style={styles.text}>En CodeBase, ofrecemos una amplia gama de cursos de programación y desarrollo. Nuestros cursos están diseñados para ser interactivos y prácticos, lo que te permitirá aprender de manera efectiva y rápida.</Text>
        </View>

        <View style={styles.card}>
          <FontAwesome5 name="free-code-camp" size={100} color="#61ea8e" style={{ textAlign: 'center', padding: 15 }} />
          <Text style={styles.titleCard}>Todo Gratis</Text>
          <Text style={styles.text}>Todos nuestros cursos están disponibles de manera gratuita. No necesitas pagar nada para acceder a nuestros contenidos y mejorar tus habilidades de programación y desarrollo.</Text>
        </View>

        <View style={styles.card}>
          <AntDesign name="folder-open" size={100} color="#61ea8e" style={{ textAlign: 'center', padding: 15 }} />
          <Text style={styles.titleCard}>Proyectos Open-Source</Text>
          <Text style={styles.text}>En CodeBase, valoramos la colaboración y la comunidad. Por eso, todos nuestros cursos están basados en proyectos open-source. Esto significa que puedes contribuir al desarrollo de estos proyectos y mejorar tus habilidades de programación al mismo tiempo.</Text>
        </View>
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
  divBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  textBtn: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 18,
    paddingLeft: 12,
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
  link: {
    marginTop: 15,
    width: '48%',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#4e3576'
  },
  btnBox: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnA: {
    marginTop: 15,
    width: '48%',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: '#62e491'
  },
  textBtnA: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
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