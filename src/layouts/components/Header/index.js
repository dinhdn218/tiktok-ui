import images from '@/assets/images';
import Button from '@/components/Button';
import config from '@/config';
import {
  CoinIcon,
  InboxIcon,
  KeyboardIcon,
  LanguageIcon,
  LogoutIcon,
  MessageIcon,
  PlusIcon,
  QuestionIcon,
  SettingIcon,
  UserIcon,
} from '@/components/Icons';
import Image from '@/components/Image';
import { Menu as MenuPopper } from '@/components/Popper';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
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

  const handleChangeMenu = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('content')}>
        <Link to={config.routes.home}>
          <img src={images.logo} alt="Tiktok" />
        </Link>

        <Search />

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
