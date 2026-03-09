import React, { use, useState } from 'react';
import Menus from './Menus';
import { Menu, X } from 'lucide-react';

const menuJson = async () => {
    const response = await fetch(`/menu.json`);

    return response.json();
}

const menuPromise = menuJson();

const NavbarRaw = () => {

    const [openMenu, setOpneMenu] = useState(false);

    const menus = use(menuPromise);
    console.log(menus);
    

    const links = menus.map(menu=><Menus menu={menu} key={menu.id}></Menus>)


    return (
        <div className='flex justify-between items-center mx-3 py-3'>
            <span className='md:hidden relative' onClick={()=>setOpneMenu(!openMenu)}>
                {openMenu ? <X></X> : <Menu></Menu>}
                <ul className={`absolute duration-1000 text-black bg-slate-300  w-36 rounded-md  ${openMenu?'top-10':'-top-60'}`}>
                    {links}
                </ul>

            </span>
            <h1>My Logo</h1>
           
            <ul className='  items-center justify-around gap-4 hidden lg:flex'>
                {links}
            </ul>

            <div>
                <button className='btn btn-ghost btn-sm'>Sign</button>
            </div>
            
        </div>
    );
};

export default NavbarRaw;