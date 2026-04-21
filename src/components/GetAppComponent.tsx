import { Button } from './ui/Button';
import { PiGooglePlayLogoFill } from 'react-icons/pi';
import { FaApple } from 'react-icons/fa';

export default function GetAppComponent() {
	return (
		<section className="bg-primary-color1">
			<div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] items-center gap-10 px-6 md:px-12 md:pt-16">
				<article className="max-w-xl">
					<h2 className="head-01 text-general-color1">
						Hold dig opdateret på salgsprocessen
					</h2>

					<p className="para-01 text-general-color1 mt-6">
						Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den
						ansvarlige mægler eller butik med vores app. Her kan du også se
						statistik på interessen for din bolig i alle vores salgskanaler.
					</p>

					<div className="mt-8 flex flex-wrap gap-4">
						<Button className="flex bg-general-color1 button-font-01 text-primary-color1 justify-center items-center gap-1 hover:bg-general-color1">
							<PiGooglePlayLogoFill size={24} className="text-primary-color1" />
							Google Play
						</Button>
						<Button className="flex bg-primary-color1 button-font-01 text-general-color1 justify-center items-center gap-1 border border-general-color1 hover:bg-primary-color1">
							<FaApple size={24} />
							Apple Store
						</Button>
					</div>
				</article>

				<figure className="justify-self-end self-end md:-mr-10">
					<img
						src="/phones.png"
						alt="two iPhones"
						className="w-[320px] md:w-110 max-w-none"
					/>
				</figure>
			</div>
		</section>
	);
}
