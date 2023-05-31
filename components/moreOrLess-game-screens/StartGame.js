import { StyleSheet, Text, View } from "react-native";
import { colorsPalette } from "../../utils/colorsPalette";
import { Button } from "../Button";

export function StartGame({changeScreen}) {

    const randomNumber = Math.random();

    const playGame = () => {
        changeScreen('Play')
    };

    const cancelGame = () => {
        changeScreen('StartSettings')
    };
    
    return(
        <View style={styles.container}>

            <Text style={styles.heading}>Remember the number below</Text>

            <Text style={styles.number}>{randomNumber}</Text>

            <View style={styles.buttonsContainer}>
                <Button 
                    text='cancel'
                    containerStyles={styles.cancelButtonContainer}
                    textStyles={styles.cancelButtonText}
                    onPress={cancelGame}
                />
                <Button 
                    text='play'
                    containerStyles={styles.playButtonContainer}
                    textStyles={styles.playButtonText}
                    onPress={playGame}
                />
            </View>

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
    number: {
        marginVertical: 30,
        textAlign: 'center',
        fontSize: 50,
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 20
    },
    playButtonContainer: {
        borderRadius: 40,
        backgroundColor: colorsPalette.cinereous,
    },
    playButtonText: {
        padding: 10,
        fontSize: 20,
        textTransform: 'uppercase',
    },
    cancelButtonContainer: {
        borderRadius: 40,
        backgroundColor: colorsPalette.cinereous,
    },
    cancelButtonText: {
        padding: 10,
        fontSize: 20,
        textTransform: 'uppercase',
    }
});