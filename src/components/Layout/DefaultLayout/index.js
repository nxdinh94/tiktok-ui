import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss'
import SideBar from './SideBar';

import classNames from 'classnames';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx(styles.wrapper)}>
            <Header />
            <div className={cx(styles.container)}>
                <SideBar />
                <div className={cx(styles.content)}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
