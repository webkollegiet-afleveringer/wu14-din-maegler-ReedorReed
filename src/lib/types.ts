// Auth
export interface AuthResponse {
	jwt: string;
	user: User;
}

export interface User {
	id: string;
	username: string;
	email: string;
	confirmed: boolean;
	blocked: boolean;
	role: { id: string };
	homes: string[];
}

// Home
export interface Home {
	id: string;
	energylabel: string;
	type: 'Ejerlejlighed' | 'Villa' | 'Landejendom' | 'Byhus';
	images: Image[];
	gross: number;
	payment: number;
	price: number;
	city: string;
	cost: number;
	basementsize?: number;
	lotsize?: number;
	netto: number;
	postalcode: number;
	adress1: string;
	adress2?: string;
	description: string;
	livingspace: number;
	agent: Agent;
	rooms: string;
	built: number;
	remodel?: number;
	floorplan: Image;
	lat: number;
	long: number;
	users: User[];
}

// Agent
export interface Agent {
	id: string;
	name: string;
	title: string;
	phone: string;
	email: string;
	image: Image;
	description: string;
}

// Image
export interface Image {
	name: string;
	size: number;
	url: string;
	formats: {
		thumbnail: {
			url: string;
			width: number;
			height: number;
		};
	};
	width: number;
	height: number;
	id: string;
}

// API params
export interface HomesParams {
	_limit?: number;
	_start?: number;
	type_eq?: Home['type'];
	price_gte?: number;
	price_lte?: number;
}

export interface AgentsParams {
	_limit?: number;
}
