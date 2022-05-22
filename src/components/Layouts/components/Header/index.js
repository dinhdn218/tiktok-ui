import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('content')}>
        <img src={images.logo} alt="Tiktok" />
        <div className={cx('search')}>
          <input
            className={cx('search-input')}
            placeholder="Search accounts and videos"
          />
          <FontAwesomeIcon
            className={cx('search-loading-icon')}
            icon={faSpinner}
          />
          <FontAwesomeIcon
            className={cx('search-clear-icon')}
            icon={faCircleXmark}
          />
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div>action</div>
      </div>
    </header>
  );
}

export default Header;
