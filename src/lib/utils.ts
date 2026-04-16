import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getEnergyLabelClass(label: string): string {
	const colors: Record<string, string> = {
		A: 'bg-primary-color4 text-general-color1',
		B: 'bg-general-color5 text-general-color1',
		C: 'bg-general-color6 text-general-color1',
		D: 'bg-general-color7 text-general-color1'
	};

	return (
		colors[label.toLocaleUpperCase()] || 'bg-gray-500 text-color-general-color1'
	);
}
