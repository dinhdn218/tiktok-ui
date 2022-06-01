import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Header({ title, onBack = defaultFn }) {
  return (
    <header className={cx('header')}>
      <button onClick={onBack} className={cx('back-btn')}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <p className={cx('title')}>{title}</p>
    </header>
  );
}

export default Header;
