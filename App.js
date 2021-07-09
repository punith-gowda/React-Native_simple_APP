// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setAddMode] = useState(false);

  const addGoalHandler = (enterGoal) => {
    if (enterGoal.length === 0) {
      return;
    }
    setCourseGoals((courseGoals) => [
      ...courseGoals,
      { value: enterGoal, key: Math.random().toString() },
    ]);
    setAddMode(false);
  };

  const RemoveGoalHandler = (GoalId) => {
    setCourseGoals((courseGoals) => {
      return courseGoals.filter((goal) => goal.key !== GoalId);
    });
  };
  return (
    <View style={styles.screen}>
      <Button title="Add Goal" onPress={() => setAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        addGoal={addGoalHandler}
        onCancel={() => setAddMode(false)}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            onDelete={RemoveGoalHandler.bind(this, itemData.item.key)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
