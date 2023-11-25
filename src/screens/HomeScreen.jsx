import React from 'react';
import { View, Text, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../src/components/ToDoList';
import ToDoForm from '../src/components/ToDoForm';


const HomeScreen = ({ navigation }) => {


    const [tasks, setTasks] = useState([
        {text: 'Do laundry'},
        {text: 'Go to gym'},
        {text: 'Walk dog'}
      ]);
    
      const addTaskToList = (taskText) => {
        setTasks([...tasks, {text: taskText}]);
      };

    return (
        <MainLayout>
            <ToDoList tasks={tasks} />
            <ToDoForm onAddTask={addTaskToList} />
            <View>
            <Text>To-Do List</Text>
            <Button
                title="Go to About Screen"
                onPress={() => navigation.navigate('About')}
            />
            </View>
        </MainLayout>  
    );
};

export default HomeScreen;