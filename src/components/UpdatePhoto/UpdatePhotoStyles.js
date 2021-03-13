import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: '1rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  input: {
    margin: '3rem 0rem',
  },
  image: {
    width: '100%',
  },
  form: {
    padding: '1.5rem',
    backgroundColor: '#f6f4d2',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  alert: {
    marginBottom: '1rem',
  },
}));

export default useStyles;
