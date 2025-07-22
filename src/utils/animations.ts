import { Easing, useSharedValue, withTiming } from 'react-native-reanimated';

export const fadeIn = () => {
  const opacity = useSharedValue(0);
  opacity.value = withTiming(1, {
    duration: 300,
    easing: Easing.out(Easing.ease),
  });
  return opacity;
};

export const fadeOut = () => {
  const opacity = useSharedValue(1);
  opacity.value = withTiming(0, {
    duration: 300,
    easing: Easing.in(Easing.ease),
  });
  return opacity;
};

export const scaleUp = (initial = 0.8) => {
  const scale = useSharedValue(initial);
  scale.value = withTiming(1, {
    duration: 200,
    easing: Easing.out(Easing.ease),
  });
  return scale;
};