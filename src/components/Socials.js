import React, { useContext } from 'react';
//import icons
import {
    ImFacebook,
    ImTwitter,
    ImPinterest,
    ImInstagram,
    ImYoutube,
} from 'react-icons/im';
//import cursor context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
    const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
    return (
        <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className='hidden xl:flex ml-24'
        >
            <ul className='flex gap-x-4 '>
                <li>
                    <a href='http://www.facebook.com' target='_blank'>
                        <ImFacebook />
                    </a>
                </li>
                <li>
                    <a href='http://www.twitter.com' target='_blank'>
                        <ImTwitter />
                    </a>
                </li>
                <li>
                    <a href='http://www.pinterest.com' target='_blank'>
                        <ImPinterest />
                    </a>
                </li>
                <li>
                    <a href='http://www.instagram.com' target='_blank'>
                        <ImInstagram />
                    </a>
                </li>
                <li>
                    <a href='http://www.youtube.com' target='_blank'>
                        <ImYoutube />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Socials;
