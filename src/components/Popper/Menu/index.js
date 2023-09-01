import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind'; //viet className duoi dang ab-cd
import {Wrapper as ProperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {

    const renderItems = () => {
        return items.map((item, index)=>(
            <MenuItem key={index} data={item}/>
        ));
    }

    return (
        <Tippy
            interactive
            delay={[100,200]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu')} tabIndex="-1" {...attrs}>
                    <ProperWrapper className = {cx('menu-popper')}>{renderItems()}</ProperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
