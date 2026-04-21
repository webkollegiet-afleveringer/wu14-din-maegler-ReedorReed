import AgentCard from '#/components/AgentCard';
import Footer from '#/components/Footer';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/coWorkers')({
	component: RouteComponent
});

function RouteComponent() {
	return (
		<section>
			{' '}
			<div className="flex h-fit min-h-48 items-center bg-[url('/banner.png')] bg-cover bg-center mb-20">
				<article className="flex h-48 w-full flex-col items-center justify-center gap-4 bg-[#33485C]/90 bg-blend-multiply md:flex-row md:gap-8r">
					<h2 className="head-01 text-general-color1">
						Medarbejdere i Roskilde
					</h2>
				</article>
			</div>
			<div className='flex flex-col px-60 mb-45'>
				<AgentCard limit={6} />
      </div>
      <Footer />
		</section>
	);
}
