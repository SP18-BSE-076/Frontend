  
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import userService from "../../services/UserService";
const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "300px",
    },
    child: {
      width: "60%",
    },
  }));

const ContactUs = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
          <div className={classes.child}>
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />{" "}
            <br />
            <TextField
              label="Name"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />{" "}
            <br />
            <br />
            <TextField
              label="Message"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />{" "}
            <br />
            <br />
            <Button
              variant="contained"
              color="dark"
              onClick={(e) => {
                userService
                  .login(email, password)
                  .then((data) => {
                    console.log(data);
                    window.location.href = "/";
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      );
}
 
export default ContactUs;