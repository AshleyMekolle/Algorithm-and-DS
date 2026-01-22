import { SafeAreaView, StyleSheet } from 'react-native';
import PlaygroundScreen from './src/screens/PlaygroundScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PlaygroundScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
