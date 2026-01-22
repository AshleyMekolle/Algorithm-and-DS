import { View, Text, StyleSheet } from 'react-native';

export default function StackView() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Call Stack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
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
