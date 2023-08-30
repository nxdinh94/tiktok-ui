import images from '~/assets/images';
import { Wrapper as ProperWrapper } from '~/components/Popper';
import styles from './Header.module.scss'; //return an object

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind'; //viet className duoi dang ab-cd
import { useEffect, useState } from 'react';
import AccountItem from '~/components/AccountItem';
const cx = classNames.bind(styles);

function Header() {
    // console.log('ss',images.logo);
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResults([1, 2]);
        }, 3000);
    });
    return (
        <header className={cx(styles.wrapper)}>
            <div className={cx(styles.inner)}>
                <div className={cx(styles.logo)}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResults.length > 0}
                    render={(attrs) => (
                        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                            <ProperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                            </ProperWrapper>
                        </div>
                    )}
                >
                    <div className={cx(styles.search)}>
                        <input placeholder="Search accounts and videos" spellCheck="false" />
                        <button className={cx(styles.clear)}>
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
