import images from '@/assets/images';
import { forwardRef, useState } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

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

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
