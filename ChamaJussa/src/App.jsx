import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from './Style';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { MinhasOS } from './pages/minhasOS/minhasOS';
import { CriarOS } from './pages/criarOS/criarOS';
import painel from './pages/painelNotificacoes/painelNotificacoes'
import { Perfil } from './pages/perfil/perfil';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Login"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Cadastro" component={Cadastro} />
              <Stack.Screen name="MinhasOS" component={MinhasOS} />
              <Stack.Screen name="CriarOS" component={CriarOS} />
              <Stack.Screen name='PainelNotificacoes' component={painel} />
              <Stack.Screen name='Perfil' component={Perfil} />
            </Stack.Navigator>
          </NavigationContainer>

          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}