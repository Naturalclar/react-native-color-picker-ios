import { NativeModules, processColor } from 'react-native';

/**
 * Type of option used in JS side
 */
type ColorPickerInputOptions = {
  /**
   * whether alpha is supported or not.
   * if true, user can chose the opacity of the color
   * @default false
   */
  supportsAlpha?: boolean;
  /**
   * initial color displayed on the picker
   */
  initialColor?: string;
};

/**
 * Actual options to be passed to Native Module
 */
type ColorPickerNativeOptions = {
  supportsAlpha?: boolean;
  initialColor?: number;
};

type ColorPickerMethods = {
  showColorPicker: (
    /**
     * options for color picker
     */
    options?: ColorPickerNativeOptions,
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
  showColorPicker: (
    options?: ColorPickerInputOptions,
    callback?: (color: string) => void
  ) => {
    const convertedOptions = {
      ...options,
      initialColor: options?.initialColor
        ? processColor(options.initialColor)
        : undefined,
    };

    RNCColorPicker.showColorPicker(
      convertedOptions,
      callback ? callback : () => {}
    );
  },
};

export default ColorPicker;
