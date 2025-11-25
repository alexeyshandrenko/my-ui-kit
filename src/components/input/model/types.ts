import type { InputHTMLAttributes } from 'react';

type InputHTML = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>;

type InputSize = 'large' | 'default' | 'small';

type InputVariant = 'outlined' | 'filled' | 'borderless' | 'underlined';

type InputType = 'text' | 'password';

export interface ClassNames {
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  wrapperClassName?: string;
}

export interface InputProperties extends InputHTML {
  label?: string;
  error?: string;
  size?: InputSize;
  variant?: InputVariant;
  type?: InputType;
  classNames?: ClassNames;
}
