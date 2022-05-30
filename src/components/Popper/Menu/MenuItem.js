import Button from '@/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  return (
    <Button
      overrideStyleClass={cx('menu-item')}
      leftIcon={data.icon}
      to={data.to}
    >
      {data.label}
    </Button>
  );
}

export default MenuItem;
