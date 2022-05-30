import { Wrapper as PopperWrapper } from '@/components/Popper';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items }) {
  const renderItem = () =>
    items.map((item, index) => <MenuItem key={index} data={item} />);

  return (
    <Tippy
      delay={[0, 500]}
      placement="bottom-end"
      interactive
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper overrideStyleClass={cx('menu-popper')}>
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
