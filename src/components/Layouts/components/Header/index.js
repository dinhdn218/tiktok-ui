import images from '@/assets/images';
import AccountItem from '@/components/AccountItem';
import Button from '@/components/Button';
import {
  Wrapper as PopperWrapper,
  Menu as MenuPopper,
} from '@/components/Popper';
import {
  faCircleQuestion,
  faCircleXmark,
  faEllipsisVertical,
  faKeyboard,
  faLanguage,
  faMagnifyingGlass,
  faPlus,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    label: 'English',
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    label: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    label: 'Keyboard shortcuts',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('content')}>
        <img src={images.logo} alt="Tiktok" />
        <Tippy
          visible={searchResult.length > 0 ? true : false}
          interactive
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <div className={cx('search-title')}>Accounts</div>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
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
        </Tippy>
        <div className={cx('action')}>
          <Button
            overrideStyleClass={cx('upload-button')}
            type="text"
            leftIcon={<FontAwesomeIcon icon={faPlus} />}
          >
            Upload
          </Button>
          <Button type="primary">Log in</Button>
          <MenuPopper items={MENU_ITEMS}>
            <div className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </MenuPopper>
        </div>
      </div>
    </header>
  );
}

export default Header;
