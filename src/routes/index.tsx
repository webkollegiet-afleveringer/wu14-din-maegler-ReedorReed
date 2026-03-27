import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: App
});

function App() {
	return (
		<div>
			<p className="para-italic">Hello world</p>
		</div>
	);
}
