import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind'; //viet className duoi dang ab-cd
import { Wrapper as ProperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header.js';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultF = ()=>{}
function Menu({ children, items = [], onChange = defaultF }) {
    const [history, setHistory] = useState([{ data: items }]); //data = items
    const current = history[history.length - 1];
    // console.log('items', history);
    // console.log('current', current);
    const renderItems = () => {
        return current.data.map((item, index) => {
            let isParent = !!item.children; //return boolean
            return <MenuItem key={index} data={item} onClick={() => {
                if(isParent){
                    setHistory(preHis => [...preHis, item.children]);
                }else {
                    onChange(item);
                }
            }}/>;
        });
    };

    return (
        <Tippy
            interactive
            delay={[100, 200]}
            offset={[12 , 8]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu')} tabIndex="-1" {...attrs}>
                    <ProperWrapper className={cx('menu-popper')}>
                        {history.length> 1 && <Header title="Languages" onBack={() => {
                            setHistory(preHis => preHis.slice(0, preHis.length-1))
                        }}/>}
                        {renderItems()}
                    </ProperWrapper>
                </div>
            )}
            onHide={() => setHistory(preHis => preHis.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
