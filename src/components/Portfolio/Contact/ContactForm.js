import React from "react";
import {useRef} from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";


init("user_1ED4n9wgLPnUEAcEZymZd");

const schema = yup.object().shape({
  email: yup.string().email("Enter a valid email.").required("Email is a required field."),
  name: yup.string().max(100,).required("Name is a required field."),
  message: yup.string().required("Message is a required field.")
});


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  input: {
    maxWidth: '75%',
    flexBasis: '75%'
  },
});


export default function ContactForm() {
    let btnRef = useRef();

    const [open_e, setOpen_e] = React.useState(false);
    const [open_s, setOpen_s] = React.useState(false);

    const handleClick_e = () => {
        setOpen_e(true);
    };

    const handleClose_e = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen_e(false);
    }

    const handleClick_s = () => {
        setOpen_s(true);
    };

    const handleClose_s = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen_s(false);
    }


    const sendEmail = (data, e) => {
      e.preventDefault();
      if(btnRef.current){
          btnRef.current.setAttribute("disabled", "disabled");
        }
      emailjs.sendForm('jsinghw94@gmail.com',
                       'template_d8celzd',
                        e.target,
                        'user_1ED4n9wgLPnUEAcEZymZd',
                        data
                        )
        .then((result) => {
            if(btnRef.current){
                btnRef.current.removeAttribute("disabled");
            }
            handleClick_s()
            e.target.reset()
        }, (error) => {
            if(btnRef.current){
                btnRef.current.removeAttribute("disabled");
            }
            handleClick_e()
        });
    }

    const { handleSubmit, register, errors } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });


    const classes = useStyles();


    return (
        <form onSubmit={handleSubmit(sendEmail)} noValidate>
            <GridContainer
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className="contact-grid">
                  <GridItem xs={3} md={9} className={classes.input}>
                      <TextField
                          className="form-input"
                          name="email"
                          label="Email"
                          required
                          fullWidth
                          error={errors.email? true:false}
                          inputRef={register({required: true})}
                          helperText={errors.email? errors.email.message:"\u00a0"}
                      />
                  </GridItem>
                  <GridItem xs={3} md={9} className={classes.input}>
                      <TextField
                          className="form-input"
                          name="name"
                          label="Name"
                          required
                          fullWidth
                          error={errors.name? true:false}
                          inputRef={register({required: true})}
                          helperText={errors.name? errors.name.message:"\u00a0"}
                      />
                  </GridItem>
                  <GridItem xs={3} md={9} className={classes.input}>
                      <TextField
                          className="form-input"
                          name="message"
                          label="Message"
                          required
                          fullWidth
                          multiline
                          rows="10"
                          error={errors.message? true:false}
                          inputRef={register({required: true})}
                          helperText={errors.message? errors.message.message:"\u00a0"}
                          />
                  </GridItem>
                  <GridItem xs={3} md={3}>
                      <Snackbar open={open_s} autoHideDuration={6000} onClose={handleClose_s}>
                          <Alert onClose={handleClose_s} severity="success">
                            This is a success message!
                          </Alert>
                        </Snackbar>
                        <Snackbar open={open_e} autoHideDuration={6000} onClose={handleClose_e}>
                            <Alert onClose={handleClose_e} severity="error">
                              This is a success message!
                            </Alert>
                          </Snackbar>

                      <div className="form-button-wrapper">
                          <button className="form-button" type="submit" ref={btnRef}>Submit</button>
                      </div>
                  </GridItem>
            </GridContainer>
        </form>
    )
}
