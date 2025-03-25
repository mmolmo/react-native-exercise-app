import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 40
  },
  button: {
    margin: 10,
    padding: 10
  },
  greySubtitle: { 
    color: '#B0B0B0', 
    fontSize: 16, 
    marginTop: 8,
    textAlign: 'center'
  },
  exerciseCard: {
    flex: 1,
    flexDirection: 'row', 
    minHeight: 100,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd343',
    borderRadius: 8,
    backgroundColor: '#1D2FD4',
    overflow: 'hidden',
  },
  exerciseTouchableHighlight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  exerciseName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  exerciseScreenH1:{
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold'
  },
  exerciseTitleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  backButton: {
    marginRight: 10,
    backgroundColor: 'none',
  }
});

export default styles;
