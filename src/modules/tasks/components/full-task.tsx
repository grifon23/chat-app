import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

export const FullTask = () => {
  return (
    <SafeAreaView>
      <Text>Hello Eduard</Text>
      {/* <Animated.View /> */}
      {/* <Button onPress={() => (offset.value = Math.random())} title="Move" /> */}
    </SafeAreaView>
  );
};
