import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { useId, useRef, type FC } from 'react';
import styles from './input.module.scss';
import type { InputProperties } from './model/types';
import { motionError } from './utils/motion';

export const Input: FC<InputProperties> = ({
  size = 'default',
  variant = 'outlined',
  type = 'text',
  label,
  error,
  classNames,
  ...properties
}) => {
  const inputId = useId();
  const inputReference = useRef<HTMLInputElement>(null);

  return (
    <div className={clsx(styles.container, classNames?.containerClassName)}>
      {label && (
        <label
          className={clsx(
            styles.label,
            { [styles.label_disabled]: properties.disabled },
            classNames?.labelClassName
          )}
          htmlFor={inputId}
        >
          {label}
        </label>
      )}
      <div
        onClick={() => inputReference.current?.focus()}
        className={clsx(
          styles.wrapper,
          styles[size],
          styles[variant],
          {
            [styles.error]: error,
            [styles.disabled]: properties.disabled,
          },
          classNames?.wrapperClassName
        )}
      >
        <input
          ref={inputReference}
          id={inputId}
          className={clsx(styles.input, classNames?.inputClassName)}
          type={type}
          {...properties}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            {...motionError}
            className={clsx(
              styles.text,
              styles.text_error,
              classNames?.errorClassName
            )}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

//TODO
// 3. добавить кнопку
{
  /* <button className={styles.button}>
        <EyeIcon />
      </button> */
}
