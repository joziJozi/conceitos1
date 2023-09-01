import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Objeto from './screens/Objeto';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="objeto" component={Objeto} options={{ title: "Objeto" }} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  card: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    marginBottom: 20,
  },

  titulo: {
    color: 'red',
    fontSize: 30,
    padding: 20,
    marginBottom: 20,
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 2,
    textAlign: 'center',
    backgroundColor: 'black'
  },

  paragrafo: {
    fontSize: 20,
  },


});
