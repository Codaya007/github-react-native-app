import { Formik, useField } from "formik";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import StyledText from "../components/StyledText";
import StyledTextInput from "../components/StyledTextInput";
import { loginValidationSchema } from "../validationSchemas/login";

const initialValues = {
  email: "",
  password: "",
};

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={helpers.setValue}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

// const validate = (values) => {
//   const errors = {};

//   if (!values.email) errors.email = "Email is required";
//   else if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
//     errors.email = "Invalid email address";

//   return errors;
// };

const Login = () => {
  return (
    <Formik
      // validate={validate}
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={console.log}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue placeholder="Email" name={"email"} />
            <FormikInputValue
              secureTextEntry
              placeholder="Password"
              name={"password"}
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
  error: {
    color: "red",
    marginTop: -5,
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5,
  },
});

export default Login;
