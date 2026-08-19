import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from './Style';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from './pages/login/login';
import { CriarOS } from './pages/criarOS/criarOS';
import { Cadastro } from './pages/cadastro/cadastro';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>

      <SafeAreaView style={styles.safeContainer}>
        <StatusBar style="auto" />
        <NavigationContainer>

          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false
            }}
          >

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="CriarOS" component={CriarOS} />

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

