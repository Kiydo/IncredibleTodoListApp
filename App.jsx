import React, { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';

import ToDoList from './src/ToDoList';
import ToDoForm from './src/ToDoForm';

function App() {

  const [tasks, setTasks] = useState([
    {text: 'Do laundry'},
    {text: 'Go to gym'},
    {text: 'Walk dog'}
]);

const addTaskToList = (taskText) => {
   setTasks([...tasks, {text: taskText}]);
};

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm onAddTask={addTaskToList}/>
    </SafeAreaView>
  );
}




export default App;
