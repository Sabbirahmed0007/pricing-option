import React from 'react';

const Menus = ({ menu }) => {
    // console.log(menu);
    
    return (
        <div>
            <li className=' p-1 shadow-lg w-full my-1'><a href={menu.path}>{menu.menu}</a></li> 
        </div>
    );
};

export default Menus;