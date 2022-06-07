import images from '@/assets/images';
import AccountItem from '@/components/AccountItem';
import Button from '@/components/Button';
import {
  CoinIcon,
  InboxIcon,
  KeyboardIcon,
  LanguageIcon,
  LogoutIcon,
  MessageIcon,
  PlusIcon,
  QuestionIcon,
  SearchIcon,
  SettingIcon,
  UserIcon,
} from '@/components/Icons';
import Image from '@/components/Image';
import {
  Menu as MenuPopper,
  Wrapper as PopperWrapper,
} from '@/components/Popper';
import {
  faCircleXmark,
  faEllipsisVertical,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  const currentUser = true;

  const MENU_ITEMS = [
    {
      icon: <LanguageIcon />,
      label: 'English',
      children: {
        title: 'Language',
        data: [
          {
            code: 'en',
            label: 'English',
          },
          {
            code: 'vi',
            label: 'Tiếng Việt',
          },
          {
            code: 'fr',
            label: 'French',
          },
        ],
      },
    },
    {
      icon: <QuestionIcon />,
      label: 'Feedback and help',
      to: '/feedback',
    },
    {
      icon: <KeyboardIcon />,
      label: 'Keyboard shortcuts',
    },
  ];

  const USER_MENU_ITEMS = [
    {
      icon: <UserIcon />,
      label: 'View profile',
    },
    {
      icon: <CoinIcon />,
      label: 'Get coins',
      to: '/coin',
    },
    {
      icon: <SettingIcon />,
      label: 'Settings',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <LogoutIcon />,
      label: 'Log out',
      separate: true,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  const handleChangeMenu = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('content')}>
        <img src={images.logo} alt="Tiktok" />
        <HeadlessTippy
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
              <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx('action')}>
          <Button
            overrideStyleClass={cx('upload-button')}
            type="text"
            leftIcon={<PlusIcon />}
          >
            Upload
          </Button>
          {currentUser ? (
            <>
              <Tippy content="Message" placement="bottom">
                <button className={cx('icon-btn', 'messages-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx('icon-btn', 'messages-btn')}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <Button type="primary">Log in</Button>
          )}
          <MenuPopper
            items={currentUser ? USER_MENU_ITEMS : MENU_ITEMS}
            onChange={handleChangeMenu}
          >
            {currentUser ? (
              <Image
                className={cx('avatar-img')}
                src="https://allimages.sgp1.digitaloceanspaces.com/wikilaptopcom/2021/06/Tuyen-tap-hinh-nen-phong-canh-thien-nhien-cuc-dep.jpg"
                alt="Bum"
              />
            ) : (
              <div className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </div>
            )}
          </MenuPopper>
        </div>
      </div>
    </header>
  );
}

export default Header;
