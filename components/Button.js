import { Pressable, Text, View } from "react-native";

export function Button({containerStyles, textStyles, text}) {
    return(
        <View style={containerStyles}>
            <Pressable>
                <Text style={textStyles}>{text}</Text>
            </Pressable>
        </View>
    )
};


