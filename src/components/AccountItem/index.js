import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/371120437_691417579696725_6532761100177685194_n.jpg?stp=dst-jpg_p843x403&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=58lqm1j0VoAAX9W8PV3&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDPuO8nMnAX8sNF4cERX4qKDoksgDUS_FWETyondOhqLw&oe=64F4255B"
                alt="Dinh"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('blue-tick')} icon={faCheckCircle} />
                </p>
            </div>
        </div>
    );
}

export default AccountItem;
