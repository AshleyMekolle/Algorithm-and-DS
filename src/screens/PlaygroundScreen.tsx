import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CodeEditor from '../components/CodeEditor';
import Visualizer from '../components/Visualizer';
import StackView from '../components/StackView';
import Controls from '../components/Controls';
import { useExecutionStore } from '../store/executionStore';
import { sampleMergeSort } from '../types/sampleCode';

export default function PlaygroundScreen() {
  const setCode = useExecutionStore((state) => state.setCode);

  useEffect(() => {
    setCode(sampleMergeSort);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Algorithm Visualizer</Text>

      <CodeEditor />
      <Visualizer />
      <StackView />
      <Controls />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#0f172a',
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    color: '#e5e7eb',
    marginBottom: 12,
  },
});
