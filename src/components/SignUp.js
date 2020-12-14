import React, { useContext } from 'react';
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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Store from '../context';
import { Redirect } from 'react-router';
import { NoteTwoTone } from '@material-ui/icons';
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const { state } = useContext(Store);
  const [formdata, setFormdata] = React.useState({
    username: "",
    email:"",
    age:30,
    gender: "Male",
    role: "User",
    password: ""
  });

  const validations = (element)=>{
    switch(element){
      case "username": {
        return formdata.username.length<10?true:false;
      }
      default:{
        return false;
      }
    }
  }
  const handleSubmit=()=>{
    fetch("http://localhost:3001/users",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id:new Date(),
        ...formdata
      })
    }).then(data=>console.log(data));
  }

  const handleChange = (e, element) =>{
    setFormdata({
      ...formdata,
      [element]:e.target.value
    })
  }
  
  if(state.user!==null){
    return (
      <Redirect to="/"></Redirect>
    )
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Username"
                variant="outlined"
                required
                fullWidth
                id="Username"
                label="Username"
                autoFocus
                error = {validations("username")}
                onChange= {(e)=>handleChange(e,"username")}
                value={formdata.username}
                helperText = {validations("username")?"Minimum character length is 10":""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange= {(e)=>handleChange(e,"age")}
                value={formdata.age}
                variant="outlined"
                required
                fullWidth
                id="Age"
                label="Age"
                name="Age"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={validations("email")}
                onChange= {(e)=>handleChange(e,"email")}
                value={formdata.email}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                helperText={validations("email")?"Enter a Valid Email":""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange= {(e)=>handleChange(e,"password")}
                value={formdata.password}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={6}>
              <RadioGroup row aria-label="position" name="position" defaultValue={formdata.gender} value={formdata.gender} onChange= {(e)=>handleChange(e,"gender")}>
                <FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" />
                <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />
              </RadioGroup>
            </Grid>
            <Grid item xs={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Role</InputLabel>
              <Select
                native
                value={formdata.role}
                onChange={(e)=>handleChange(e, "role")}
                label="role"
                inputProps={{
                  name: 'role',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I agree to all terms and conditions"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e)=>{
              e.preventDefault();
              handleSubmit();
            }}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}