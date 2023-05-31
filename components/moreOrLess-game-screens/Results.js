import { StyleSheet, Text, View } from "react-native";
import { colorsPalette } from "../../utils/colorsPalette";
import { Button } from "../Button";

export function Results({changeScreen, correctAnswers, totalAnswers, setTotalAnswers, setCorrectAnswers}) {
    
    const onNextGamePress = () => {
        changeScreen('StartSettings');
        setTotalAnswers(0);
        setCorrectAnswers(0);
    } 
    
    return (
        <View style={styles.container}>

            <Text style={styles.heading}>Результати гри</Text>

            <View style={styles.resultContainer}>
                <Text style={styles.result}> Правильно </Text>
                <Text style={styles.result}> {correctAnswers} з {totalAnswers} </Text>
                <Text style={styles.result}> відповідей </Text>
            </View>

            <Button 
                containerStyles={styles.buttonContainer}
                textStyles={styles.buttonText}
                text='Нова гра'
                onPress={onNextGamePress}
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
        backgroundColor: colorsPalette.almond
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
    }
});