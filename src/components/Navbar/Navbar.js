import React from 'react';
import like from '../../assets/like.png';
import liked from '../../assets/liked.png';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='/'>Beautiful Islam</a></li>
                        <li><a href='*'>Facebook Page</a></li>
                        <li><a href='/#about'>About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a href='*' className="btn btn-ghost normal-case text-xl">Beautiful Islam</a>
            </div>
            <div className="navbar-end">
                <label className="swap swap-rotate">
                    <input type="checkbox" />
                    <img className="swap-on fill-current w-7 h-7 mr-3" src={like} alt='Like'></img>
                    <img className="swap-off fill-current w-7 h-7 mr-3" src={liked} alt='Liked'></img>
                </label>
            </div>
        </div>
    );
};

export default Navbar;