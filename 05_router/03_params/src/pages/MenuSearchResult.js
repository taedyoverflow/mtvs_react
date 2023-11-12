import boxStyle from './Menu.module.css';
import {useSearchParams} from 'react-router-dom'
import {useState, useEffect} from 'react';
import MenuItem from '../components/MenuItem';
import { searchMenu } from '../apis/MenuAPIs';

function MenuSearchResult() {

    // console.log(useSearchParams()[0].get('menuName'));
    const [searchParam] = useSearchParams();
    const searchMenuName = searchParam.get('menuName');
    const [menuList, setMenuList] = useState([]);

    useEffect(
        () => {
            setMenuList(searchMenu(searchMenuName));
        },
        []
    );

    return (
        <>
            <h1>검색 결과야</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    );
}

export default MenuSearchResult;