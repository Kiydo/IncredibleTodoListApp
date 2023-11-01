import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
} from 'react-native';

// import ToDoForm from './ToDoForm';

function ToDoList({ tasks}) {
    
    return (
    <SafeAreaView>
        <ScrollView>
            {tasks.map((task, index) => (
                <View style={styles.task} key={index}>
                    <Text style={styles.taskText}>{task.text}</Text>
                </View>
            ))}
        </ScrollView>
        {/* <ToDoForm onAddTask={addTaskToList}/> */}
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
