import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import Avatar from "@material-ui/core/Avatar";

import { MdVisibility, MdVisibilityOff, MdPhotoCamera } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";

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
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Insira um Email válido",
  },
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
  const [showPassword, setShowPassword] = React.useState(false);
  const [photo, setPhoto] = React.useState(null);

  const handleShowPassword = (e) => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (e) => {
    console.log(e);
  };

  const handlePhotoUpload = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.formContainer}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.gridContainer}
      >
        <Grid>
          <Avatar src={photo} className={classes.avatar} />

          <input
            accept="image/*"
            className={classes.avatarImg}
            id="icon-button-file"
            type="file"
            onChange={handlePhotoUpload}
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <MdPhotoCamera />
            </IconButton>
          </label>
        </Grid>

        <TextField
          label="Nome *"
          name="name"
          variant="outlined"
          inputRef={register(userName)}
          error={errors.name ? true : false}
          helperText={errors.name ? errors.name.message : ""}
          className={classes.gridInput}
        />

        <TextField
          label="Email *"
          name="email"
          variant="outlined"
          inputRef={register(userEmail)}
          error={errors.email ? true : false}
          helperText={errors.email ? errors.email.message : ""}
          className={classes.gridInput}
        />

        <FormControl variant="outlined" className={classes.gridInput}>
          <InputLabel htmlFor="password">Senha *</InputLabel>
          <OutlinedInput
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            inputRef={register(userPassword)}
            error={errors.password ? true : false}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                  edge="end"
                >
                  {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />

          <FormHelperText error={errors.password ? true : false}>
            {errors.password ? errors.password.message : ""}
          </FormHelperText>
        </FormControl>

        <Button
          variant="contained"
          disableElevation
          type="submit"
          className={classes.submitBtn}
        >
          Cadastrar
        </Button>

        <Link className={classes.registerLink} to="/login">
          <IoMdLogIn size={16} />
          Já tenho cadastro
        </Link>
      </Grid>
    </form>
  );
}
