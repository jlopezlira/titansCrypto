import { SafeAreaView, StyleSheet } from 'react-native';

import { theme } from '../theme';
import { LayoutProps } from './Layout.types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark,
    justifyContent: 'center',
  },
});
