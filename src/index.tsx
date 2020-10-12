import { NativeModules } from 'react-native';

type ColorPickerOptions = {
  /**
   * whether alpha is supported or not.
   * if true, user can chose the opacity of the color
   * @default false
   */
  supportsAlpha?: boolean;
};

type ColorPickerMethods = {
  showColorPicker: (
    /**
     * options for color picker
     */
    options?: ColorPickerOptions,
    /**
     * callback method once color is chosen
     */
    callback?: (color: string) => void
  ) => void;
};

const { RNCColorPicker } = NativeModules as {
  RNCColorPicker: ColorPickerMethods;
};

const ColorPicker = {
  showColorPicker: (options?: ColorPickerOptions) => {
    RNCColorPicker.showColorPicker(options || {});
  },
};

export default ColorPicker;
