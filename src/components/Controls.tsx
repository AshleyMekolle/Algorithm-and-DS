import { View, Text, StyleSheet } from 'react-native';

export default function Controls() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Run • Step • Reset</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    borderRadius: 8,
    backgroundColor: '#020617',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#94a3b8',
  },
});
