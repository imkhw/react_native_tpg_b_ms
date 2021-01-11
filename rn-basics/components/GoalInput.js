import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'

const GoalInput = ({visible, onAddGoalHandler, cancelAddGoalHandler}) => {
    const [enteredGoal, setEnteredGoal] = useState("");
    const enteredGoalHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                placeholder="Course goal"
                style={styles.input}
                value={enteredGoal}
                onChangeText={enteredGoalHandler}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Cancel" color='red'
                        onPress={cancelAddGoalHandler}
                    />
                    <Button title="Add" onPress={() => {
                        onAddGoalHandler(enteredGoal)
                        setEnteredGoal('')
                    }} />
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    },
    input: {
    width: "80%",
    borderBottomColor: "red",
    borderBottomWidth: 1,
    },
    buttonContainer: {
        flexDirection: 'row'
    }
});
