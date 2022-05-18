import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Text, Button } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function App() {
  const SharedValues = () => {
    const randomWidth = useSharedValue(10);

    const config = {
      duration: 500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    };

    const myStyle = useAnimatedStyle(() => {
      return {
        width: withTiming(randomWidth.value, config),
        height: 20,
        backgroundColor: 'green',
      };
    });

    return (
      <>
        <Text>Shared Values</Text>
        <Animated.View style={myStyle} />
        <Button title="Change" onPress={() => (randomWidth.value = Math.random() * 350)} />
      </>
    );
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <SharedValues />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
