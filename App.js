import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EnterNumberScreen } from './components/EnterNumberScreen';
import { MoreOrLessScreen } from './components/MoreOrLessScreen';
import { ResultsScreen } from './components/screens/ResultsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <EnterNumberScreen /> */}
      {/* <MoreOrLessScreen /> */}
      {<ResultsScreen correctAnswers={4}/>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
