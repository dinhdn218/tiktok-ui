import images from '@/assets/images';
import AccountItem from '@/components/AccountItem';
import Button from '@/components/Button';
import {
  Menu as MenuPopper,
  Wrapper as PopperWrapper,
} from '@/components/Popper';
import {
  faArrowRightFromBracket,
  faCircleQuestion,
  faCircleXmark,
  faCoins,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faLanguage,
  faMagnifyingGlass,
  faPlus,
  faSpinner,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  const currentUser = true;

  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faLanguage} />,
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
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      label: 'Feedback and help',
      to: '/feedback',
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      label: 'Keyboard shortcuts',
    },
  ];

  const USER_MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      label: 'View profile',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      label: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      label: 'Settings',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
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
          {currentUser ? (
            <>
              <button className={cx('icon-btn', 'messages-btn')}>
                <img src={images.messages} alt="Messages" />
              </button>
              <button className={cx('icon-btn', 'messages-btn')}>
                <img src={images.inbox} alt="Inbox" />
              </button>
            </>
          ) : (
            <Button type="primary">Log in</Button>
          )}
          <MenuPopper
            items={currentUser ? USER_MENU_ITEMS : MENU_ITEMS}
            onChange={handleChangeMenu}
          >
            {currentUser ? (
              <img
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
