import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(25, 'Maximum 25 characters')
    .required('Is required'),
  email: Yup.string().email('Wrong format').required('Is required'),
  phone: Yup.string()
    .matches(/^\+\d{1,2} \d{3} \d{3} \d{3}$/, 'Wrong format')
    .required('Is required'),
});
