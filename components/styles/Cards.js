import { StyleSheet } from 'react-native';
import { width, height } from '../../constants/Layout';

export default cardstyles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 40,
    borderRadius: 10,
    backgroundColor: '#F8F8F8',
  },
  progress: {
    textAlign: 'center',
    fontSize: 22,
    color: '#707070',
  },
  container: {
    padding: 10,
  },
  progressbar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  date: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  datetext: {
    color: '#FFFFFF',
    backgroundColor: '#989898',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 20,
  },
  funded: {
    fontFamily: 'roboto-light',
    color: '#707070',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  createdby: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  }
});
