import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { MoreOrLess } from './components/games/MoreOrLess';

export default function App() {

  const [currentGame, setCurrentGame] = useState('MoreOrLess');

  const displayGame = (gameName) => {
      if(gameName === currentGame) {
          return true;
      };
      return false;
  }

  return (
    <View style={styles.container}>
      {displayGame('MoreOrLess') && <MoreOrLess />}
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
