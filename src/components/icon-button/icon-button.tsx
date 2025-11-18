import clsx from 'clsx';
import type { FC, JSX } from 'react';
import styles from './icon-button.module.scss';

interface IconButtonClassNames {
  buttonClassName?: string;
}

interface IconButtonProperties {
  children: JSX.Element;
  classNames?: IconButtonClassNames;
  // onClick: () => void;
}

export const IconButton: FC<IconButtonProperties> = ({
  children,
  classNames,
  // onClick,
}) => {
  return (
    <button
      type='button'
      // onClick={onClick}
      className={clsx(styles.button, classNames?.buttonClassName)}
    >
      {children}
    </button>
  );
};
