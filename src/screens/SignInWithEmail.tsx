import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {z} from "zod";
import {zodResolver} from '@hookform/resolvers/zod';
import {Button, LinkButton} from '../design-system/components/button';
import Layout from '../design-system/components/Layout';
import {Text} from '../design-system/components/text';
import TextInput from '../design-system/components/TextInput';
// import {useAuth} from '../context/auth';
import type {AuthStackScreenProps} from '../../src/routes/types/auth-stack';
import {useAppTheme} from '../theme';
import {Box} from '../design-system/components/box/box';
import { BASE_URL } from '../utils/constants';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormValues = z.infer<typeof schema>;

const SignInWithEmailScreen = ({ navigation }: AuthStackScreenProps<'SignInWithEmail'>) => {
  const theme = useAppTheme();

  const {control, handleSubmit, formState: {errors}} = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  });


  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // Mock Login user
    const response = await fetch(BASE_URL + "login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email: data.email, password: data.password}),
    }).then(response => response.json()).then(data => console.log("returend data", data));
  };

  return (
    <>
        <Layout>
            <View style={styles.inputContainer}>
                <TextInput
                  control={control}
                  label="Email addresss"
                  placeholder="Email address"
                  error={errors.email?.message}
                  name="email"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                />
                <TextInput
                  control={control}
                  label="Password"
                  placeholder="Password"
                  error={errors.password?.message}
                  name="password"
                  textContentType="password"
                  secureTextEntry
                />
                <LinkButton
                  title="Log in as a guest instead"
                //   onPress={() => navigation.navigate('SignInWithPhone')}
                />
                <Button
                  marginTop="space-32"
                  title="Continue"
                  onPress={handleSubmit(onSubmit)}
                  //   loading={
                    //     sendOtpToEmailMutation.isLoading ||
                    //     signInWithEmailMutation.isLoading
                  //   }
                />
            </View>
            <View style={styles.footer}>
                <Text style={{...styles.footerText, color: theme.colors.secondary}}>
                  Contact Support at hello@gomango.co
                </Text>
            </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer:{
    paddingHorizontal: 20,
  },
  text: {
    marginTop: 16,
    fontSize: 14,
  },
  phoneNumber: {
    fontWeight: '500',
  },
  resendContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  countdownText: {
    marginTop: 3,
    marginLeft: 8,
    fontSize: 14,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  footerText: {
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  helperText: {
    textAlign: 'center',
  },
});

export default SignInWithEmailScreen;
