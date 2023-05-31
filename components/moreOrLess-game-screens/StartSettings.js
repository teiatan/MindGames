import { StyleSheet, Text, TextInput, View } from "react-native";
import { colorsPalette } from "../../utils/colorsPalette";
import { Button } from "../Button";

export function StartSettings({changeScreen, chooseNumbersGange, setCurrentGame}) {

    const chooseNumberOption = (min, max) => {
        chooseNumbersGange(min, max);
        changeScreen('StartGame');
    }

    return(
        <View style={styles.container}>

            <Text style={styles.heading}>Choose number options</Text>

            <View style={styles.buttonsGroupContainer}>
                <Button 
                    text='from 1 to 9'
                    containerStyles={{...styles.buttonContainer, backgroundColor: colorsPalette.pakistanGreen}}
                    textStyles={styles.buttonText}
                    onPress={chooseNumberOption.bind(this, 1, 9)}
                />
                <Button 
                    text='from 1 to 99'
                    containerStyles={{...styles.buttonContainer, backgroundColor: colorsPalette.verdigris}}
                    textStyles={styles.buttonText}
                    onPress={chooseNumberOption.bind(this, 1, 99)}
                />
                <Button 
                    text='from -9 to 9'
                    containerStyles={{...styles.buttonContainer, backgroundColor: colorsPalette.indigoDye}}
                    textStyles={styles.buttonText}
                    onPress={chooseNumberOption.bind(this, -9, 9)}
                />
                <Button 
                    text='from -99 to 99'
                    containerStyles={{...styles.buttonContainer, backgroundColor: colorsPalette.brightPink}}
                    textStyles={styles.buttonText}
                    onPress={chooseNumberOption.bind(this, -99, 99)}
                />
            </View>

            <Button 
                containerStyles={{...styles.buttonContainer, backgroundColor: colorsPalette.darkGreen}}
                textStyles={styles.buttonText}
                text='back to games'
                onPress={setCurrentGame.bind(this, 'GamesNavigation')}
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
    buttonContainer: {
        marginVertical: 5,
        borderRadius: 40,
        backgroundColor: colorsPalette.cinereous,
    },
    buttonText: {
        padding: 10,
        fontSize: 20,
        color: colorsPalette.snow,
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    buttonsGroupContainer: {
        marginVertical: 30
    }
});