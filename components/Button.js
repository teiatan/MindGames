import { Pressable, Text, View } from "react-native";

export function Button({containerStyles, textStyles, text, onPress}) {
    return(
        <View style={containerStyles}>
            <Pressable onPress={onPress}>
                <Text style={textStyles}>{text}</Text>
            </Pressable>
        </View>
    )
};


