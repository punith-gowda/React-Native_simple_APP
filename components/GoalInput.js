import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
    const [enterGoal, setEnterGoal] = useState("");
    const GoalInputHandler = (enteredText) => {
        setEnterGoal(enteredText);
    };
    const GoaladdHandler = () => {
        props.addGoal(enterGoal);
        setEnterGoal("");
    };
    const CancelGoalAddHandler = () => {
        setEnterGoal("");
        props.onCancel();
    };
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    onChangeText={GoalInputHandler}
                    value={enterGoal}
                    style={styles.input}
                />
                <View style={styles.ActionButtons}>
                    <View style={styles.Button}>
                        <Button title="Cancel" color="red" onPress={CancelGoalAddHandler} />
                    </View>
                    <View style={styles.Button}>
                        <Button onPress={GoaladdHandler} title="Add" />
                    </View>
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    input: {
        width: "80%",
        borderColor: "black",
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
    },
    inputContainer: {
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
    },
    ActionButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "50%",
    },
    Button: {
        width: "40%",
    },
});
export default GoalInput;
