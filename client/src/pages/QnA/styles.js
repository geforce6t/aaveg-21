import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  qna: {
    overflow: 'hidden'
  },
  title: {
    margin: '10px',
    color: 'rgba(255,255,255,0.8)'
  },
  main: {
    position: 'relative',
    right: '0',
    bottom: '0',
    minWidth: '100vh',
    minHeight: 'calc(100vh - 132px)',
    [theme.breakpoints.down(800)]: {
      minHeight: 'calc(100vh - 102px)'
    },
    backgroundColor: 'transparent'
  },
  container: {
    textAlign: 'center',
    position: 'fixed',
    top: '50vh',
    left: '50vw',
    transform: 'translate(-50%, -50%)',
    minWidth: '100em',
    height: 'inherit',
    zIndex: 20
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgimg: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    bottom: 0,
    left: 0,
    zIndex: 10
  },
  questionBox: {
    display: 'flex',
    alignItems: 'center'
  },
  cover: {
    padding: '40px 30px',
    fontSize: '18px',
    [theme.breakpoints.down(500)]: {
      padding: '20px 15px'
    }
  },
  legend: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    textAlign: 'start',
    minWidth: '620px',
    [theme.breakpoints.down(800)]: {
      fontSize: '1.2rem',
      // textAlign: 'center',
      minWidth: 'calc(100vw - 200px)'
    }
  },
  radioGroup: {
    textAlign: 'left'
  },
  label: {
    fontSize: '1.0rem',
    [theme.breakpoints.down(800)]: {
      fontSize: '1rem'
    }
  },
  logo: {
    marginBottom: '10px',
    width: '70px',
    [theme.breakpoints.down(600)]: {
      display: 'none'
    }
  },
  button: {
    fontSize: '15px',
    marginTop: '10px'
  },
  infoIcon: {
    position: 'absolute',
    top: '75px',
    left: '15px',
    cursor: 'pointer',
    zIndex: '20',
    [theme.breakpoints.down(450)]: {
      fontSize: '1.5rem',
      top: '60px',
      left: '10px'
    }
  },

  // For dialog box
  dTitle: {
    fontSize: '1.5rem'
  },
  dContent: {
    fontSize: '1.2rem',
    [theme.breakpoints.down(500)]: {
      fontSize: '1rem'
    }
  }
}))
