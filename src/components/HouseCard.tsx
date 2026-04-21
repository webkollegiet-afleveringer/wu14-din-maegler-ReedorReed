import { useEffect, useState } from 'react';
import { getHomes, getHomesCount } from '../lib/api';
import type { Home } from '#/lib/types';
import { cn, getEnergyLabelClass } from '../lib/utils';
import FavoritesButton from './ui/FavoritesButton';

type HouseCardProps = {
	limit?: number;
};

export default function Card({ limit = 4 }: HouseCardProps) {
	const [homes, setHomes] = useState<Home[]>([]);
	const [count, setCount] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			setError(null);

			try {
				const [homesData, countData] = await Promise.all([
					getHomes({ _limit: limit }),
					getHomesCount()
				]);
				setHomes(homesData);
				setCount(countData.count);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Failed to load');
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, [limit]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<section className="flex w-full justify-center">
			<article className="grid grid-cols-2 grid-rows-2 gap-7.5">
				{homes.map((home) => (
					<div key={home.id} className="bg-general-color1 w-135 rounded-md">
						<figure className="relative">
							<img
								src={home.images[0]?.url}
								alt={home.adress1}
								className="w-full h-48 object-cover rounded-t-md"
							/>
							<figcaption className="absolute top-4 right-4 z-10">
								<FavoritesButton />
							</figcaption>
						</figure>

						<article className="p-6">
							<div>
								<h3 className="head-04">{home.adress1}</h3>
								<p className="para-02">
									{home.postalcode} {home.city}
								</p>
							</div>

							<div className="flex gap-1.5 items-end mb-4">
								<p className="para-06">{home.type} · </p>
								<p className="para-02">
									Ejerudgift: {home.cost.toLocaleString()} kr.
								</p>
							</div>

							<div className="border border-shape-color1"></div>

							<div className="flex mt-4 justify-between">
								<div className="flex gap-6.5">
									<div
										className={cn(
											'w-7.5 h-7.5 flex items-center justify-center',
											getEnergyLabelClass(home.energylabel)
										)}>
										{home.energylabel}
									</div>
									<p className="para-02">
										{home.rooms} værelser · {home.livingspace} m²
									</p>
								</div>
								<div>
									<p className="para-06">{home.price.toLocaleString()} kr.</p>
								</div>
							</div>
						</article>
					</div>
				))}
			</article>
		</section>
	);
}
