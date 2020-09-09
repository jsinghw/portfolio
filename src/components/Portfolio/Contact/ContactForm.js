import React from "react";
import {useRef} from 'react';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

import { Input, TextField } from '@material-ui/core';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from 'components/CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';

init("user_1ED4n9wgLPnUEAcEZymZd");

const schema = yup.object().shape({
  email: yup.string().email("Enter a valid email.").required("Email is a required field."),
  name: yup.string().max(100,).required("Name is a required field."),
  message: yup.string().required("Message is a required field.")
});


export default function ContactForm() {
    let btnRef = useRef();

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
            console.log(result.text);
            if(btnRef.current){
                btnRef.current.removeAttribute("disabled");
            }
        }, (error) => {
            console.log(error.text);
            if(btnRef.current){
                btnRef.current.removeAttribute("disabled");
            }
        });
    }

    const { handleSubmit, register, errors } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    return (
        <form onSubmit={handleSubmit(sendEmail)} noValidate>
            <GridContainer
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className="contact-grid">
                  <GridItem xs={3} md={9}>
                      <TextField
                          className="form-input"
                          name="email"
                          label="Email"
                          required
                          fullWidth="true"
                          error={errors.email? true:false}
                          inputRef={register({required: true})}
                          helperText={errors.email? errors.email.message:"\u00a0"}
                      />
                  </GridItem>
                  <GridItem xs={3} md={9}>
                      <TextField
                          className="form-input"
                          name="name"
                          label="Name"
                          required
                          fullWidth="true"
                          error={errors.name? true:false}
                          inputRef={register({required: true})}
                          helperText={errors.name? errors.name.message:"\u00a0"}
                      />
                  </GridItem>
                  <GridItem xs={3} md={9}>
                      <TextField
                          className="form-input"
                          name="message"
                          label="Message"
                          required
                          fullWidth="true"
                          multiline="true"
                          rows="10"
                          error={errors.message? true:false}
                          inputRef={register({required: true})}
                          helperText={errors.message? errors.message.message:"\u00a0"}
                          />
                  </GridItem>
                  <GridItem xs={3} md={3}>
                      <div className="form-button">
                          <Button type="submit" ref={btnRef}>Submit</Button>
                      </div>
                  </GridItem>
            </GridContainer>
        </form>
    )
}
