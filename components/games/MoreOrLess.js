import { StyleSheet, Text, View } from "react-native";

import { useState } from "react";
import { StartSettings } from "../moreOrLess-game-screens/StartSettings";
import { StartGame } from "../moreOrLess-game-screens/StartGame";
import { Play } from "../moreOrLess-game-screens/Play";
import { Results } from "../moreOrLess-game-screens/Results";

export function MoreOrLess({setCurrentGame}) {

    const [currentScreen, setCurrentScreen] = useState('StartSettings');
    const [numbersRange, setNumbersRange] = useState({min: 0, max: 0});
    const [initialNumber, setInitialNumber] = useState('');
    const [totalAnswers, setTotalAnswers] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [hints, setHints] = useState(0);

    const displayScreen = (screenName) => {
        if(screenName === currentScreen) {
            return true;
        };
        return false;
    };

    const changeScreen = (screenName) => {
        setCurrentScreen(screenName);
    };

    const chooseNumbersGange = (min, max) => {
        const number = Math.floor(Math.random() * (max - min + 1) + min);
        setInitialNumber(number);
        setNumbersRange({min, max});
    }

    return(
        <View style={styles.gameContainer}>

            {displayScreen('StartSettings') && 
                <StartSettings 
                    changeScreen={changeScreen}
                    chooseNumbersGange={chooseNumbersGange}
                    setCurrentGame={setCurrentGame}
                />
            }

            {displayScreen('StartGame') && 
                <StartGame 
                    changeScreen={changeScreen}
                    initialNumber={initialNumber}
                />
            }

            {displayScreen('Play') && 
                <Play 
                    changeScreen={changeScreen}
                    correctAnswers={correctAnswers}
                    totalAnswers={totalAnswers}
                    hints={hints}
                    setTotalAnswers={setTotalAnswers}
                    setCorrectAnswers={setCorrectAnswers}
                    setHints={setHints}
                    initialNumber={initialNumber}
                    min={numbersRange.min}
                    max={numbersRange.max}
                />
            }

            {displayScreen('Results') && 
                <Results 
                    changeScreen={changeScreen} 
                    correctAnswers={correctAnswers}
                    totalAnswers={totalAnswers}
                    hints={hints}
                    setTotalAnswers={setTotalAnswers}
                    setCorrectAnswers={setCorrectAnswers}
                    setCurrentGame={setCurrentGame}
                    setHints={setHints}
                />
            }
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