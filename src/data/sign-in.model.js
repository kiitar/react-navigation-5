import * as Yup from 'yup';

export const SignInData = {
  email: '',
  password: '',
};

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email'),
  password: Yup.string().min(8, 'Password must be at least 8 characters'),
});
