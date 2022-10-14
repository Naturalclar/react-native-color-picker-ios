import * as React from 'react';
import { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  useColorScheme,
} from 'react-native';
import ColorPicker from 'react-native-color-picker-ios';

export default function App() {
  const colorScheme = useColorScheme();

  const [selectedColor, setSelectedColor] = useState(
    colorScheme === 'dark' ? '#ddd' : '#000'
  );
  const handlePress = () => {
    ColorPicker.showColorPicker(
      { supportsAlpha: true, initialColor: selectedColor },
      (color) => {
        setSelectedColor(color);
      }
    );
  };

  const textStyle = React.useMemo(
    () => ({
      color: colorScheme === 'dark' ? '#ddd' : '#000',
    }),
    [colorScheme]
  );
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.textContainer}>
        <Text style={textStyle}>Open Color Picker</Text>
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
