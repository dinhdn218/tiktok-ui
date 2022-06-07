import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <Image className={cx('avatar')} src="" alt="avatar" />
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
