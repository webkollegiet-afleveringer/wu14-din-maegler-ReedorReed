import { Button } from './ui/Button';

export default function SelectHomes() {
	return (
		<section className='bg-background-color1 flex flex-col justify-center items-center gap-14'>
			<article className="flex flex-col gap-5 max-w-2xl text-center">
				<h2 className='head-01 text-heading-color1'>Udvalgte Boliger</h2>
				<p className='para-01 text-paragraph-color1'>
					There are many variations of passages of Lorem Ipsum available but the
					this in majority have suffered alteration in some
				</p>
			</article>
			<div></div>
			<Button>Se alle boliger</Button>
		</section>
	);
}
