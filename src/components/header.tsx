import { Link } from '@tanstack/react-router';
import logo from '../assets/logo.svg';
import { FaPaperPlane, FaUser, FaPhoneAlt } from 'react-icons/fa';

export default function Header() {
	return (
		<>
			<header className="bg-primary-color1 py-2">
				<div className="flex justify-between items-center max-w-5xl mx-auto">
					<div className="flex items-center gap-4 py-2">
						<div className="flex items-center gap-2">
							{' '}
							<FaPaperPlane className="text-general-color1" />
							<Link
								to="mailto:4000@dinmaegler.com"
								className="para-01 text-general-color1">
								4000@dinmaegler.com
							</Link>
						</div>
						<div className="flex items-center gap-2">
							<FaPhoneAlt className="text-general-color1" />
							<Link to="tel:4000" className="para-01 text-general-color1">
								+45 7070 4000
							</Link>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<FaUser className="text-general-color1" />
						<Link to="/login" className="para-01 text-general-color1">
							Log ind
						</Link>
					</div>
				</div>
			</header>
			<nav className="flex justify-between items-center py-6 max-w-5xl mx-auto">
				<Link to="/">
					{' '}
					<figure>
						<img src={logo} alt="Logo" />
					</figure>
				</Link>
				<div className="flex gap-10.25">
					<Link to="/boliger">Boliger til salg</Link>
					<Link to="/maeglere">Mæglere</Link>
					<Link to="/favorites">Mine Favoritter</Link>
					<Link to="/contact">Kontakt os</Link>
				</div>
			</nav>
		</>
	);
}
