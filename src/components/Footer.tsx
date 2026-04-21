import { Link } from '@tanstack/react-router';
import logo from '../assets/logo.svg';

export default function Footer() {
	return (
		<>
			<footer className="py-10 px-80 bg-[linear-gradient(to_bottom,var(--background-color1)_0%,var(--background-color1)_55%,var(--general-color1)_55%,var(--general-color1)_90%,var(--primary-color1)_90%,var(--primary-color1)_100%)]">
				<div>
					<figure className="flex flex-col max-w-180 gap-6">
						<img src={logo} alt="logo" className="max-w-70" />
						<figcaption>
							<p className="para-01 text-paragraph-color1">
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, by
								injected humour, or randomised words.
							</p>
						</figcaption>
					</figure>
				</div>
				<div className="grid grid-cols-2 grid-rows-2 gap-30  mt-15">
					<div className="p-12 bg-general-color1 w-max drop-shadow-xl drop-shadow-[#0073E112] row-span-3 max-h-108">
						<ul className="list-none flex flex-col gap-8">
							<li className="flex gap-3">
								{' '}
								<figure className=" bg-primary-color1 text-general-color1 rounded-[3rem] p-4">
									<img
										src="/phone-icon.svg"
										alt="Phone icon"
										className="w-6 h-6"
									/>
								</figure>
								<div>
									<p className="para-04 text-paragraph-color2">Ring til os</p>
									<a
										href="tel:+4570704000"
										className="button-font-01 text-paragraph-color1">
										+45 7070 4000
									</a>
								</div>
							</li>
							<li className="flex gap-3">
								{' '}
								<figure className="bg-primary-color1 text-general-color1 rounded-[3rem] p-4">
									<img
										src="/paper-plane.svg"
										alt="Paper plane icon"
										className="w-6 h-6"
									/>
								</figure>
								<div>
									<p className="para-04 text-paragraph-color2">Send en mail</p>
									<a
										href="mailto: 4000@dinmaegler.com"
										className="button-font-01 text-paragraph-color1">
										4000@dinmaegler.com
									</a>
								</div>
							</li>
							<li className="flex gap-3">
								{' '}
								<figure className="bg-primary-color1 text-general-color1 rounded-[3rem] p-4">
									<img
										src="/location-icon.svg"
										alt="Location icon"
										className="w-6 h-6"
									/>
								</figure>
								<div>
									<p className="para-04 text-paragraph-color2">Butik</p>
									<a href="#" className="button-font-01 text-paragraph-color1">
										Stændertorvet 78, 4000 Roskilde
									</a>
								</div>
							</li>

							<li>
								<p className="text-paragraph-color1 font-roboto text-[1.25rem]">
									Din Mægler Roskilde, er din <br />
									boligibutik i lokalområdet.
								</p>
							</li>
						</ul>
					</div>
					<nav>
						<h2 className="head-03 text-heading-color2">Quick Links</h2>
						<ul>
							<li className="para-01 text-paragraph-color1">
								<Link to="/">Boliger til salg</Link>
							</li>
							<li className="para-01 text-paragraph-color1">
								<Link to="/">Mæglere</Link>
							</li>
							<li className="para-01 text-paragraph-color1">
								<Link to="/">Kontakt os</Link>
							</li>
							<li className="para-01 text-paragraph-color1">
								<Link to="/">Log ind / bliv bruger</Link>
							</li>
						</ul>
					</nav>
					<div>
						<p className="para-02 text-paragraph-color2">Medlem af</p>
						<h2 className="head-01 text-paragraph-color2 uppercase">dms</h2>
						<p className="para-02 text-paragraph-color2">
							Dansk Mægler Sammenslutning
						</p>
					</div>
				</div>
				<div className="w-full flex justify-center items-center">
					<p className="para-01 text-general-color1 text-center">
						Layout By Jit Banik 2020{' '}
					</p>
				</div>
			</footer>
		</>
	);
}
