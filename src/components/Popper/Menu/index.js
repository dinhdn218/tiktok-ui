import { Wrapper as PopperWrapper } from '@/components/Popper';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Menu({ children, items, onChange, hideOnClick = false }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItem = () =>
    current.data.map((item, index) => {
      const isParent = !!item.children;

      const classes =
        history.length > 1
          ? cx('menu-item-children')
          : item.separate
          ? cx('separate')
          : '';

      return (
        <MenuItem
          overrideStyleClass={classes}
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });

  return (
    <Tippy
      hideOnClick={hideOnClick}
      offset={[14, 12]}
      delay={[0, 500]}
      placement="bottom-end"
      interactive
      onHide={() => setHistory([{ data: items }])}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper overrideStyleClass={cx('menu-popper')}>
            {current.title && (
              <Header
                title={current.title}
                onBack={() => {
                  const newHistory = history.slice(0, history.length - 1);
                  setHistory(newHistory);
                }}
              />
            )}
            <div className={cx('menu-scrollable')}>{renderItem()}</div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node,
  items: PropTypes.array,
  onChange: PropTypes.func,
  hideOnClick: PropTypes.bool,
};

export default Menu;
