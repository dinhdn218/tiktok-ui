import styles from './Wrapper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Wrapper({ children, overrideStyleClass }) {
  return (
    <div
      className={cx('wrapper', {
        [overrideStyleClass]: overrideStyleClass,
      })}
    >
      {children}
    </div>
  );
}

export default Wrapper;
