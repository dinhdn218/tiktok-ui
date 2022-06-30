import Button from '@/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, overrideStyleClass }) {
  return (
    <Button
      onClick={onClick}
      overrideStyleClass={cx('menu-item', {
        [overrideStyleClass]: overrideStyleClass,
      })}
      leftIcon={data.icon}
      to={data.to}
    >
      {data.label}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  overrideStyleClass: PropTypes.string,
};

export default MenuItem;
