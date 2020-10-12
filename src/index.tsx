import { NativeModules } from 'react-native';

type ColorPickerIosType = {
  multiply(a: number, b: number): Promise<number>;
};

const { ColorPickerIos } = NativeModules;

export default ColorPickerIos as ColorPickerIosType;
