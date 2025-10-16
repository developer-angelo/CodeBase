import { Stack } from 'expo-router';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#11131f' }}>
      <StatusBar style="light" />
      <Stack 
        screenOptions={{
          headerStyle: { backgroundColor: '#1c1e2b' },
          headerTintColor: '#fff',                 
          headerTitleStyle: { fontWeight: 'bold' }, 
          contentStyle: { backgroundColor: '#11131f' },
          animation: 'fade',
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Powered by Angelo' }} />
        <Stack.Screen name="about" options={{ title: 'Acerca de' }} />
        <Stack.Screen name="cursos" options={{ title: 'Cursos' }} />
      </Stack>
    </View>
  );
}