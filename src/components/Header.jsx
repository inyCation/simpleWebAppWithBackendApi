import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {FaVolleyballBall} from "react-icons/fa"
import { Link } from  "react-router-dom"


const Header = () => {
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3333/nav");
                setMenuList(response.data);
                console.log(response.data);
            } catch (e) {
                console.log(e);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <nav>
                <div className="logo"><FaVolleyballBall /></div>
                <div className="menu">
                    {menuList.map((e, i) => (
                        <Link to={`${e.link}`}  className={`menuList ${e.menu}`}>
                            {e.menu}
                            <div className='subMenu'>{
                                e.subMenu.subList.map((element,i) => (
                                    <div  >{element}</div>
                                ))
                            }</div>
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Header;
