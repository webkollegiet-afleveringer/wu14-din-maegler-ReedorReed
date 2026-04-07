export default function About() {
	return (
		<section className="flex flex-col">
			<article className="flex gap-4">
				<figure>
					<img
						src="/family-moving-using-boxes.png"
						alt="Family moving using boxes"
					/>
				</figure>
				<div>
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

					<div className="flex">
						<figure className="flex">
							<img src="/boliger-solgt-icon.svg" alt="Homes Sold" />
							<figcaption>
								<h2>4829</h2>
								<p>boliger solgt</p>
							</figcaption>
						</figure>
						<figure className="flex">
							<img src="/boliger-til-salg-icon.svg" alt="Homes for Sale" />
							<figcaption>
								<h2>158</h2>
								<p>boliger til salg</p>
							</figcaption>
						</figure>
					</div>
				</div>
			</article>
			<div className="border-1 border-shape-color1 "></div>
			<div>
				<figure>
					<img src="/salgs-tjek-icon.svg" alt="Sales Check" />
					<figcaption>
						<h2>Bestil et salgs tjek</h2>
						<p>
							Med et Din Mægler Salgstjek bliver du opdateret på værdien af din
							bolig.
						</p>
					</figcaption>
				</figure>
				<figure>
					<img src="/butikker-icon.svg" alt="store location" />
					<figcaption>
						<h2>74 butikker</h2>
						<p>
							Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som
							er fordelt rundt om i Danmark.
						</p>
					</figcaption>
				</figure>
				<figure>
					<img src="/koeber-kartotek-icon.svg" alt="Buyer Catalog" />
					<figcaption>
						<h2>Tilmeld køberkartotek</h2>
						<p>
							Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden
							en ny bolig bliver annonceret.
						</p>
					</figcaption>
				</figure>
			</div>
		</section>
	);
}
