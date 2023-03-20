import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const SignupSchema = Yup.object().shape({
  userName: Yup.string().required("Enter your name"),
  phone: Yup.string()
    .required("Enter your Phone number")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(10, "too long"),
  email: Yup.string().email("Invalid email").required("Enter your Email"),
  password: Yup.string()
    .required("Enter your Password")
    .min(6, "Passwords must be at least 6 characters")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Enter your Email"),
  password: Yup.string().required("Enter your Password"),
});
