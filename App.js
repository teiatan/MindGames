import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { MoreOrLess } from './components/games/MoreOrLess';
import { GamesNavigation } from './components/GamesNavigation';

export default function App() {

  const [currentGame, setCurrentGame] = useState('GamesNavigation');

  const displayGame = (gameName) => {
      if(gameName === currentGame) {
          return true;
      };
      return false;
  }

  return (
    <View style={styles.container}>
      {displayGame('GamesNavigation') && <GamesNavigation setCurrentGame={setCurrentGame}/>}
      {displayGame('MoreOrLess') && <MoreOrLess setCurrentGame={setCurrentGame}/>}
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
