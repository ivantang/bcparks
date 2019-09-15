import { StyleSheet } from 'react-native';
import { width, height } from '../../constants/Layout';

export default titlestyles = StyleSheet.create({
  info: {
    flexDirection: 'column',
  },
  location: {
    flexDirection: 'row',
    flex: 8,
    paddingTop: 10,
  },
  locationtext: {
    fontFamily: 'roboto-bold',
    fontSize: 13,
    color: '#969696',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'roboto-regular',
    fontSize: 20,
    color: '#434343',
    textAlign: 'left',
    paddingBottom: 3,
  },
  points: {
    fontFamily: 'roboto-regular',
    fontSize: 20,
    textShadowColor: '#000000',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 1,
    color: '#FFFFFF',
  },
  pointbox: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#FFD238',
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  }
});
