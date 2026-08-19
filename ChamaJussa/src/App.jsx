import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { styles } from './Style';
import { Login } from './pages/login/login';
import { CriarOS } from './pages/criarOS/criarOS'
import { PainelNotificacoes } from './pages/painelNotificacoes/painelNotificacoes';



export default function App() {
  return (
    <SafeAreaProvider>

      <SafeAreaView style={styles.safeContainer}>

        <View style={styles.container}>

          <PainelNotificacoes/>

          <StatusBar style="auto" />

        </View>

      </SafeAreaView>

    </SafeAreaProvider>

  );
}

