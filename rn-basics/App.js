import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from './components/GoalItem'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)
  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentGoals) => {
      return [
        ...currentGoals,
        {
          id: new Date().getTime().toString(),
          value: enteredGoal,
        },
      ];
    });
    setIsAddMode(false)
  };
  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((currentGoal) => {
        return currentGoal.id !== goalId
      })
    })
  }
  const cancelAddGoalHandler = () => {
    setIsAddMode(false)
  }
  return (
    <View style={styles.screen}>
      <Button title='Add new goal' onPress={() => {
        setIsAddMode(true)
      }} />
      <GoalInput visible={isAddMode} onAddGoalHandler={addGoalHandler} cancelAddGoalHandler={cancelAddGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => {
          return item.id
        }}
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            <GoalItem 
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              text={itemData.item.value} 
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    // backgroundColor: "#ccc",
  }
});
