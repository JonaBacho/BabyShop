import {React, useState} from 'react';
import './Login.css'; // Assuming you have a CSS file for styling

const Login = () => {
	const [formData, setFormData] = useState({
		nom: '',
		sexe:'',
		matr: '',
		dateNaiss:'',
		idVille:'',
		mobile:'',
		whatsapp:'',
		creation:'',
		point:'',
		montantTontine:''
	  });
	  const [loginData, setLoginData] = useState({
		matr: '',
		nom:''
	  });
	
	  const handleChange = (e) => {
		setFormData({
		  ...formData,
		  [e.target.name]: e.target.value
		});
	  };
	  const handleLogin = (e) => {
		setLoginData({
		  ...loginData,
		  [e.target.name]: e.target.value
		});
	  };
	
	  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
		  const response = await fetch('/api/register', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		  });
		  const data = await response.json();
		  if (response.ok) {
			console.log('Registration successful', data);
		  } else {
			console.error('Registration failed', data);
		  }
		} catch (error) {
		  console.error('An error occurred', error);
		}
	  };
	  const handleLoginProcess = async (e) => {
		e.preventDefault();
		try {
		  const response = await fetch('/api/register', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		  });
		  const data = await response.json();
		  if (response.ok) {
			console.log('Login successful', data);
		  } else {
			console.error('Login failed', data);
		  }
		} catch (error) {
		  console.error('An error occurred', error);
		}
	  };
    return (
        <div className="main-bg">
            <h1>User authentication</h1>
            <div className="sub-main-w3">
                <div className="image-style" src="../../assets/images/login-images/pink.jpg"></div>
                <div className="vertical-tab">
                    <div id="section1" className="section-w3ls">
                        <input type="radio" name="sections" id="option1" defaultChecked />
                        <label htmlFor="option1" className="icon-left-w3pvt">
                            <span className="fa fa-user-circle" aria-hidden="true"></span>Login
                        </label>
                        <article>
                            <form action="#" method="post" onSubmit={handleLoginProcess}>
                                <h3 className="legend">Login Here</h3>
								<div className="input">
								        <span className="fa fa-user-o" aria-hidden="true"></span>
								        <input type="text" placeholder="Username" name="nom" required value={loginData.nom} onChange={handleLogin}/>
							        </div>
                                <div className="input">
                                    <span className="fa fa-envelope-o" aria-hidden="true"></span>
                                    <input type="email" placeholder="Email" name="email" required />
                                </div>
                                <div className="input">
                                    <span className="fa fa-key" aria-hidden="true"></span>
                                    <input type="password" placeholder="Password" name="matr"  required value={loginData.matr} onChange={handleLogin}/>
                                </div>
                                <button type="submit" className="btn btn-outline-info " onClick={handleLoginProcess}>Login</button>
                                <a href="#" className="bottom-text-w3ls">Forgot Password?</a>
                            </form>
                        </article>
                    </div>
                    <div id="section2" className="section-w3ls">
					            <input type="radio" name="sections" id="option2"/>
					            <label for="option2" className="icon-left-w3pvt"><span className="fa fa-pencil-square" aria-hidden="true"></span>Register</label>
					            <article>
						            <form action="#" method="post" onSubmit={handleSubmit}>
							            <h3 className="legend">Register Here</h3>
							            <div className="input">
								            <span className="fa fa-user-o" aria-hidden="true"></span>
								            <input type="text" placeholder="Username" name="nom" required value={formData.nom} onChange={handleChange}/>
							            </div>
							            <div className="input">
								            <span className="fa fa-key" aria-hidden="true"></span>
								            <input type="password" placeholder="Password" name="password" required />
							            </div>
							            <div className="input">
								            <span className="fa fa-key" aria-hidden="true"></span>
								            <input type="password" placeholder="Confirm Password" name="password" required />
							            </div>
										<div className="input">
								            <span className="fa fa-key" aria-hidden="true"></span>
								            <input type="text" placeholder="Birth date " name="dateNaiss" required  value={formData.dateNaiss} onChange={handleChange}/>
							            </div>
										<div className="input">
								            <span className="fa fa-key" aria-hidden="true"></span>
								            <input type="text" placeholder="Enter your city name" name="city" required />
							            </div>
										<div className="input">
								            <span className="fa fa-key" aria-hidden="true"></span>
								            <input type="telephone" placeholder="Telephone number" name="mobile" required value={formData.mobile} onChange={handleChange}/>
							            </div>
										<div className="input">
								            <span className="fa fa-key" aria-hidden="true"></span>
								            <input type="telephone" placeholder="WhatsApp number" name="whatsapp" required value={formData.whatsapp} onChange={handleChange}/>
							            </div>
							            <button type="submit" className="btn btn-outline-info submit">Register</button>
						            </form>
					            </article>
				            </div>
				          <div id="section3" className="section-w3ls">
					<input type="radio" name="sections" id="option3"/>
					<label for="option3" className="icon-left-w3pvt"><span className="fa fa-lock" aria-hidden="true"></span>Forgot Password?</label>
					<article>
						<form action="#" method="post">
							<h3 className="legend last">Reset Password</h3>
							<p className="para-style">Enter your email address below and we'll send you an email with instructions.</p>
							<p className="para-style-2"><strong>Need Help?</strong> Learn more about how to <a href="#">retrieve an existing
									account.</a></p>
							<div className="input">
								<span className="fa fa-envelope-o" aria-hidden="true"></span>
								<input type="email" placeholder="Email" name="email" required />
							</div>
							<button type="submit" className="btn btn-outline-info submit last-btn">Reset</button>
						</form>
					</article>
				</div>
                    {/* Other sections omitted for brevity */}
                </div>
                <div className="clear"></div>
            </div>
          
        </div>
    );
};

export default Login;