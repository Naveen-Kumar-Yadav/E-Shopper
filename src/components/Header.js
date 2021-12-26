import React, { Component } from 'react'
import{ Link} from 'react-router-dom'

export class Header extends Component {
    render() { 
        return (
            <div>
               <header id="header">
		<div className="header_top">
			<div className="container">
				<div className="row">
					<div className="col-sm-6">
						<div className="contactinfo">
							<ul className="nav nav-pills">
								<li><Link to="#"><i className="fa fa-phone"></i> +7256678890</Link></li>
								<li><Link to="#"><i className="fa fa-envelope"></i> infonkdeep.com</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="social-icons pull-right">
							<ul className="nav navbar-nav">
								<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
								<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
								<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
								<li><Link to="#"><i className="fa fa-dribbble"></i></Link></li>
								<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div className="header-middle">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="logo pull-left">
							<Link to="index.html"><img src="images/home/logo.png" alt="" /></Link>
						</div>
						<div className="btn-group pull-right">
							<div className="btn-group">
								<button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
									INDIA
									<span className="caret"></span>
								</button>
								<ul className="dropdown-menu">
									<li><Link to="#">Canada</Link></li>
									<li><Link to="#">UK</Link></li>
								</ul>
							</div>
							
							<div className="btn-group">
								<button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
									RUPEES
									<span className="caret"></span>
								</button>
								<ul className="dropdown-menu">
									<li><Link to="#">Canadian Dollar</Link></li>
									<li><Link to="#">Pound</Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-sm-8">
						<div className="shop-menu pull-right">
							<ul className="nav navbar-nav">
								<li><Link to="#"><i className="fa fa-user"></i> Account</Link></li>
								<li><Link to="#"><i className="fa fa-star"></i> Wishlist</Link></li>
								<li><Link to="checkout.html"><i className="fa fa-crosshairs"></i> Checkout</Link></li>
								<li><Link to="cart.html"><i className="fa fa-shopping-cart"></i> Cart</Link></li>
								<li><Link to="/login"><i className="fa fa-lock"></i> Login</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	
		<div className="header-bottom">
			<div className="container">
				<div className="row">
					<div className="col-sm-9">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						</div>
						<div className="mainmenu pull-left">
							<ul className="nav navbar-nav collapse navbar-collapse">
								<li><Link to="/" className="active">Home</Link></li>
							
								<li><Link to="/contact-us">Contact</Link></li>
								<li><Link to="/Posts">Posts</Link></li>
								<li><Link to="/Users">Users</Link></li>
								<li><Link to="/forms">Form </Link></li>

							</ul>
						</div>
					</div>
					<div className="col-sm-3">
						<div className="search_box pull-right">
							<input type="text" placeholder="Search"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
            </div>
        )
    }
}

export default Header;
