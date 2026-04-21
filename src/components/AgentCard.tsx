import { useEffect, useState } from 'react';
import { getAgents } from '../lib/api';
import type { Agent } from '#/lib/types';
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import { Link } from '@tanstack/react-router';

type AgentCardProps = {
  limit?: number;
};

export default function AgentCard({ limit = 3 }: AgentCardProps) {
	const [agents, setAgents] = useState<Agent[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const agentsData = await getAgents({ _limit: limit });
				setAgents(agentsData);
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
		<div>
			<div className="grid grid-cols-3 gap-7.5">
				{agents.map((agent) => (
					<div
						key={agent.id}
						className="bg-general-color1 w-85 border border-shape-color1 drop-shadow-lg drop-shadow-[#0073E109]">
						<figure>
							<img src={agent.image?.url} />
						</figure>
						<article className="flex flex-col justify-center items-center p-4">
							<h2 className="head-03 text-heading-color2 mb-1">{agent.name}</h2>
							<p className="para-01 text-paragraph-color2 mb-4">
								{agent.title}
							</p>
							<div className="flex gap-4">
								<Link to="mailto:4000@dinmaegler.com">
									<FaEnvelope size={16} className="text-heading-color1" />
								</Link>
								<Link to="https://linkedin.com">
									<FaLinkedinIn size={16} className="text-heading-color1" />
								</Link>
							</div>
						</article>
					</div>
				))}
			</div>
		</div>
	);
}
