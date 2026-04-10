import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva('', {
	variants: {
		variant: {
			default:
				'bg-primary-color1 text-general-color1 hover:bg-background-color3',
			socialG:
				'bg-general-color3  text-general-color1 hover:bg-primary-color1 hover:text-white',
			socialF:
				'bg-#3B5999  text-general-color1 hover:bg-primary-color1 hover:text-white'
		},
		size: {
			default: 'h-12 px-4 py-2 w-50',
			sm: 'h-12 px-3 py-1 w-30',
			md: 'h-15 w-43 px-3 py-1',
			lg: 'h-15 px-6 py-3 w-135'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

function Button({
	className,
	variant = 'default',
	size = 'default',
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	return (
		<button
			data-slot="button"
			data-variant={variant}
			data-size={size}
			className={
				cn(buttonVariants({ variant, size, className })) + ' cursor-pointer'
			}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
