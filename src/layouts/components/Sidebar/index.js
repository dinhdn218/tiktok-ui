import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import config from '@/config';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        {config.menu.map((item, index) => (
          <MenuItem
            key={index}
            overrideStyleClass="menu-btn"
            text={item.text}
            to={item.to}
            icon={item.icon}
            activeIcon={item.activeIcon}
          />
        ))}
      </Menu>
    </aside>
  );
}

export default Sidebar;
