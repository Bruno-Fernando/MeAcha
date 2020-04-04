import React from "react";
import { useForm } from "react-hook-form";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";

const userName = {
  required: { value: true, message: "Informe seu nome" },
  minLength: { value: 4, message: "Mínimo de 4 caracteres" },
  maxLength: { value: 20, message: "Máximo de 20 caracteres" },
  pattern: {
    value: /^[^$&{|]*$/i,
    message: "Não pode conter os caracteres: [ ^ $ & { | ] * $ ",
  },
};
const userEmail = {
  required: { value: true, message: "Informe seu Email" },
  pattern: { value: /^\S+@\S+$/i, message: "Insira um Email válido" },
  maxLenght: { value: 35, message: "Email muito grande" },
};
const userPassword = {
  required: { value: true, message: "Insira uma senha" },
  minLength: { value: 8, message: "Mínimo de 8 caracteres" },
  maxLength: { value: 20, message: "Máximo de 20 caracteres" },
  pattern: {
    value: /^[^$&{|]*$/i,
    message: "Não pode conter os caracteres: [ ^ $ & { | ] * $ ",
  },
};

export default function Register() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });

  function onSubmit(e) {
    console.log(e);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
        className={classes.gridContainer}
      >
        <TextField
          label="Nome *"
          name="name"
          variant="outlined"
          inputRef={register(userName)}
          error={errors.name ? true : false}
          helperText={errors.name ? errors.name.message : ""}
        />

        <TextField
          label="Email *"
          name="email"
          variant="outlined"
          inputRef={register(userEmail)}
          error={errors.email ? true : false}
          helperText={errors.email ? errors.email.message : ""}
        />

        <TextField
          label="Senha *"
          name="password"
          variant="outlined"
          inputRef={register(userPassword)}
          error={errors.password ? true : false}
          helperText={errors.password ? errors.password.message : ""}
        />

        <Button variant="contained" disableElevation type="submit">
          Cadastrar
        </Button>
      </Grid>
    </form>
  );
}
