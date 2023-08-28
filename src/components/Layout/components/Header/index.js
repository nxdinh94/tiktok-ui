import classNames from 'classnames/bind'; //viet className duoi dang ab-cd
import styles from './Header.module.scss'; //return an object

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx(styles.wrapper)}>
            <div className={cx('inner')}>
                {/* logo */}
                {/* search */}
            </div>
        </header>
    );
}

export default Header;
