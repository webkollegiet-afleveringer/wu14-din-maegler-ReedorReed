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
			<div className="mb-30 drop-shadow-lg drop-shadow-[#0073E109]">
				<HouseCard limit={8} />
			</div>
			<Footer />
		</section>
	);
}
