import { useNavigate } from "react-router-dom"


export default function SignIn() {

    const navigate = useNavigate()
    function Submit(e) {
        e.preventDefault();
        navigate('/', { replace: true, state: { bookName: "Fake Title" } })

    }
    return (
        <div style={{
            paddingTop: "25vh"
        }}>
            <form className="container w-25" onSubmit={Submit}>
                <h3>Sign In</h3>
                <div className="mb-3">
                    <label>Name*</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-3">
                    <label>Email address*</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-3">
                    <label>Password*</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Create a password"
                    />
                    <div style={{ color: "#667085", paddingTop: "6px" }}>Must be at least 8 characters.</div>
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn" style={{ backgroundColor: "#7F56D9", color: "#fff", fontWeight: "600" }}>
                        Create account
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </div >

    )
}