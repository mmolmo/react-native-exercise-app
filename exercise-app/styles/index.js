import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  ExerciseScreenContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
  ExerciseOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adds a dark overlay
    paddingHorizontal: 16,
    paddingTop: 40,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  ExerciseContainer: {
    flex: 1, // Allows content to be centered in the middle
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    padding: 10
  },
  exerciseBgImage: {
    flex: 1,
    justifyContent: 'center',
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
    borderRadius: 8,
    backgroundColor: '#000',
    overflow: 'hidden',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardGreySubtitle: { 
    color: '#f2f2f2c2', 
    fontSize: 16, 
    marginTop: 8,
    textAlign: 'left'
  },
  exerciseCardButton: {
    backgroundColor: 'tomato',
    borderRadius: 50,
    padding: 5,
    width: 50,
    height: 50,
    margin: 5,
  },
  exerciseCardIcon: {
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
    textAlign: 'center',
    justifyContent: 'space-between',
    padding: 10,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    marginRight: 10,
    backgroundColor: 'none',
  },
  recButton: {
    marginRight: 10,
    backgroundColor: 'none',
    borderRadius: 10,
    color: '#fff',
    borderWidth: 2,
  },
  exerciseFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  exerciseTextBold: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    padding: 10,
    color: '#fff',
    fontSize: 75,
    fontWeight: 'bold',
  },
  exerciseDurTextBold: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    padding: 10,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
  },
  exerciseButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  repAddCountButton: {
    backgroundColor: 'tomato',
    borderRadius: 50,
    padding: 10,
    width: 75,
    height: 75,
    margin: 5,
  },
  durPlayingButton: {
    backgroundColor: '#26ca57',
    borderRadius: 50,
    padding: 10,
    width: 75,
    height: 75,
    margin: 5,
  },
  greyExerciseButton: {
    backgroundColor: '#ffffff28',
    borderRadius: 50,
    padding: 10,
    width: 65,
    height: 65,
    margin: 5,
  },
  ExerciseWeightContainer: {
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default styles;
