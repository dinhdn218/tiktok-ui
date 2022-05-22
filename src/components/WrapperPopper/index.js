import styles from './WrapperPopper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function WrapperPopper({ children }) {
  return <div className={cx('wrapper')}>{children}</div>;
}

export default WrapperPopper;
