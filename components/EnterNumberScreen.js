import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colorsPalette } from "../utils/colorsPalette";
import { Button } from "./Button";

export function EnterNumberScreen() {
    return(
        <View style={styles.container}>

            <Text style={styles.heading}>Введіть число від 1 до 99</Text>

            <TextInput style={styles.input}/>

            <Button 
                containerStyles={styles.buttonContainer}
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
    input: {
        marginVertical: 30,
        height: '20%',
        width: '100%',
        textAlign: 'center',
        fontSize: 70,
        borderRadius: 40,
        borderColor: colorsPalette.black,
        borderWidth: 1,
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