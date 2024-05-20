import React, { useState } from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SubmitHandler, useForm} from 'react-hook-form';
import {z} from 'zod';
import {BASE_URL} from '../utils/constants';
import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '../design-system/components/button';
import Layout from '../design-system/components/Layout';
import TextInput from '../design-system/components/TextInput';
import type {AuthStackScreenProps} from '../routes/types/auth-stack';
import {useAppDispatch} from '../utils/redux/hooks';
import {updateProfile} from '../utils/redux/slices/profile';
import {setIsAuthenticated} from '../utils/redux/slices/auth-tracker';
import { storage } from '../utils/localStorage';

const schema = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});


type FormValues = z.infer<typeof schema>;
const CreateAccountScreen = ({ navigation }: AuthStackScreenProps<'CreateAccount'>) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: "",
      confirmPassword: "",
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async formData => {
    console.log(formData)
    // Mock Register user
    setIsLoading(true);
    const response = await fetch(BASE_URL + "register", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email: "eve.holt@reqres.in", password: "pistol"}),
    }).then(response => response.json()).then(data => storage.set("token", data.token));
    dispatch(updateProfile(formData)); // because we are mocikng registering a user we store
    //  the user data on device to simulate fetching data from backend;
    storage.set("firstName", formData.firstName);
    storage.set("lastName", formData.lastName);
    storage.set("email", formData.email);
    storage.set("password", formData.password);
    dispatch(setIsAuthenticated(true));
    setIsLoading(false);
  };

  return (
    <Layout>
      <ScrollView>
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
              <TextInput
                  control={control}
                  label="Password"
                  error={errors.password?.message}
                  placeholder="Password"
                  name="password"
                  secureTextEntry
                  />
              <TextInput
                  control={control}
                  label="Confirm Password"
                  error={errors.confirmPassword?.message}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  secureTextEntry
                />
        </View>
        <View style={styles.footer}>
          <Button
            title="Create Account"
            onPress={handleSubmit(onSubmit)}
            loading={isLoading}
            disabled={isLoading}
          />
        </View>
      </ScrollView>
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
