import { Stack, Link } from 'expo-router';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Octicons from '@expo/vector-icons/Octicons';

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#11131f' }}>
      <StatusBar style="light" backgroundColor="#11131f" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#1c1e2b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          contentStyle: { backgroundColor: '#11131f' },
          animation: 'fade',
        }}
      >
        <Stack.Screen name="index" options={{
          title: 'Powered by Angelo', headerRight: () => (
            <Link
              href="/projects"
              style={{ marginRight: 15 }}
            >
              <Octicons name="project-symlink" size={22} color="#61ea8e" />
            </Link>
          )
        }} />
        <Stack.Screen name="about" options={{ title: 'Acerca de' }} />
        <Stack.Screen name="projects" options={{ title: 'Proyectos' }} />
        <Stack.Screen name="cursos/index" options={{ title: 'Cursos' }} />
        <Stack.Screen name="cursos/[id]" options={{ title: 'Cargando...' }} />
      </Stack>
    </View>
  );
}