import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://media.istockphoto.com/illustrations/king-lion-aslan-illustration-id458017717?k=20&m=458017717&s=612x612&w=0&h=4qOseLgTPV5ZOEoZD2scNzf-LQ7AWoRXtbidR61OhG8="
        alt="avatar"
      />
      <div className={cx('info')}>
        <h4 className={cx('user-name')}>
          <span>d.ngocdinh</span>
          <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
        </h4>
        <p className={cx('name')}>Đinh Ngọc Định</p>
      </div>
    </div>
  );
}

export default AccountItem;
