import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FEF5E7',
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImg: {
    flex: 1,
    height: Dimensions.get('window').height,
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
  },
  titleContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 100,
    marginTop: 60,
    padding: 20,
    width: '100%',
  },
  title: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    width: 240,
  },
  textTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemCounter: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    width: 100,
  },

  flatlistContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: '65%',
    justifyContent: 'space-between',
    width: '100%',
  },

  itemFlatlist: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 0.9,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    marginBottom: 8,
    width: '100%',
  },

  insertItemContainer: {
    alignItems: 'center',
    backgroundColor: '#e85128',
    borderRadius: 10,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    margin: 10,
  },
  textInputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    width: 200,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 40,
    padding: 10,
    width: 220,
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 5,
    width: 90,
  },
  textItem: {
    backgroundColor: 'transparent',
    color: '#e85128',
    fontSize: 18,
    justifyContent: 'center',
    margin: 8,
    width: 190,
  },
});

export default styles;
