import styles from './Wrapper.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Wrapper({ children, overrideStyleClass }) {
  return (
    <div
      className={cx('wrapper', {
        [overrideStyleClass]: overrideStyleClass,
      })}
    >
      {children}
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  overrideStyleClass: PropTypes.string,
};

export default Wrapper;
