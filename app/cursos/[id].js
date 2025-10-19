import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, ActivityIndicator, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Video } from 'expo-av';
import Markdown from 'react-native-markdown-display';

const { width } = Dimensions.get('window');

export default function IdCurso() {
    const { id } = useLocalSearchParams();
    const [cursoData, setCursoData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurso = async () => {
            try {
                const response = await fetch(`https://developer-angelo.github.io/api-for-teccora/cursos_codebase/${id}.json`);

                if (!response.ok) {
                    throw new Error(`Error HTTP ${response.status}`);
                }

                const data = await response.json();
                setCursoData(data);
            } catch (err) {
                console.error("Error al cargar curso:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCurso();
    }, [id]);

    // 🌀 Pantalla de carga
    if (loading) {
        return (
            <View style={[styles.body, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#61ea8e" />
                <Text style={{ color: 'white', marginTop: 10 }}>Cargando curso...</Text>
            </View>
        );
    }

    // ⚠️ Si hay error o el curso no existe
    if (error || !cursoData) {
        return (
            <View style={[styles.body, { justifyContent: 'center', alignItems: 'center', padding: 20 }]}>
                <Text style={styles.title}>¡Error!</Text>
                <Text style={styles.description}>No se encontró el curso con ID: {id}</Text>
                {error && <Text style={{ color: 'red', marginTop: 10 }}>Detalles: {error}</Text>}
            </View>
        );
    }

    // ✅ Render del contenido del curso
    return (
        <ScrollView style={styles.body}>
            <Stack.Screen options={{ title: cursoData.name }} />
            <Text style={styles.title}>{cursoData.name}</Text>
            <Text style={styles.description}>{cursoData.description}</Text>

            <Text style={styles.subtitle}>Contenido por Módulo</Text>

            {cursoData.modulos.map((modulo, i) => (
                <View key={modulo.id || i} style={styles.moduloContainer}>
                    <Text style={styles.moduloTitle}>{modulo.id}. {modulo.title}</Text>
                    <Text style={styles.moduloDescription}>{modulo.description}</Text>



                    {modulo.image && modulo.image !== "AQUI_URL_DE_IMG_GOOGLE" && (
                        <View style={styles.videoWrapper}>
                            <Image
                                source={{ uri: modulo.image }}
                                style={styles.video}
                                resizeMode="contain"
                            />
                        </View>
                    )}

                    <Text style={styles.leccionesHeader}>Lecciones:</Text>
                    {modulo.lecciones.map((leccion, j) => (
                        <View key={leccion.id || j} style={styles.leccionItem}>
                            <Text style={styles.leccionTitle}>- {leccion.title}</Text>
                            <Markdown style={markdownStyles}>{leccion.explicacion}</Markdown>
                        </View>
                    ))}

                    <Text style={styles.dato}>
                        <Text style={{ fontWeight: 'bold' }}>Dato:</Text> {modulo.dato}
                    </Text>
                    {modulo.video && modulo.video !== "AQUI_URL_DE_VIDEO_SUPABASE" && (
                        <View style={styles.videoWrapper}>
                            <Video
                                source={{ uri: modulo.video }}
                                style={styles.video}
                                useNativeControls
                                resizeMode="contain"
                                shouldPlay={false}
                                isLooping={false}
                                onLoad={(data) => {
                                    const duracion = (data.durationMillis / 1000).toFixed(2);
                                    console.log(`✅ Video cargado correctamente: ${duracion} segundos`);
                                }}
                                onError={(error) => {
                                    console.log("❌ Error al cargar video:", error);
                                }}
                            />
                        </View>
                    )}
                </View>
            ))}

            <StatusBar style="light" />
        </ScrollView>
    );
}


// Estilos para el renderizado de Markdown
const markdownStyles = {
    body: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 15,
        paddingTop: 5,
    },
    strong: {
        fontWeight: 'bold',
        color: 'white',
    },
    code_inline: {
        backgroundColor: '#2e3343',
        color: '#61ea8e',
        paddingHorizontal: 4,
        borderRadius: 3,
        fontFamily: 'monospace',
    },
    em: {
        fontStyle: 'italic',
        color: 'rgba(255, 255, 255, 0.9)',
    },
    paragraph: {
        marginTop: 0,
        marginBottom: 5,
    },
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
    videoWrapper: {
        width: '100%',
        height: width * 0.56,
        backgroundColor: '#000',
        marginBottom: 15,
        borderRadius: 8,
        overflow: 'hidden',
    },
    video: {
        flex: 1,
    },
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
