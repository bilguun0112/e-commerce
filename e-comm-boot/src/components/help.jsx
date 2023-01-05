function Help() {
    return (
        <div className="container d-flex align-items-center justify-content-between my-3">
            <p className="m-0"> Need help? Call us: (+98) 0234 456 789 </p>
            <div className="d-flex align-items-center gap-4">
                <img src="images/location.png" alt="" />
                <p className="m-0">Our store</p>
                <img src="images/group.svg" alt="" />
                <p className="m-0">Track your order</p>
            </div>
        </div>
    )
}

function Search() {
    return (
        <div className="container search text-light d-flex justify-content-between px-5 py-3">
            <div className="d-flex align-items-center gap-5">
                <img src="images/logo 1.png" alt="" />
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search any things" aria-label="Search any things" aria-describedby="button-addon2" />
                    <button class="btn btn-warning text-light" type="button" id="button-addon2">Search</button>
                </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
                <div className="d-flex gap-3">
                    <img src="images/user.png" alt="" />
                    <p className="m-0">Sign in</p>
                </div>
                <div className="d-flex gap-2">
                    <img src="images/heart.png" alt="" />
                    <p className="m-0 rounded-circle bg-warning px-1">0</p>
                </div>
                <div className="d-flex gap-2">
                    <img src="images/shopping-cart.png" alt="" />
                    <p className="m-0 rounded-circle bg-warning px-1">0</p>
                </div>
            </div>

        </div>
    )
}

export {Help,Search}