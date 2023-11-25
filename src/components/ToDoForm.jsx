import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

function ToDoForm({ onAddTask }) {
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask) {
            onAddTask(newTask);
            setNewTask('');
        }
      };

    return (
        <SafeAreaView>
            <View style={styles.form}>
                <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                value={newTask}
                onChangeText={(text) => setNewTask(text)}
                />
                <Button title="Add" onPress={() => addTask(newTask)}/>
                {/* <ToDoList onAddTask={addTask}/> */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
