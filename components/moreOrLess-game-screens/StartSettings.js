import { StyleSheet, Text, TextInput, View } from "react-native";
import { colorsPalette } from "../../utils/colorsPalette";
import { Button } from "../Button";

export function StartSettings() {
    return(
        <View style={styles.container}>

            <Text style={styles.heading}>Choose number options</Text>

            <View style={styles.buttonsGroupContainer}>
                <Button 
                    text='from 1 to 9'
                    containerStyles={{...styles.buttonContainer, backgroundColor: colorsPalette.pakistanGreen}}
                    textStyles={styles.buttonText}
                />
                <Button 
                    text='from 1 to 99'
                    containerStyles={{...styles.buttonContainer, backgroundColor: colorsPalette.verdigris}}
                    textStyles={styles.buttonText}
                />
                <Button 
                    text='from 1 to 999'
                    containerStyles={{...styles.buttonContainer, backgroundColor: colorsPalette.indigoDye}}
                    textStyles={styles.buttonText}
                />
                <Button 
                    text='any'
                    containerStyles={{...styles.buttonContainer, backgroundColor: colorsPalette.brightPink}}
                    textStyles={styles.buttonText}
                />
            </View>

            <Button 
                containerStyles={{...styles.buttonContainer, backgroundColor: colorsPalette.darkGreen}}
                textStyles={styles.buttonText}
                text='Почати гру'
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