const Signup = () => {
    return (
        <div className="login-signup-form animated fadeInDown">
          <div className="form">
            <form onSubmit={onSubmit}>
              <h1 className="title">Signup for Free</h1>
              <input ref={nameRef} type="text" placeholder="Full Name"/>
              <input ref={emailRef} type="email" placeholder="Email Address"/>
              <input ref={passwordRef} type="password" placeholder="Password"/>
              <input ref={passwordConfirmationRef} type="password" placeholder="Repeat Password"/>
              <button className="btn btn-block">Signup</button>
              <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
            </form>
          </div>
        </div>
      )
}

export default Signup
