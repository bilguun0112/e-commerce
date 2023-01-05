function Frame4() {
    return (
        <div className="flex justify-between text-primary mx-14">
            <p>Need help? Call us: (+98) 0234 456 789</p>
            <div className="flex justify-between gap-5">
                <img src="images/location.png" alt="" />
                <p>Our store</p>
                <img src="images/group.svg" alt="" />
                <p>Track your order</p>
            </div>
        </div>
    )
}

function Frame11() {
    return (
        <div className="bg-common flex items-center justify-around h-24">
            <div className="flex items-center my-5 gap-20">
            <a href="http://" target="_blank" rel="noopener noreferrer"><img src="images/logo 1.png" alt="" /></a>
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="flex bg-white rounded-lg">
                    <input type="search" id="default-search" class="block w-80 h-14 pl-2 text-sm text-gray-900 rounded-lg bg-gray-50 dark:bg-white placeholder-primary dark:text-primary" placeholder="Search any things" required/>
                    <button type="submit" class="text-white bg-amber-500 hover:bg-amber-600 font-medium rounded-lg text-sm px-10 py-2 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">Search</button>
                </div>
                
            </div>
            <div className="flex gap-2 h-6">
                    <img src="images/user.png" alt="" />
                    <p className="mx-1 text-white">Sign in</p>
                    <img src="images/heart.png" alt="" />
                    <p className="bg-btnColor w-max rounded-full text-white px-1">0</p>
                    <img src="images/shopping-cart.png" alt="" />
                    <p className="bg-btnColor w-max rounded-full text-white px-1">0</p>
            </div>
        </div>
    )
}

export  {Frame4,Frame11}