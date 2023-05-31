import { StyleSheet, Text, View } from "react-native";

import { useState } from "react";
import { StartSettings } from "../moreOrLess-game-screens/StartSettings";
import { StartGame } from "../moreOrLess-game-screens/StartGame";
import { Play } from "../moreOrLess-game-screens/Play";
import { Results } from "../moreOrLess-game-screens/Results";

export function MoreOrLess() {

    const [currentScreen, setCurrentScreen] = useState('StartSettings');
    const [initialNumber, setInitialNumber] = useState('');
    const [totalAnswers, setTotalanswers] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const displayScreen = (screenName) => {
        if(screenName === currentScreen) {
            return true;
        };
        return false;
    };

    const changeScreen = (screenName) => {
        setCurrentScreen(screenName);
    };

    return(
        <View style={styles.gameContainer}>
            {displayScreen('StartSettings') && <StartSettings changeScreen={changeScreen}/>}
            {displayScreen('StartGame') && <StartGame changeScreen={changeScreen}/>}
            {displayScreen('Play') && <Play changeScreen={changeScreen}/>}
            {displayScreen('Results') && 
                <Results 
                    changeScreen={changeScreen} 
                    correctAnswers={correctAnswers}
                    totalAnswers={totalAnswers}
                />}
        </View>
    );
};

const styles = StyleSheet.create({
    gameContainer: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    }
})