import * as React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import ColorPicker from 'react-native-color-picker-ios';

export default function App() {
  console.warn(ColorPicker);
  const handlePress = () => {
    ColorPicker.showColorPicker();
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text>Test</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
