import { Text, StyleSheet } from 'react-native';

interface StyledButtonProps {
  title: string;
}

export default function Title({ title }: StyledButtonProps) {
  return (
    <>
      <Text style={styles.title}>
        {title}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25, 
    marginLeft: '5%',
    color: '#7A5656',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 30,
  },
});
