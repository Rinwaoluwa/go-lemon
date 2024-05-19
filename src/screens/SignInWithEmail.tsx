import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button, LinkButton} from '../../design-system/components/button';
import Layout from '../components/Layout';
import Text from '../components/Text';
import TextInput from '../components/TextInput';
// import {useAuth} from '../context/auth';
import type {AuthStackScreenProps} from '../../../src/routes/types/auth-stack';
import {useAppTheme} from '../theme';
// import {signInWithEmailSchema} from '../utils/validator';

type FormValues = {
  email: '';
};

const SignInWithEmailScreen = ({}: AuthStackScreenProps<'SignInWithEmail'>) => {
  const navigation = useNavigation();
  const theme = useAppTheme();
  const {storeAccessToken, isGuest, setIsGuest} = useAuth();

  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    mode: 'onSubmit',
    resolver: yupResolver(signInWithEmailSchema),
  });

  useEffect(() => {
    if (pinInputValue.length === 4) {
      signInWithEmailMutation.mutate(
        {
          email: getValues().email,
          otp: Number(pinInputValue),
          otpId,
        },
        {
          onSuccess: responseData => {
            setPinInputValue('');
            if (responseData) {
              storeAccessToken(responseData);
              if (isGuest) {
                setIsGuest(false);
                navigation.navigate('Home', {screen: 'Lists'});
              }
            }
          },
          onError: () => {
            setPinInputValue('');
          },
        },
      );
    }
    // TODO: fix this
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pinInputValue]);

  const onSubmit: SubmitHandler<FormValues> = data => {
    if (!showPinInput) {
      sendOtpToEmailMutation.mutate(data.email, {
        onSuccess: res => {
          if (res.otpId) {
            setOtpId(res.otpId);
            setShowPinInput(true);
            resetTimeLeft(120);
          }
        },
      });
    }
  };

  return (
    <>
      <Layout>
        {!showPinInput && (
          <>
            <TextInput
              control={control}
              label="Email addresss"
              placeholder="Email address"
              error={errors.email?.message}
              name="email"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
            <LinkButton
              title="Log in with Phone number instead"
              onPress={() => navigation.navigate('SignInWithPhone')}
            />
          </>
        )}

        {showPinInput && (
          <>
            <Text style={styles.text}>
              Enter the 4-digit code sent to {getValues().email} to log in
            </Text>
            <PinInput value={pinInputValue} onChange={setPinInputValue} />

            <View style={styles.resendContainer}>
              {timeLeft <= 0 ? (
                <LinkButton
                  title="Resend"
                  onPress={() => {
                    resetTimeLeft(120);
                    sendOtpToEmailMutation.mutate(getValues().email);
                  }}
                />
              ) : (
                <Text
                  style={{
                    ...styles.countdownText,
                    color: theme.colors.secondary,
                  }}>
                  {formattedTime}
                </Text>
              )}
            </View>
          </>
        )}

        <Button
          marginTop="space-32"
          title="Continue"
          onPress={handleSubmit(onSubmit)}
          loading={
            sendOtpToEmailMutation.isLoading ||
            signInWithEmailMutation.isLoading
          }
        />
        <View style={styles.footer}>
          <Text style={{...styles.footerText, color: theme.colors.secondary}}>
            Contact Support at hello@golemon.co
          </Text>
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
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
