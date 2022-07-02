import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  overrideStyleClass,
  to,
  toActive,
  href,
  children,
  type,
  size,
  leftIcon,
  leftActiveIcon,
  rightIcon,
  disabled,
  onClick,
  ...passProps
}) {
  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    delete props.onClick;
  }

  if (to) {
    Comp = Link;
    props.to = to;
  } else if (toActive) {
    Comp = NavLink;
    props.to = toActive;
  } else if (href) {
    Comp = 'a';
    props.href = href;
  }

  const classes = (navData) =>
    cx('wrapper', {
      [overrideStyleClass]: overrideStyleClass,
      [type]: type,
      [size]: size,
      active: navData.isActive,
      disabled,
    });

  return (
    <Comp
      className={Comp === NavLink ? (navData) => classes(navData) : classes({})}
      {...props}
    >
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      {leftActiveIcon && (
        <span className={cx('active-icon')}>{leftActiveIcon}</span>
      )}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  overrideStyleClass: PropTypes.string,
  to: PropTypes.string,
  toActive: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
  leftIcon: PropTypes.node,
  leftActiveIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
