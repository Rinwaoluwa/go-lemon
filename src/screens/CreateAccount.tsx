import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SubmitHandler, useForm} from 'react-hook-form';
// import {yupResolver} from '@hookform/resolvers/yup';
import {Button} from '../design-system/components/button';
import Layout from '../design-system/components/Layout';
import TextInput from '../design-system/components/TextInput';
// import {useAuth} from '../context/auth';
import type {AuthStackScreenProps} from '../routes/types/auth-stack';
import {Box} from '../design-system/components/box/box';
import {Text} from '../design-system/components/text';
import { BASE_URL } from '../utils/constants';
// import {createAccountSchema} from '../utils/validator';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};
const CreateAccountScreen = ({
  route,
}: AuthStackScreenProps<'CreateAccount'>) => {
//   const navigation = useNavigation();
//   const {storeAccessToken, isGuest, setIsGuest} = useAuth();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    mode: 'onSubmit',
    // resolver: yupResolver(createAccountSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async data => {
    // Create a New uer
    const resquest = await fetch(BASE_URL + "users", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email: data.email, job: "teacher"}),
    }).then(response => response.json()).then(data => console.log("user created", data));

    // Mock Register user
    const response = await fetch(BASE_URL + "register", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email: "eve.holt@reqres.in", password: "pistol"}),
    }).then(response => response.json()).then(data => console.log("data", data));
  };

  return (
    <Layout>
        <View style={styles.inputContainer}>
            <TextInput
                control={control}
                label="First name"
                error={errors.firstName?.message}
                placeholder="First name"
                name="firstName"
                autoComplete="name"
                />
            <TextInput
                control={control}
                label="Last name"
                error={errors.lastName?.message}
                placeholder="Last name"
                name="lastName"
                autoComplete="name-family"
                />
            <TextInput
                control={control}
                label="Email address"
                error={errors.email?.message}
                placeholder="Email address"
                name="email"
                keyboardType="email-address"
                autoComplete="email"
                />
        </View>
      <View style={styles.footer}>
        <Button
          title="Create Account"
          onPress={handleSubmit(onSubmit)}
        //   loading={updateUserMutation.isLoading || addAddressMutation.isLoading}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  inputContainer:{
    paddingHorizontal: 20,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    paddingHorizontal: 20,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 8,
  },
});

export default CreateAccountScreen;
