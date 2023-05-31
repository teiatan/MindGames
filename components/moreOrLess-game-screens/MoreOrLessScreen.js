import { StyleSheet, Text, View } from "react-native";
import { Button } from "../Button";
import { colorsPalette } from "../../utils/colorsPalette";

export function MoreOrLessScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>число нижче є більшим чи меншим за попереднє?</Text>
            <Text style={styles.randomNumber}>45</Text>
            <View style={styles.buttonsContainer}>
                <Button 
                    text='менше'
                    containerStyles={styles.lessButtonContainer}
                    textStyles={styles.lessButtonText}
                />
                <Button 
                    text='більше'
                    containerStyles={styles.moreButtonContainer}
                    textStyles={styles.moreButtonText}
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
    }
});