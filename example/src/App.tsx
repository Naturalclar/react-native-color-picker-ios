import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import ColorPicker from 'react-native-color-picker-ios';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ColorPicker />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
