import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useSearchParams, useSegments, Stack } from 'expo-router';
import { Video } from 'expo-video';
import Markdown from 'react-native-markdown-display';

import html from '../../assets/data/html.json';
import css from '../../assets/data/css.json';
import javascript from '../../assets/data/javascript.json';
import python from '../../assets/data/python.json';
import php from '../../assets/data/php.json';
import sql from '../../assets/data/sql.json';
import nodejs from '../../assets/data/nodejs.json';
import framework7 from '../../assets/data/framework7.json';
import react from '../../assets/data/react.json';
import reactnative from '../../assets/data/reactnative.json';
import flutter from '../../assets/data/flutter.json';
import ciberseguridad from '../../assets/data/ciberseguridad.json';

const cursosMap = {
    'html': html,
    'css': css,
    'javascript': javascript,
    'python': python,
    'php': php,
    'sql': sql,
    'nodejs': nodejs,
    'framework7': framework7,
    'react': react,
    'reactnative': reactnative,
    'flutter': flutter,
    'ciberseguridad': ciberseguridad
};

const { width } = Dimensions.get('window');

export default function IdCurso() {
    // Intentamos obtener el id desde varias fuentes para evitar casos donde llegue vacío
    const localParams = useLocalSearchParams();
    const searchParams = useSearchParams();
    const segments = useSegments();

    let { id } = localParams || {};
    if (!id && searchParams) id = searchParams.id;
    if (!id && segments && segments.length) id = segments[segments.length - 1];

    // Normalizar a string (o cadena vacía)
    id = id ? String(id) : '';

    // Debug útil en consola (se puede eliminar luego)

    const cursoData = cursosMap[id] || null;

    if (!cursoData) {
        return (
            <View style={[styles.body, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={styles.title}>¡Error!</Text>
                <Text style={styles.description}>No se encontró el curso con ID: {id}</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.body}>

            {/* Título de la cabecera de la Stack */}
            <Stack.Screen options={{ title: cursoData.name }} />

            {/* Título Principal y Descripción General del Curso */}
            <Text style={styles.title}>
                {cursoData.name}
            </Text>

            <Text style={styles.description}>
                {cursoData.description}
            </Text>

            <Text style={styles.subtitle}>Contenido por Módulo</Text>

            {/* MAPEO 1: Recorre los MÓDULOS */}
            {cursoData.modulos.map((modulo, i) => (
                <View
                    key={modulo.id || i}
                    style={styles.moduloContainer}
                >
                    {/* Título y Descripción del Módulo */}
                    <Text style={styles.moduloTitle}>
                        {modulo.id}. {modulo.title}
                    </Text>
                    <Text style={styles.moduloDescription}>
                        {modulo.description}
                    </Text>

                    {/* LUGAR DEL VIDEO */}
                    {modulo.video && modulo.video !== "AQUI_URL_DE_VIDEO_SUPABASE" && (
                        <View style={styles.videoWrapper}>
                            <Video
                                style={styles.video}
                                source={{ uri: modulo.video }}
                                useNativeControls
                                resizeMode="contain"
                                isLooping={false}
                            />
                        </View>
                    )}

                    <Text style={styles.leccionesHeader}>Lecciones:</Text>

                    {/* MAPEO 2: Recorre las LECCIONES y MUESTRA TODO */}
                    {modulo.lecciones.map((leccion, j) => (
                        <View key={leccion.id || j} style={styles.leccionItem}>

                            {/* Título de la Lección */}
                            <Text style={styles.leccionTitle}>
                                - {leccion.title}
                            </Text>

                            {/* EXPLICACIÓN COMPLETA CON FORMATO MARKDOWN */}
                            <Markdown style={markdownStyles}>
                                {leccion.explicacion}
                            </Markdown>

                        </View>
                    ))}

                    {/* DATO CURIOSO/IMPORTANTE */}
                    <Text style={styles.dato}>
                        <Text style={{ fontWeight: 'bold' }}>Dato:</Text> {modulo.dato}
                    </Text>

                </View>
            ))}

            <StatusBar style="auto" />
        </ScrollView>
    );
}


// Estilos para el renderizado de Markdown
const markdownStyles = {
    // Estilo general para todo el texto
    body: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 15,
        paddingTop: 5,
    },
    // Negrita (usando **)
    strong: {
        fontWeight: 'bold',
        color: 'white',
    },
    // Código en línea (usando `code`)
    code_inline: {
        backgroundColor: '#2e3343',
        color: '#61ea8e',
        paddingHorizontal: 4,
        borderRadius: 3,
        fontFamily: 'monospace', // Mejorar la fuente para código si es posible
    },
    // Énfasis/Cursiva (usando *)
    em: {
        fontStyle: 'italic',
        color: 'rgba(255, 255, 255, 0.9)',
    },
    // Eliminamos el padding/margin default de otros tags si no se usan
    paragraph: {
        marginTop: 0,
        marginBottom: 5,
    }
};


const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#11131f',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingLeft: 10,
        color: 'white',
        textAlign: 'center'
    },
    description: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 15,
        marginBottom: 20
    },
    subtitle: {
        color: '#61ea8e',
        fontSize: 27,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    // Estilos para el MÓDULO (contenedor principal)
    moduloContainer: {
        padding: 15,
        backgroundColor: '#1a1d29',
        marginHorizontal: 15,
        borderRadius: 8,
        marginBottom: 15
    },
    moduloTitle: {
        color: '#61ea8e',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    moduloDescription: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 15,
        marginBottom: 10,
    },
    // Video
    videoWrapper: {
        width: '100%',
        height: width * 0.56, // Proporción 16:9
        backgroundColor: '#000',
        marginBottom: 15,
        borderRadius: 8,
        overflow: 'hidden',
    },
    video: {
        flex: 1,
    },
    // Estilos para las LECCIONES (anidadas)
    leccionesHeader: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.2)',
        paddingBottom: 5,
    },
    leccionItem: {
        paddingVertical: 10,
        borderLeftWidth: 3,
        borderLeftColor: 'rgba(97, 234, 142, 0.5)',
        paddingLeft: 10,
        marginBottom: 5,
    },
    leccionTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    dato: {
        color: 'gold',
        fontSize: 14,
        fontStyle: 'italic',
        marginTop: 15,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.1)',
    },
});