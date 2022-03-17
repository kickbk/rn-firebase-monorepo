import auth from '@react-native-firebase/auth';
import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>PLAYGROUND</Text>
      <Button
        title="AUTH GET SETTINGS"
        onPress={() => {
          console.log(auth().settings);
        }}
      />
      <Button
        title="AUTH"
        onPress={() => {
          auth()
            .verifyPhoneNumber('+15555555555')
            .on('state_changed', (phoneAuthSnapshot) => {
              console.log('Snapshot state: ', phoneAuthSnapshot.state);
            })
            .catch((error) => console.log('error', error));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    marginTop: 10,
  },
});
