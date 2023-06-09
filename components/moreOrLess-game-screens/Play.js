import { StyleSheet, Text, View } from "react-native";
import { Button } from "../Button";
import { colorsPalette } from "../../utils/colorsPalette";
import { useState } from "react";

export function Play({changeScreen, correctAnswers, setCorrectAnswers, totalAnswers, setTotalAnswers, initialNumber, min, max, hints, setHints}) {

    const setNewCurrentNumber = (notEqual = gameNumbers.cur) => {
        let number;
        do {
            number = Math.floor(Math.random() * (max - min + 1) + min)
        } while (number === notEqual);
        return number;
    };

    const [isPreviousNumberShown, setIsPreviousNumberShown] = useState(false);
    const [gameNumbers, setGameNumbers] = useState({prev: initialNumber, cur: setNewCurrentNumber(initialNumber)})
    
    const pressLess = () => {
        setTotalAnswers(prev => prev+1);
        if(gameNumbers.prev > gameNumbers.cur) {
            setCorrectAnswers(prev => prev+1);
        };
        setGameNumbers(prev => ({prev: prev.cur, cur: setNewCurrentNumber()}));
        setIsPreviousNumberShown(false);
    };

    const pressMore = () => {
        setTotalAnswers(prev => prev+1);
        if(gameNumbers.prev < gameNumbers.cur) {
            setCorrectAnswers(prev => prev+1);
        };
        setGameNumbers(prev => ({prev: prev.cur, cur: setNewCurrentNumber()}));
        setIsPreviousNumberShown(false);
    };

    const finishGame = () => {
        changeScreen('Results');
    };

    const showPrevious = () => {
        setIsPreviousNumberShown(true);
        setHints(prev => prev+1);
    };

    return(
        <View style={styles.container}>
            <Text>Total: {totalAnswers} Correct: {correctAnswers} Hints: {hints}</Text>
            <Text style={styles.heading}>{!isPreviousNumberShown && ('Is this number bigger or smaller than previous')}</Text>
            <View style={styles.numbersContainer}>
                <Text style={styles.randomNumber}>{gameNumbers.cur}</Text>
                {isPreviousNumberShown && <>
                    <Text style={styles.randomNumber}>?</Text>
                    <Text style={styles.randomNumber}>{gameNumbers.prev}</Text>
                </>}
            </View>
            <View style={styles.buttonsContainer}>
                <Button 
                    text={isPreviousNumberShown ? '<' : 'smaller'}
                    containerStyles={styles.lessButtonContainer}
                    textStyles={styles.lessButtonText}
                    onPress={pressLess}
                />
                <Button 
                    text={isPreviousNumberShown ? '>' : 'bigger'}
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
            {!isPreviousNumberShown && <Button 
                text='show previous'
                containerStyles={styles.finishButtonContainer}
                textStyles={styles.finishButtonText}
                onPress={showPrevious}
            />}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: colorsPalette.bistre,
        fontSize: 20,
        textTransform: 'uppercase',
    },
    numbersContainer: {
        flexDirection: 'row'
    },
    randomNumber: {
        marginVertical: 30,
        minWidth: 90,
        textAlign: 'center',
        fontSize: 70,
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