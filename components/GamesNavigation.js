import { StyleSheet, Text, View } from "react-native";
import { Button } from "./Button";
import { colorsPalette } from "../utils/colorsPalette";

export function GamesNavigation({setCurrentGame}) {


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Games:</Text>
            <View style={styles.buttonsGroupContainer}>
                <Button 
                    text='More or Less'
                    containerStyles={{...styles.buttonContainer, backgroundColor: colorsPalette.brightPink}}
                    textStyles={styles.buttonText}
                    onPress={setCurrentGame.bind(this, 'MoreOrLess')}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 16
    },
    heading: {
        color: colorsPalette.bistre,
        fontSize: 40,
        fontWeight: 700,
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    buttonsGroupContainer: {
        marginVertical: 30
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
})