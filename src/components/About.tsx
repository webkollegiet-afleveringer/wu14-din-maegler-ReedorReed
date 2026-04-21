export default function About() {
	return (
		<section className="flex flex-col max-w-7xl py-16 mx-auto">
			<article className="grid grid-cols-2 mb-16">
				<div className="shrink-0 lg:w-2/3">
					<div className="grid">
						<div className="border-primary col-start-1 row-start-1 transform-[translate(clamp(0.75rem,2vw,2rem),clamp(0.75rem,2vw,2rem))] [border-width:clamp(6px,1.5vw,12px)]" />

						<img
							src="/family-moving-using-boxes.png"
							alt="Familie i deres nye hjem"
							className="col-start-1 row-start-1 h-auto w-full object-cover"
						/>

						<div className="bg-primary-color1 col-start-1 row-start-1 flex h-[clamp(3rem,22vw,12rem)] w-[clamp(3rem,22vw,12rem)] transform-[translate(clamp(0.75rem,2vw,2rem),clamp(0.75rem,2vw,2rem))] flex-col items-center justify-center self-end justify-self-end text-center text-white">
							<span className="text-[clamp(1.75rem,6vw,3.75rem)] leading-none font-bold">
								38+
							</span>

							<span className="mt-1 text-[clamp(0.75rem,2.5vw,1.5rem)]">
								års mægler-
								<br />
								erfaring
							</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-3 max-w-lg">
					<h2 className="head-01 text-heading-color1">
						Vi har fulgt danskerne hjem i snart 4 årtier
					</h2>
					<h3 className="head-03 text-heading-color1">
						Det synes vi siger noget om os!
					</h3>
					<p className="para-01 text-paragraph-color1">
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has normal distribution.
					</p>
					<p className="para-01 text-paragraph-color1">
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout.
					</p>

					<div className="flex mx-auto gap-24 mt-8">
						<figure className="flex gap-5">
							<img
								src="/boliger-solgt-icon.svg"
								alt="Homes Sold"
								className="w-18"
							/>
							<figcaption>
								<h2 className="head-03 text-heading-color2 mb-2">4829</h2>
								<p className="para-01 text-paragraph-color1">boliger solgt</p>
							</figcaption>
						</figure>
						<figure className="flex gap-3">
							<img
								src="/boliger-til-salg-icon.svg"
								alt="Homes for Sale"
								className="w-18"
							/>
							<figcaption>
								<h2 className="head-03 text-heading-color2 mb-2">158</h2>
								<p className="para-01 text-paragraph-color1">
									boliger til salg
								</p>
							</figcaption>
						</figure>
					</div>
				</div>
			</article>
			<div className="border border-shape-color1 "></div>
			<div className="flex p-11 gap-8">
				<figure className="flex gap-3 items-start">
					<img src="/salgs-tjek-icon.svg" alt="Sales Check" className="w-12" />
					<figcaption className="flex flex-col gap-3">
						<h2 className="head-03 text-heading-color1">
							Bestil et salgs tjek
						</h2>
						<p className="para-01 text-paragraph-color1">
							Med et Din Mægler Salgstjek bliver du opdateret på værdien af din
							bolig.
						</p>
					</figcaption>
				</figure>
				<figure className="flex gap-3 items-start">
					<img src="/butikker-icon.svg" alt="store location" className="w-12" />
					<figcaption className="flex flex-col gap-3">
						<h2 className="head-03 text-heading-color1">74 butikker</h2>
						<p className="para-01 text-paragraph-color1">
							Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som
							er fordelt rundt om i Danmark.
						</p>
					</figcaption>
				</figure>
				<figure className="flex gap-3 items-start">
					<img
						src="/koeber-kartotek-icon.svg"
						alt="Buyer Catalog"
						className="w-12"
					/>
					<figcaption className="flex flex-col gap-3">
						<h2 className="head-03 text-heading-color1">
							Tilmeld køberkartotek
						</h2>
						<p className="para-01 text-paragraph-color1">
							Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden
							en ny bolig bliver annonceret.
						</p>
					</figcaption>
				</figure>
			</div>
		</section>
	);
}
