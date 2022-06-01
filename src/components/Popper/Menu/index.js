import { Wrapper as PopperWrapper } from '@/components/Popper';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItem = () =>
    current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              console.log(item);
            }
          }}
        />
      );
    });

  return (
    <Tippy
      delay={[0, 500]}
      placement="bottom-end"
      interactive
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
            {renderItem()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
