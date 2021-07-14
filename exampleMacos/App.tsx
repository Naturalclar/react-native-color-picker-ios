import * as React from 'react';
import { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import ColorPicker from 'react-native-color-picker-ios';

export default function App() {
  const [selectedColor, setSelectedColor] = useState('black');
  const handlePress = () => {
    ColorPicker.showColorPicker(
      { supportsAlpha: true, initialColor: selectedColor },
      (color) => {
        setSelectedColor(color);
      }
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.textContainer}>
        <Text>Open Color Picker</Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text>Currently selected color:</Text>
      </View>
      <View
        style={[
          styles.selectedColorContainer,
          {
            backgroundColor: selectedColor,
          },
        ]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 8,
  },
  selectedColorContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
});
