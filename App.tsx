import { NavigationContainer } from '@react-navigation/native';
import { Alert } from 'react-native';

import CTAButton from './src/components/CTAButton';
import Stepper from './src/components/Stepper';
import Layout from './src/layout';

export default function App() {
  return (
    <NavigationContainer>
      <Layout>
        <CTAButton id="home" primary title="CTA" onPress={() => Alert.alert('Pressed')} />
        <Stepper steps={3} currentStep={0} onPress={(step) => Alert.alert(`Pressed ${step}`)} />
      </Layout>
    </NavigationContainer>
  );
}
