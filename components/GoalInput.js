import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = (props) => {
    const [enterGoal, setEnterGoal] = useState("");
    const GoalInputHandler = (enteredText) => {
        setEnterGoal(enteredText);
    };
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal"
                onChangeText={GoalInputHandler}
                value={enterGoal}
                style={styles.input}
            />
            <Button onPress={props.addGoal.bind(this, enterGoal)} title="Add" />
        </View>
    );
};
const styles = StyleSheet.create({
    input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
export default GoalInput;
