import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Defina o tipo para os passos
interface Step {
  label: string;
  status: 'pending' | 'completed' | 'current';
}

interface OrderProgressProps {
  steps: Step[];
  currentStepIndex: number;
}

// Componente OrderProgress
const OrderProgress: React.FC<OrderProgressProps> = ({ steps, currentStepIndex }) => {
  return (
    <View style={styles.container}>
      <View style={styles.stepContainer}>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepWrapper}>
            <View
              style={[
                styles.step,
                {
                  backgroundColor: index < currentStepIndex
                    ? '#0AC266' // Completed step color
                    : index === currentStepIndex
                    ? '#FFB74D' // Current step color
                    : '#E0E0E0', // Pending step color
                },
              ]}
            >
              <Text
                style={[
                  styles.stepText,
                  {
                    color: index <= currentStepIndex ? '#FFFFFF' : '#000000',
                  },
                ]}
              >
                {index + 1}
              </Text>
            </View>
            <Text style={styles.stepLabel}>{step.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

// Estilos para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  step: {
    width: 25,
    height: 25,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  stepText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepLabel: {
    fontSize: 12,
    marginTop: 0,
  },
});

export default OrderProgress;
