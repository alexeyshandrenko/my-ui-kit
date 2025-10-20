import type { FC, InputHTMLAttributes } from 'react';
import styles from './input.module.scss';

interface InputProperties extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: FC<InputProperties> = ({ label, error, ...properties }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={label}>{label}</label>
      <div className={styles.wrapper}>
        <input id={label} {...properties} />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
