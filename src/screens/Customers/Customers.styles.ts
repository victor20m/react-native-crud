import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    height: '100%',
  },
  item: {
    flex: 1,
  },
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
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBar: {
    width: '80%',
    marginRight: 30,
  },
});
