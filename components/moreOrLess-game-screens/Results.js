import { StyleSheet, Text, View } from "react-native";
import { colorsPalette } from "../../utils/colorsPalette";
import { Button } from "../Button";

export function Results({changeScreen, correctAnswers, totalAnswers, setTotalAnswers, setCorrectAnswers, setCurrentGame, hints}) {
    
    const onNextGamePress = () => {
        changeScreen('StartSettings');
        setTotalAnswers(0);
        setCorrectAnswers(0);
    } 
    
    return (
        <View style={styles.container}>

            <Text style={styles.heading}>Results</Text>

            <View style={styles.resultContainer}>
                <Text style={styles.result}> Correct </Text>
                <Text style={styles.result}> {correctAnswers} of {totalAnswers} </Text>
                <Text style={styles.result}> answers </Text>
                <Text style={styles.result}> with {hints} hints </Text>
            </View>

            <Button 
                containerStyles={styles.buttonContainer}
                textStyles={styles.buttonText}
                text='New game'
                onPress={onNextGamePress}
            />

            <Button 
                containerStyles={{...styles.buttonContainer, backgroundColor: colorsPalette.darkGreen}}
                textStyles={styles.buttonText}
                text='back to games'
                onPress={setCurrentGame.bind(this, 'GamesNavigation')}
            />
        </View>
    );
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
    resultContainer: {
        marginVertical: 30
    },
    result: {
        textAlign: 'center',
        fontSize: 50,
    },
    buttonContainer: {
        borderRadius: 40,
        backgroundColor: colorsPalette.cinereous,
    },
    buttonText: {
        padding: 10,
        fontSize: 20,
        textTransform: 'uppercase',
        color: colorsPalette.almond
    }
});