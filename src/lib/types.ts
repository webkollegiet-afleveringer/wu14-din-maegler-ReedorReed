export interface TopLevel {
	energylabel: string;
	type: string;
	images: Floorplan[];
	gross: number;
	payment: number;
	price: number;
	city: City;
	cost: number;
	basementsize?: number;
	lotsize?: number;
	netto: number;
	postalcode: number;
	adress1: string;
	description: string;
	livingspace: number;
	agent: Agent;
	rooms: string;
	built: number;
	remodel?: number;
	floorplan: Floorplan;
	lat: number;
	long: number;
	users: User[];
	id: ID;
	adress2?: string;
}

export interface Agent {
	name: string;
	title: string;
	phone: string;
	email: string;
	image: Floorplan;
	description: string;
	id: string;
}

export interface Floorplan {
	name: string;
	size: number;
	url: string;
	formats: Formats;
	width: number;
	height: number;
	id: string;
}

export interface Formats {
	thumbnail: Thumbnail;
}

export interface Thumbnail {
	name: string;
	hash: string;
	ext: EXT;
	mime: MIME;
	width: number;
	height: number;
	size: number;
	path: null;
	url: string;
	provider_metadata: ProviderMetadata;
}

export enum EXT {
	Jpg = '.jpg'
}

export enum MIME {
	ImageJPEG = 'image/jpeg'
}

export interface ProviderMetadata {
	public_id: string;
	resource_type: ResourceType;
}

export enum ResourceType {
	Image = 'image'
}

export enum City {
	Lejre = 'Lejre',
	Roskilde = 'Roskilde'
}

export enum ID {
	The61572Ad4251A8A42Ec8Cb544 = '61572ad4251a8a42ec8cb544',
	The615D4F82Cc7Ab04508Bb8997 = '615d4f82cc7ab04508bb8997',
	The6163F006C72Bd02Bb41C89D8 = '6163f006c72bd02bb41c89d8',
	The6163F0F0C72Bd02Bb41C89D9 = '6163f0f0c72bd02bb41c89d9',
	The6163F2Def709Bf29Ac53288B = '6163f2def709bf29ac53288b',
	The6163F7Cdf709Bf29Ac53288C = '6163f7cdf709bf29ac53288c',
	The61656E6A8Ea2Ae0016B6C4D9 = '61656e6a8ea2ae0016b6c4d9',
	The6176575Db07Ca20016D62Ba1 = '6176575db07ca20016d62ba1',
	The61766138F7Af3C0016A37A51 = '61766138f7af3c0016a37a51',
	The6176640Bf7Af3C0016A37A58 = '6176640bf7af3c0016a37a58',
	The617665B5F7Af3C0016A37A60 = '617665b5f7af3c0016a37a60',
	The61766804F7Af3C0016A37A68 = '61766804f7af3c0016a37a68',
	The617669Cff7Af3C0016A37A71 = '617669cff7af3c0016a37a71',
	The61766C4Cf7Af3C0016A37A78 = '61766c4cf7af3c0016a37a78',
	The61766Eb7F7Af3C0016A37A7F = '61766eb7f7af3c0016a37a7f',
	The67374216092Bff004B02D9Ee = '67374216092bff004b02d9ee',
	The68B588767298C4006Da643F5 = '68b588767298c4006da643f5'
}

export interface User {
	confirmed: boolean;
	blocked: boolean;
	homes: ID[];
	username: string;
	email: string;
	role: Role;
	id: string;
}

export enum Role {
	The615719Daef359D22B01E1Aa7 = '615719daef359d22b01e1aa7'
}
