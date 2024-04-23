import { Text, StyleSheet } from 'react-native';

interface TitleComponentProps {
  title: string;
}

export default function TitleComponent({ title }: TitleComponentProps) {
  return (
    <Text style={styles.title}>
      {title}
    </Text>
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
