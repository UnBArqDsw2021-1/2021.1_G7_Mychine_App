import { FormHTMLAttributes } from 'react';
import {
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';

import * as S from './styles';

interface FormProps<TFormValues>
  extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  form: UseFormProps<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  onSubmit: SubmitHandler<TFormValues>;
}

export default function Form<TFormValues>({
  children,
  onSubmit,
  form,
  ...rest
}: FormProps<TFormValues>) {
  const methods = useForm<TFormValues>(form);

  return (
    <FormProvider {...methods}>
      <S.Form onSubmit={methods.handleSubmit(onSubmit)} {...rest}>
        {children(methods)}
      </S.Form>
    </FormProvider>
  );
}
