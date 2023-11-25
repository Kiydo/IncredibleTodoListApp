import React, { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoList from './src/components/ToDoList';
import ToDoForm from './src/components/ToDoForm';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/AboutScreen';

const Stack = createStackNavigator();

function App() {

  // const [tasks, setTasks] = useState([
  //   {text: 'Do laundry'},
  //   {text: 'Go to gym'},
  //   {text: 'Walk dog'}
  // ]);

  // const addTaskToList = (taskText) => {
  //   setTasks([...tasks, {text: taskText}]);
  // };

  return (
    // <SafeAreaView>
      // <div>
      //   <ToDoList tasks={tasks} />
      //   <ToDoForm onAddTask={addTaskToList} />
      // </div>
    // </SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;
