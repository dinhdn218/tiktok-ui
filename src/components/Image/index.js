import images from '@/assets/images';
import { forwardRef, useState } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Image = forwardRef(
  (
    {
      className,
      src,
      alt,
      fallback: fallbackProp = images.defaultImage,
      ...props
    },
    ref,
  ) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
      setFallback(fallbackProp);
    };

    return (
      <img
        ref={ref}
        className={cx('wrapper', className)}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  },
);

export default Image;
