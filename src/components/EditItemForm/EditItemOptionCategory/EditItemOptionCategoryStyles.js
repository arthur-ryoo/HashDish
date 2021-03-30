import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    padding: '0rem',
    marginBottom: '1rem'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  category: {
    border: '#888888 solid 1px',
    borderRadius: '5px',
    padding: '1rem',
    marginBottom: '0.5rem',
  },
  interface: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  add: {
    marginBottom: '1rem',
  },
  title: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: '1rem',
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '0.5rem',
  },
  label: {
    marginBottom: '0.5rem',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
  },
  arrows: {
    display: 'flex',
  }

}));

export default useStyles;