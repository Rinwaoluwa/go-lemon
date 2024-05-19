import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamsList = {
  Welcome: undefined;
  PhoneInput: undefined;
  SignInWithEmail: undefined;
  SignInWithPhone: undefined;
//   AddDeliveryAddress: AddDeliveryAddressParams;
//   CreateAccount: AuthTokens;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamsList> =
  NativeStackScreenProps<AuthStackParamsList, T>;
