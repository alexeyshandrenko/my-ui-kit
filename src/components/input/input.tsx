import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { useId, useState, type FC, type InputHTMLAttributes } from 'react';
import styles from './input.module.scss';

type InputHTML = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

interface ClassNames {
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
}

interface InputProperties extends InputHTML {
  label?: string;
  error?: string;
  size?: 'large' | 'default' | 'small';
  variant?: 'outlined' | 'filled' | 'borderless' | 'underlined';
  classNames?: ClassNames;
}

export const Input: FC<InputProperties> = ({
  size = 'default',
  variant = 'outlined',
  label,
  error,
  classNames,
  ...properties
}) => {
  const inputId = useId();

  const [value, setValue] = useState('');

  return (
    <div className={clsx(styles.wrapper, classNames?.wrapperClassName)}>
      {label && (
        <label
          className={clsx(styles.label, classNames?.labelClassName)}
          htmlFor={inputId}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          styles.input,
          styles[size],
          styles[variant],
          classNames?.inputClassName
        )}
        {...properties}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={clsx(styles.error, classNames?.errorClassName)}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
