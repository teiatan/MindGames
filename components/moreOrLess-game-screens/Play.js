import { StyleSheet, Text, View } from "react-native";
import { Button } from "../Button";
import { colorsPalette } from "../../utils/colorsPalette";
import { useState } from "react";

export function Play({changeScreen, correctAnswers, setCorrectAnswers, totalAnswers, setTotalAnswers, initialNumber, min, max}) {

    const [currentNumber, setCurrentNumber] = useState(Math.floor(Math.random() * (max - min + 1) + min));
    const [previousNumber, setPreviousNumber] = useState(initialNumber)
    const [gameNumbers, setGameNumbers] = useState({prev: initialNumber, cur: Math.floor(Math.random() * (max - min + 1) + min)})

    const setNewCurrentNumber = () => {
        let number;
        do {
            number = Math.floor(Math.random() * (max - min + 1) + min)
        } while (number === gameNumbers.cur);
        return number;
    };

    const pressLess = () => {
        setTotalAnswers(prev => prev+1);
        if(gameNumbers.prev > gameNumbers.cur) {
            setCorrectAnswers(prev => prev+1);
        };
        setGameNumbers(prev => ({prev: prev.cur, cur: setNewCurrentNumber()}))
    };

    const pressMore = () => {
        setTotalAnswers(prev => prev+1);
        if(gameNumbers.prev < gameNumbers.cur) {
            setCorrectAnswers(prev => prev+1);
        };
        setGameNumbers(prev => ({prev: prev.cur, cur: setNewCurrentNumber()}))
    };

    const finishGame = () => {
        changeScreen('Results');
    };

    return(
        <View style={styles.container}>
            <Text>Total: {totalAnswers} Correct: {correctAnswers}</Text>
            <Text style={styles.heading}>Is this number bigger or smaller than previous?</Text>
            <Text style={styles.randomNumber}>{gameNumbers.cur}</Text>
            <View style={styles.buttonsContainer}>
                <Button 
                    text='smaller'
                    containerStyles={styles.lessButtonContainer}
                    textStyles={styles.lessButtonText}
                    onPress={pressLess}
                />
                <Button 
                    text='bigger'
                    containerStyles={styles.moreButtonContainer}
                    textStyles={styles.moreButtonText}
                    onPress={pressMore}
                />
            </View>
            <Button 
                text='finish'
                containerStyles={styles.finishButtonContainer}
                textStyles={styles.finishButtonText}
                onPress={finishGame}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorsPalette.almond
    },
    heading: {
        color: colorsPalette.bistre,
        fontSize: 20,
        textTransform: 'uppercase',
    },
    randomNumber: {
        marginVertical: 30,
        minWidth: 90,
        textAlign: 'center',
        fontSize: 70,
        borderRadius: 40,
        borderColor: colorsPalette.black,
        borderWidth: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 20
    },
    moreButtonContainer: {
        borderRadius: 40,
        backgroundColor: colorsPalette.cinereous,
    },
    moreButtonText: {
        padding: 10,
        fontSize: 20,
        textTransform: 'uppercase',
    },
    lessButtonContainer: {
        borderRadius: 40,
        backgroundColor: colorsPalette.cinereous,
    },
    lessButtonText: {
        padding: 10,
        fontSize: 20,
        textTransform: 'uppercase',
    },
    finishButtonContainer: {
        borderRadius: 40,
        backgroundColor: colorsPalette.cinereous,
    },
    finishButtonText: {
        padding: 10,
        fontSize: 20,
        textTransform: 'uppercase',
    }
});