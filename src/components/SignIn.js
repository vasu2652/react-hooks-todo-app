import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Redirect } from 'react-router';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const BotoomSnack=({open, duration=5000, handleClose, message, severity, vertical="top", horizontal="center"})=>{
  return (
    <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={duration} onClose={handleClose} key={vertical + horizontal} >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
  )
}
export default function SignIn() {
  const classes = useStyles();
  const [redirect, setRedirect] = React.useState(false)
  const [snack, setSnack] = React.useState({
    open: false,
    message: "",
    severity: "sucess",
  })
  const [formdata, setFormdata] = React.useState({
    username:"",
    password:""
  })
  const handleChange = (e, element)=>{
    setFormdata({
      ...formdata,
      [element]:e.target.value
    })
  }
  
  const handleSubmit=()=>{
    setSnack({
      open: true,
      severity: "error",
      message: "Invalid Credentials"
    });
    //setRedirect(true)
    //fetch(`http://localhost:3001/users?`)
  }
  const validations = (element)=>{
    switch(element){
      case "username": {
        return formdata.username.length<10?true:false;
      }
      case "password":{
        return formdata.password.length<6?true:false;
      }
      default:{
        return false;
      }
    }
  }
  if(redirect){
    return <Redirect to="/"/>
  }
  return (
    <>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange= {(e)=>handleChange(e,"username")}
            value={formdata.username}
            error={validations("username")}
            helperText = {validations("username")?"Enter a Valid username":""}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange= {(e)=>handleChange(e,"password")}
            value={formdata.password}
            error={validations("password")}
            helperText = {validations("username")?"Minimum character length is 6":""}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {(e)=>{
              e.preventDefault();
              handleSubmit();
            }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    <BotoomSnack open={snack.open} handleClose={()=>setSnack({
      ...snack,
      open: false
    })} message={snack.message} severity={snack.severity} />
    
    </>
    
  );
}