import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
function Header() {
    return (
        <div className='header'>
            {/* LOGO ON the right */}
            <a href="#home"><img alt="Logo"src='http://pngimg.com/uploads/amazon/amazon_PNG25.png'className="header__logo" /></a>


            {/* Search Bar */}
            <div className="header__search">

                {/* Search Input */}
                <input className="header__searchInput" type="text" placeholder="Search"/>
                <SearchIcon className="header__searchIcon"/>
            </div>


            {/* Header nav */}
            <div className="header__nav"> 
            {/* header option 1 */}
            <div className="header__option">
                <span className="header__optionLineone">
                    Hello,Guest
                </span>
                <span className="header__optionLinetwo">
                    Sign In
                </span>
            </div>


            {/* header option 2 */}
            <div className="header__option">
                <span className="header__optionLineone">
                Returns 
                </span>
<span className="header__optionLinetwo">
                & Orders
                </span>
            </div>

            {/* header option 3 */}
            <div className="header__option">
                <span className="header__optionLineone">
                    Your
                </span>
<span className="header__optionLinetwo">
            Prime
                </span>
            </div>
        {/* Basket */}
        <div className="header__optionBasket">
        <ShoppingBasket/>
            <span className="header__optionLinetwo header__basketCount">0</span>
            </div>
            </div>
        </div>
    )
}

export default Header
