import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/auth/auth_action';
import { returnMessage } from '../../redux/actions/message/message_action';

function Header() {
	const dispatch = useDispatch();
	const globalState = useSelector((state) => state);
	const {
		auth: { user },
	} = globalState;

	const handleLogout = () => {
		dispatch(logout());
		dispatch(returnMessage('Logout Successful'));
	};

	React.useEffect(() => {
		const hamburger = document.querySelector('.hamburger');
		const menu = document.querySelector('.menu');
		const menu_links = document.querySelectorAll('.menu-link');
		menu_links.forEach((menu_link) => {
			menu_link.addEventListener('click', () => {
				menu.classList.remove('toogle-menu');
				hamburger.classList.remove('close');
			});
		});

		hamburger.addEventListener('click', function () {
			menu.classList.toggle('toogle-menu');
			this.classList.toggle('close');
		});
	}, []);
	return (
		<header>
			<Container>
				<nav class='nav'>
					<div class='branding'>
						<h2 className='m-0'>
							<Link to='/' class='branding-logo'>
								Blogs.
							</Link>
						</h2>
					</div>
					<label for='input-hamburger' class='hamburger '></label>
					<input type='checkbox' id='input-hamburger' hidden />
					<ul class='menu m-0 p-0'>
						<li>
							<Link to='/private' class='menu-link'>
								Get Private Page
							</Link>
						</li>

						{!user ? (
							<>
								<li>
									<Link to='/login' class='menu-link'>
										Login
									</Link>
								</li>

								<li>
									<Link to='/register' class='menu-link'>
										Register
									</Link>
								</li>
							</>
						) : (
							<>
								<li>
									<Link
										onClick={handleLogout}
										to='/'
										class='menu-link'>
										Logout
									</Link>
								</li>
								<li className='avatar-li'>
									<Link to='/user' class='menu-link'>
										<Avatar
											size='40'
											round={true}
											name={user.username}
										/>
									</Link>
								</li>
							</>
						)}
					</ul>
				</nav>
			</Container>
		</header>
	);
}

export default Header;
