import Footer from '#/components/Footer';
import HouseCard from '#/components/HouseCard';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/propertyList')({
	component: RouteComponent
});

function RouteComponent() {
	return (
		<section>
			<div className="flex h-fit min-h-48 items-center bg-[url('/banner.png')] bg-cover bg-center mb-20">
				<article className="flex h-48 w-full flex-col items-center justify-center gap-4 bg-[#33485C]/90 bg-blend-multiply md:flex-row md:gap-8r">
					<h2 className="head-01 text-general-color1">Boliger til salg</h2>
				</article>
			</div>
			<article className="px-50 mx-18.75">
				<h2 className="text-heading-color2 head-04 font-medium mb-5">
					<span className="border-b-4 border-primary-color1 py-1">Søg</span> efter dit
					drømmehus
				</h2>
				<div className="border-shape-color1 bg-general-color1 mb-10">
					<div className="flex gap-20">
						<div>
							<p className="text-paragraph-color1para-02 mb-2">Ejendomstype</p>
							<select
								name="ejendomstype"
								className="border-[#D3DEE8] border rounded p-3 w-75 text-paragraph-color2 para-02">
								<option value="ejendomstype" selected>
									Ejendomstype
								</option>
								<option value="villa">Villa</option>
								<option value="landejendom">Landejendom</option>
								<option value="ejerlejlighed">Ejerlejlighed</option>
								<option value="byhus">Byhus</option>
							</select>
						</div>
						<div>
							<p className="text-paragraph-color1para-02 mb-5">Pris-interval</p>
							<div className="flex items-center gap-0">
								<input
									value="0"
									type="range"
									min="0"
									max="12000000"
									className="w-64 h-px bg-shape-color1 appearance-none cursor-pointer"></input>
								<input
									value="0"
									type="range"
									min="-12000000"
									max="0"
									className="w-64 h-px bg-shape-color1 appearance-none cursor-pointer"></input>
							</div>
							<div className="flex w-lg justify-between mt-3">
								<p className="para-02 text-paragraph-color2">0 kr.</p>
								<p className="para-02 text-paragraph-color2">12.000.000 kr.</p>
							</div>
						</div>
					</div>
				</div>
			</article>
			<div className="mb-30 drop-shadow-lg drop-shadow-[#0073E109]">
				<HouseCard limit={8} />
			</div>
			<Footer />
		</section>
	);
}
