import { View, Text, StyleSheet } from 'react-native';
import { useExecutionStore } from '../store/executionStore';

export default function Visualizer() {
  const code = useExecutionStore((state) => state.code);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Code length: {code.length} characters
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#020617',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    color: '#94a3b8',
  },
});
