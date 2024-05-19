import React from 'react';
import {Dimensions, ImageBackground} from 'react-native';
import Animated from 'react-native-reanimated';
import {Box} from './box/box';
import {Text} from './text';

type WelcomeSlideProps = {
  title: string;
  image: string;
};

const WelcomeSlide = ({title, image}: WelcomeSlideProps) => {
  return (
    <Box
      as={Animated.View}
      flex={1}
      width={Dimensions.get('screen').width}
      backgroundColor="warm"
    >
      <ImageBackground source={image} style={{flex: 1}}>
        <Text color="blue" variant="heading-1" marginTop="space-40" marginBottom="space-12" marginHorizontal="space-12">
          {title}
        </Text>
        </ImageBackground>
    </Box>
  );
};

export default WelcomeSlide;
