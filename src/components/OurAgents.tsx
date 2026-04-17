import AgentCard from './AgentCard';
import { Button } from './ui/Button';

export default function OurAgents() {
	return (
		<section className="bg-general-color1 flex flex-col justify-center items-center gap-14">
			<article className="flex flex-col gap-5 max-w-2xl text-center mt-30">
				<h2 className="head-01 text-heading-color1">
					Mød vores engagerede medarbejdere
				</h2>
				<p className="para-01 text-paragraph-color1">
					Din Mægler er garant for altid veluddannet assistance i dit boligsalg.
					Kontakt en af vores medarbejdere.
				</p>
            </article>
            <AgentCard />
			<Button className="mb-30">Se alle mæglere</Button>
		</section>
	);
}
