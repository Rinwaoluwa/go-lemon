import {StyleSheet} from "react-native";
import Animated, {useAnimatedScrollHandler, useSharedValue} from 'react-native-reanimated';
import WelcomeSlide from "../../design-system/components/WelcomeSlide";
import {Box} from "../../design-system/components/box/box";
import {Pagination} from "./components";
import {IMAGES, TITLES} from './constants';
import type {AuthStackScreenProps} from '../../../src/routes/types/auth-stack';
import { Button, LinkButton } from "../../design-system/components/button";

function WelcomeScreen({ navigation }: AuthStackScreenProps<'Welcome'>) {
    const scrollX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollX.value = event.contentOffset.x;
        }
    });

    return (
        <Box flex={1}>
            <Box style={styles.container}>
                <Box flex={1}>
                    <Animated.ScrollView
                        horizontal={true}
                        pagingEnabled={true}
                        scrollEventThrottle={16}
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        onScroll={scrollHandler}
                    >
                        {TITLES.map((item, index) => (
                          <WelcomeSlide title={item} image={IMAGES[index]} key={item} />
                        ))}
                    </Animated.ScrollView>
                    <Pagination scrollX={scrollX} />
                </Box>
            </Box>
            <Box
                paddingHorizontal="space-8"
                paddingVertical="space-24"
                borderTopEndRadius="space-8"
                borderTopLeftRadius="space-8"
                marginBottom="space-32">
                <Button
                    title="Sign In"
                    onPress={() => navigation.navigate('SignInWithEmail')}
                />
                <Button
                    marginBottom="space-32"
                    title="Create an Account"
                    variant="secondary"
                    onPress={() => navigation.navigate('CreateAccount')}
                    // loading={signInGuestUserMutation.isLoading}
                    // disabled={signInGuestUserMutation.isLoading}
                />
            </Box>
        </Box>
    )
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
    },
    linkButton: {
      alignSelf: 'center',
    },
});

export default WelcomeScreen;