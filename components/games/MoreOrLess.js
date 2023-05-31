import { StyleSheet, Text, View } from "react-native";

import { useState } from "react";
import { StartSettings } from "../moreOrLess-game-screens/StartSettings";
import { StartGame } from "../moreOrLess-game-screens/StartGame";
import { Play } from "../moreOrLess-game-screens/Play";

export function MoreOrLess() {

    const [currentScreen, setCurrentScreen] = useState('StartSettings');

    const displayScreen = (screenName) => {
        if(screenName === currentScreen) {
            return true;
        };
        return false;
    };

    return(
        <View style={styles.gameContainer}>
            {displayScreen('StartSettings') && <StartSettings />}
            {/* <StartGame />
            <Play />
            <Results /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    gameContainer: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    }
})