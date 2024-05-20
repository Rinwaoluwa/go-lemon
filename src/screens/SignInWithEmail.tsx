import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
// import {yupResolver} from '@hookform/resolvers/yup';
import {Button, LinkButton} from '../design-system/components/button';
import Layout from '../design-system/components/Layout';
import {Text} from '../design-system/components/text';
import TextInput from '../design-system/components/TextInput';
// import {useAuth} from '../context/auth';
import type {AuthStackScreenProps} from '../../src/routes/types/auth-stack';
import {useAppTheme} from '../theme';
import {Box} from '../design-system/components/box/box';
// import {signInWithEmailSchema} from '../utils/validator';

type FormValues = {
  email: '';
};

const SignInWithEmailScreen = ({}: AuthStackScreenProps<'SignInWithEmail'>) => {
//   const navigation = useNavigation();
  const theme = useAppTheme();
//   const {storeAccessToken, isGuest, setIsGuest} = useAuth();

  const {control, handleSubmit, formState: {errors}, getValues, } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    mode: 'onSubmit',
    // resolver: yupResolver(signInWithEmailSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    // if (!showPinInput) {
    //   sendOtpToEmailMutation.mutate(data.email, {
    //     onSuccess: res => {
    //       if (res.otpId) {
    //         setOtpId(res.otpId);
    //         setShowPinInput(true);
    //         resetTimeLeft(120);
    //       }
    //     },
    //   });
    // }
  };

  return (
    <>
        <Layout>
            <Box backgroundColor="warm" height={100} paddingTop={30} paddingHorizontal={20}>
                <Text color="blue" variant="heading-1">Sign In.</Text>
            </Box>
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
                    // error={errors.password?.message}
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
                    //   onPress={handleSubmit(onSubmit)}
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
