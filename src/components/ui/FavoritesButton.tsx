import { useState } from 'react';

export default function FavoritesButton() {
	const [isFavorite, setIsFavorite] = useState(false);

	return (
		<div>
			<button
				type="button"
				onClick={() => setIsFavorite((prev) => !prev)}
				aria-pressed={isFavorite}
				aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
				className="h-9 w-9 rounded-full bg-general-color1/95 flex justify-center items-center cursor-pointer">
				<img
					src={isFavorite ? '/heart-filled-icon.svg' : '/heart-icon.svg'}
					alt=""
					className="h-5 w-5"
				/>
			</button>
		</div>
	);
}
