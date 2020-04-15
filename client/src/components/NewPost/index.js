import React from "react";
import { useForm, Controller } from "react-hook-form";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

import useStyles from "./styles";

const postTitle = {
  required: { value: true, message: "Informe um título" },
  minLength: { value: 4, message: "Mínimo de 4 caracteres" },
  maxLength: { value: 20, message: "Máximo de 20 caracteres" },
  pattern: {
    value: /^[^$&{|]*$/i,
    message: "Não pode conter os caracteres: [ ^ $ & { | ] * $ ",
  },
};
const postDescription = {
  maxLength: { value: 300, message: "Máximo de 300 caracteres" },
  pattern: {
    value: /^[^$&{|]*$/i,
    message: "Não pode conter os caracteres: [ ^ $ & { | ] * $ ",
  },
};

export default function Register() {
  const classes = useStyles();
  const { register, handleSubmit, errors, control } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.formContainer} >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.gridContainer}
      >
        <FormControl
          error={errors.category ? true : false}
          variant="outlined"
          className={classes.gridInput}
        >
          <InputLabel htmlFor="category">Categoria</InputLabel>
          <Controller
            as={
              <Select label="category">
                <MenuItem value="lost">Perdido</MenuItem>
                <MenuItem value="found">Encontrado</MenuItem>
              </Select>
            }
            name="category"
            rules={{ required: "Escolha uma categoria" }}
            control={control}
            defaultValue=""
          />
          <FormHelperText>
            {errors.category && errors.category.message}
          </FormHelperText>
        </FormControl>

        <TextField
          label="Título *"
          name="title"
          variant="outlined"
          inputRef={register(postTitle)}
          error={errors.title ? true : false}
          helperText={errors.title ? errors.title.message : ""}
          className={classes.gridInput}
        />

        <TextField
          label="Descrição"
          name="description"
          multiline
          rows="4"
          variant="outlined"
          inputRef={register(postDescription)}
          error={errors.description ? true : false}
          helperText={errors.description ? errors.description.message : ""}
          className={classes.gridInput}
        />

        <Button variant="contained" disableElevation type="submit" className={classes.submitBtn}>
          Postar
        </Button>
      </Grid>
    </form>
  );
}
