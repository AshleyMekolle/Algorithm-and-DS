import { View, TextInput, StyleSheet } from 'react-native';
import { useExecutionStore } from '../store/executionStore';

export default function CodeEditor() {
  const code = useExecutionStore((state) => state.code);
  const setCode = useExecutionStore((state) => state.setCode);

  return (
    <View style={styles.container}>
      <TextInput
        value={code}
        onChangeText={setCode}
        multiline
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Write your algorithm here..."
        placeholderTextColor="#64748b"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 220,
    borderRadius: 8,
    backgroundColor: '#020617',
    padding: 12,
    marginBottom: 12,
  },
  input: {
    color: '#e5e7eb',
    fontSize: 14,
    fontFamily: 'monospace',
  },
});
