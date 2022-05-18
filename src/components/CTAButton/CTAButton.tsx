import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import { theme } from '../../theme';

interface CTAButtonProps {
  isDisabled?: boolean;
  onPress: () => void;
  title: string;
  primary?: boolean;
  secondary?: boolean;
  id: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  id,
  isDisabled,
  onPress,
  primary,
  secondary,
  title,
}) => {
  const buttonStyles = [
    styles.container,
    primary && styles.primary,
    secondary && styles.secondary,
    isDisabled && styles.disabled,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={isDisabled}
      testID={`cta-button-${id}`}
    >
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CTAButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.padding.lg,
    borderRadius: theme.borderRadius.lg,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: theme.colors.green,
    shadowColor: theme.colors.green,
  },
  secondary: {
    backgroundColor: theme.colors.red,
    shadowColor: theme.colors.red,
  },
  disabled: {
    backgroundColor: theme.colors.gray,
    shadowColor: theme.colors.gray,
  },
  label: {
    color: theme.colors.dark,
    fontSize: theme.fontSizes.cta,
    fontWeight: 'bold',
  },
});
