import React from 'react';
import {forwardRef} from 'react';
import {Control, Controller} from 'react-hook-form';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {
  HelperText,
  IconButton,
  TextInput as RNPTextInput,
} from 'react-native-paper';
import Icon from '../../assets/icons/icon';
import {Box} from "../../design-system/components/box/box";
import {useTheme} from '../theme/theme';
import {fonts} from '../theme/fonts';
import {useAppTheme} from '../../theme';
// import useBottomSheetTextInput from 'src/hooks/useBottomSheetTextInput';


interface TextInputProps extends Omit<RNTextInputProps, 'onBlur' | 'onFocus'> {
  label: string;
  name: string;
  error?: string;
  placeholder?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  control: Control<any, any>;
  editable?: boolean;
  onPress?: Function;
  onFocus?: Function;
  onBlur?: Function;
  multiline?: boolean;
  numberOfLines?: number;
  secureTextEntry?: boolean;
  style?: TextStyle;
  containerStyle?: ViewStyle;
}

const TextInput = ({
  error,
  onBlur: pureOnBlur,
  onFocus,
  ...props
}: TextInputProps) => {
  const theme = useAppTheme();

  return (
    <Box style={[styles.textInputContainer, props.containerStyle]}>
      <Controller
        control={props.control}
        render={({field: {onChange, onBlur, value}}) => (
          <RNPTextInput
            mode="outlined"
            value={value}
            onChangeText={onChange}
            onBlur={() => (pureOnBlur ? pureOnBlur(onBlur) : onBlur())}
            left={props.left}
            right={props.right}
            outlineColor={theme.colors.lightSilver}
            textColor={theme.colors.primary}
            error={!!error}
            onFocus={() => onFocus?.()}
            autoCapitalize="none"
            editable={props?.editable}
            onPressIn={() => props.onPress?.()}
            {...props}
          />
        )}
        name={props.name}
      />
      {error ? <HelperText type="error">{error}</HelperText> : null}
    </Box>
  );
};

// export const ModalTextInput = ({
//   onBlur: pureOnBlur,
//   onFocus,
//   ...props
// }: TextInputProps) => {
//   // https://github.com/gorhom/react-native-bottom-sheet/blob/a0bb98a77686687e643514d131b74f421b5d4aee/src/components/bottomSheetTextInput/BottomSheetTextInput.tsx
//   const {handleOnBlur, handleOnFocus} = useBottomSheetTextInput({
//     onBlur: pureOnBlur,
//     onFocus,
//   });

//   return <TextInput onBlur={handleOnBlur} onFocus={handleOnFocus} {...props} />;
// };

const styles = StyleSheet.create({
  textInputContainer: {
    marginVertical: 8,
  },
});

interface SearchTextInputProps extends RNTextInputProps {
  onPress?: Noop;
}

export const SearchTextInput = forwardRef(function SearchTextInput(
  {style, onPress, ...props}: SearchTextInputProps,
  ref: React.ForwardedRef<RNTextInput>,
) {
  const {colors} = useTheme();
  return (
    <Box borderRadius={22} alignItems="center" flexDirection="row">
      <Pressable onPress={onPress}>
        <Icon name="search" size={16} color={colors.taupe} style={ICON_STYLE} />
      </Pressable>

      <RNTextInput
        ref={ref}
        placeholderTextColor={colors.taupe}
        style={[SEARCH_STYLE, style]}
        {...props}
      />
      <Pressable onPress={onPress}>
        <IconButton
          onPress={() => {
            props?.onChangeText?.('');
            // @ts-expect-error ref doesn't contain focus but it works
            ref?.current?.focus();
          }}
          icon="close"
          size={20}
          iconColor={colors.primary}
        />
      </Pressable>
    </Box>
  );
});
export default TextInput;

const SEARCH_STYLE: TextStyle = {
  flex: 1,
  height: 44,
  paddingVertical: 12,
  paddingRight: 16,
  marginLeft: 40,
  // font
  fontSize: 14,
  fontWeight: '500',
  fontFamily: fonts.family.ibmBold,
  lineHeight: 20,
};

const ICON_STYLE: ViewStyle = {
  zIndex: 1,
  left: 16,
};
