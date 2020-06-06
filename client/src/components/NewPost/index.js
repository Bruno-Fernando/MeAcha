import React from "react";
import { useForm } from "react-hook-form";

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
const foundPlace = {
  required: { value: true, message: "Informe onde achou" },
  minLength: { value: 4, message: "Mínimo de 4 caracteres" },
  maxLength: { value: 280, message: "Máximo de 280 caracteres" },
  pattern: {
    value: /^[^$&{|]*$/i,
    message: "Não pode conter os caracteres: [ ^ $ & { | ] * $ ",
  },
};
const meetingPlace = {
  maxLength: { value: 280, message: "Máximo de 280 caracteres" },
  pattern: {
    value: /^[^$&{|]*$/i,
    message: "Não pode conter os caracteres: [ ^ $ & { | ] * $ ",
  },
};
const lostPlace = {
  maxLength: { value: 50, message: "Máximo de 50 caracteres" },
  pattern: {
    value: /^[^$&{|]*$/i,
    message: "Não pode conter os caracteres: [ ^ $ & { | ] * $ ",
  },
};

export default function NewPost() {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    errors,
    getValues,
    setValue,
    watch,
  } = useForm({
    mode: "onBlur",
  });

  React.useEffect(() => {
    register({ name: "category" }, { required: true });
  }, [register]);
  
  const selectValue = watch("category");
  
  const handleCategoryChange = e => setValue("category", e.target.value);

  const onSubmit = (e) => {
    console.log(e);
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
        <FormControl
          error={errors.category ? true : false}
          variant="outlined"
          className={classes.gridInput}
        >
          <InputLabel htmlFor="category">Categoria</InputLabel>
          <Select
            label="category"
            name="category"
            value={selectValue || ""}
            onChange={handleCategoryChange}
          >
            <MenuItem value="lost">Perdido</MenuItem>
            <MenuItem value="found">Encontrado</MenuItem>
          </Select>
          <FormHelperText>
            {errors.category && errors.category.message}
          </FormHelperText>
        </FormControl>

        {(() => {
          const { category } = getValues();

          if (category === "found") {
            return (
              <>
                <TextField
                  label="Onde Achou"
                  name="foundPlace"
                  variant="outlined"
                  inputRef={register(foundPlace)}
                  error={errors.foundPlace ? true : false}
                  helperText={
                    errors.foundPlace ? errors.foundPlace.message : ""
                  }
                  className={classes.gridInput}
                />

                <TextField
                  label="Lugar de Encontro"
                  name="meetingPlace"
                  variant="outlined"
                  inputRef={register(meetingPlace)}
                  error={errors.meetingPlace ? true : false}
                  helperText={
                    errors.meetingPlace ? errors.meetingPlace.message : ""
                  }
                  className={classes.gridInput}
                />
              </>
            );
          } else if (category === "lost") {
            return (
              <>
                <TextField
                  label="Onde perdeu"
                  name="lostPlace"
                  variant="outlined"
                  inputRef={register(lostPlace)}
                  error={errors.lostPlace ? true : false}
                  helperText={errors.lostPlace ? errors.lostPlace.message : ""}
                  className={classes.gridInput}
                />

                <TextField
                  label="Recompensa"
                  name="bounty"
                  type="number"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    min: 0,
                  }}
                  variant="outlined"
                  inputRef={register()}
                  error={errors.bounty ? true : false}
                  helperText={errors.bounty ? errors.bounty.message : ""}
                  className={classes.gridInput}
                />
              </>
            );
          }
        })()}

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

        <Button
          variant="contained"
          disableElevation
          type="submit"
          className={classes.submitBtn}
        >
          Postar
        </Button>
      </Grid>
    </form>
  );
}
