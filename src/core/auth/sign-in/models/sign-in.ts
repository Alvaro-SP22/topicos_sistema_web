import { boolean, InferType, object, string } from 'yup';
import t from '../../../modules/i18n';

export const SigninSchema = object({
  rememberMe: boolean().optional(),
  email: string().required(t('Ingresa tu correo')).email(t('Ingresa un correo válido')),
  password: string()
    .required(t('Ingresa tu contraseña'))
    .min(6, t('Tu contraseña debe tener mínimo 6 caracteres', { min: 6 })),
});

export type SigninForm = InferType<typeof SigninSchema>;
