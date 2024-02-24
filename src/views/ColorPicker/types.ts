import { StyleProp, ViewStyle } from 'react-native';
import { Binding } from '../../utils/binding';
import { Modifiers, NativeModifiersProp } from '../../utils/modifiers';

export type NativeColorPickerProps = {
  selection: string;
  onValueChange?: (e: {
    nativeEvent: {
      value: string;
    };
  }) => void;
  modifiers?: NativeModifiersProp;
  label?: string;
  supportsOpacity?: boolean;
  style?: StyleProp<ViewStyle>;
};

export type ColorPickerProps = {
  selection: string | Binding<string>;
  onChange?: (color: string) => void;
  label?: string;
  supportsOpacity?: boolean;
  style?: StyleProp<ViewStyle>;
} & Modifiers;
