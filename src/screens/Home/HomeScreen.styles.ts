import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  card: {width: '100%', height: 'auto', padding: 10},
  userWelcome: {fontWeight: 'bold', fontSize: 20},
  layout: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
    marginBottom: 30,
    justifyContent: 'center',
    gap: 10,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#6B95BC',
    fontSize: 20,
  },
  icon: {
    color: '#0f92e4',
  },
});
