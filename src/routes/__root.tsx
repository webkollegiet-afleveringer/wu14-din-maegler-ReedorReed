import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';

import '../styles.css';
import Header from '#/components/Header';
import About from '#/components/About';
import SelectHomes from '#/components/SelectHomes';

export const Route = createRootRoute({
	component: RootComponent
});

function RootComponent() {
	return (
		<>
			<Header />
			<Outlet />
			<About />
			<SelectHomes />
			<TanStackDevtools
				config={{
					position: 'bottom-right'
				}}
				plugins={[
					{
						name: 'TanStack Router',
						render: <TanStackRouterDevtoolsPanel />
					}
				]}
			/>
		</>
	);
}
