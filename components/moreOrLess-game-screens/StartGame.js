import { StyleSheet, Text, View } from "react-native";
import { colorsPalette } from "../../utils/colorsPalette";
import { Button } from "../Button";

export function StartGame() {
    return(
        <View style={styles.container}>

            <Text style={styles.heading}>Remember the number below</Text>

            <Text style={styles.number}>123</Text>

            <Button 
                containerStyles={styles.buttonContainer}
                textStyles={styles.buttonText}
                text='Start'
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
    number: {
        marginVertical: 30,
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