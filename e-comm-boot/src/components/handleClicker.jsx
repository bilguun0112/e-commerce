import React, { useState } from 'react';

const WishlistButton = ({ item }) => {
    const [wishlist, setWishlist] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [colored, setColored] = useState('red');

    const handleClick = () => {
        if (!clicked) {
            setWishlist([...wishlist, item]);
            setClicked(true);
            setColored('green');
        } else {
            setWishlist(wishlist.filter(i => i !== item));
            setClicked(false);
            setColored('red');
        }
    }
    return (
        <button onClick={handleClick()}>
            {clicked ? <img src="images/heart.png" alt="" style={{ backgroundColor: {colored}, borderRadius: "50%" }} className="p-2 " /> : 
            <img src="images/heart.png" alt="" style={{ backgroundColor: {colored}, borderRadius: "50%" }} className="p-2 " />}
        </button>
    );
};

export default WishlistButton;
