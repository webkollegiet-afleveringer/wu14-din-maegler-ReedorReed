import { FaArrowRight } from 'react-icons/fa6';

export default function Subscribe() {
	return (
		<section className="flex h-fit min-h-64 items-center bg-[url('/subscribe-bg.png')] bg-cover bg-center">
			<article className="flex h-64 w-full flex-col items-center justify-center gap-4 bg-[#455463]/95 bg-blend-multiply md:flex-row md:gap-8r">
				<div className="w-130">
					<h2 className="head-02 text-general-color1 font-bold max-w-2xl">
						Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet
					</h2>
				</div>
				<div className="flex">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Indtast din emailadresse"
						className="bg-general-color1 p-5 w-80 rounded-l-sm"
					/>
					<button
						type="button"
						className="bg-general-color1 w-20 flex justify-center items-center rounded-r-sm cursor-pointer">
						<FaArrowRight className="text-primary-color1 text-2xl" />
					</button>
				</div>
			</article>
		</section>
	);
}
