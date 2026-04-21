import type {
	AuthResponse,
	HomesParams,
	AgentsParams,
	Home,
	Agent,
	User
} from './types';

const BASE_URL = 'https://dinmaegler.onrender.com';

// Auth
export async function login(
	identifier: string,
	password: string
): Promise<AuthResponse> {
	const res = await fetch(`${BASE_URL}/auth/local`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ identifier, password })
	});
	if (!res.ok) throw new Error('Login failed');
	return res.json();
}

export async function getCurrentUser(token: string): Promise<User> {
	const res = await fetch(`${BASE_URL}/users/me`, {
		headers: { Authorization: `Bearer ${token}` }
	});
	if (!res.ok) throw new Error('Failed to get user');
	return res.json();
}

// Homes
export async function getHomes(params?: HomesParams): Promise<Home[]> {
	const query = new URLSearchParams();
	if (params?._limit) query.append('_limit', params?._limit.toString());
	if (params?._start) query.append('_start', params?._start.toString());
	if (params?.type_eq) query.append('type_eq', params?.type_eq);
	if (params?.price_gte)
		query.append('price_gte', params?.price_gte.toString());
	if (params?.price_lte)
		query.append('price_lte', params?.price_lte.toString());

	const res = await fetch(`${BASE_URL}/homes?${query}`);
	if (!res.ok) throw new Error('Failed to fetch homes');
	return res.json();
}

export async function getHomeById(id: string): Promise<Home> {
	const res = await fetch(`${BASE_URL}/homes/${id}`);
	if (!res.ok) throw new Error('Failed to fetch home');
	return res.json();
}

export async function getHomesCount(): Promise<{ count: number }> {
	const res = await fetch(`${BASE_URL}/homes/count`);
	return res.json();
}

// Agents
export async function getAgents(params?: AgentsParams): Promise<Agent[]> {
	const query = params?._limit ? `?_limit=${params._limit}` : '';
	const res = await fetch(`${BASE_URL}/agents/${query}`);
	if (!res.ok) throw new Error('Failed to fetch agents');
	return res.json();
}

export async function getAgentById(id: string): Promise<Agent> {
	const res = await fetch(`${BASE_URL}/agents${id}`);
	if (!res.ok) throw new Error('Failed to fetch agent');
	return res.json();
}

// Favorites
export async function updateFavorites(
	token: string,
	userId: string,
	homeIds: string[]
): Promise<User> {
	const res = await fetch(`${BASE_URL}/users/${userId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify({ homes: homeIds })
	});
	if (!res.ok) throw new Error('Failed to update favorites');
	return res.json();
}

// Subscribers
export async function subscribe(
	email: string
): Promise<{ id: number; email: string }> {
	const res = await fetch(`${BASE_URL}/subscribers`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email })
	});
	if (!res.ok) throw new Error('Failed to subscribe');
	return res.json();
}

export async function unsubscribe(email: string): Promise<unknown> {
	const res = await fetch(
		`${BASE_URL}/subscribers/${encodeURIComponent(email)}`,
		{
			method: 'DELETE'
		}
	);
	return res.json();
}
