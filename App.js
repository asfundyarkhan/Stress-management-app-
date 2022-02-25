
import Start from './screens/start';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import Register from './screens/register';
import Tabs from './components/nav/tabs';



const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName='Start' screenOptions={{headerShown:false}}>
      <Stack.Screen name='Start' component={Start} />
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Home2' component={Tabs} />
      
     </Stack.Navigator>
   </NavigationContainer>
  );
}

