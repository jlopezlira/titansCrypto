import { TouchableOpacity, StyleSheet, View } from 'react-native';

import { theme } from '../../theme';

interface StepperProps {
  steps: number;
  currentStep: number;
  onPress: (step: number) => void;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, onPress }) => {
  const renderSteps = () => {
    const stepArray = [];
    for (let i = 0; i < steps; i++) {
      stepArray.push(i);
    }
    return stepArray.map((step) => {
      const isActive = step === currentStep;
      return (
        <TouchableOpacity
          key={`step${step}`}
          style={[styles.step, isActive && styles.activeStep]}
        />
      );
    });
  };

  return <View style={styles.container}>{renderSteps()}</View>;
};

export default Stepper;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: theme.padding.lg,
  },
  step: {
    backgroundColor: theme.colors.gray,
    borderRadius: theme.borderRadius.full,
    height: 10,
    margin: 5,
    width: 10,
  },
  activeStep: {
    backgroundColor: theme.colors.green,
  },
});
