import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [luku1, setLuku1] = useState(0.0);
  const [luku2, setLuku2] = useState(0.0);
  const [kertoja, setKertoja] = useState();

  const plus = () => {
    setKertoja(parseInt(luku1) + parseInt(luku2));
  }
  const minus = () => {
    setKertoja(luku1 - luku2);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputV}>
        <Text>RESULT:  {kertoja}</Text>

        <TextInput style={styles.input}
        onChangeText={luku1 => setLuku1(luku1)}
        value={luku1}
        />
        <TextInput style={styles.input}
        onChangeText={luku2 => setLuku2(luku2)}
        value= {luku2}
        />
      </View>

      <View style= {styles.buttonsV}>
        <Button
        title='+'
        onPress={plus}
        />
        <Button
        title='-'
        onPress={minus} />
      
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputV: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  buttonsV : {
    flex:1,
    justifyContent: 'center',
    flexDirection: 'row'
  },

  input : {
    borderColor: 'black',
    borderWidth: 5,
    width: 200
  }
});
