export type Header = {
	logos: { src: string; href: string }[];
	partners: { title: string; href: string }[];
	nav: {
		type: 'normal' | 'content' | 'search' | 'switch' | 'exit';
		title?: string;
		href?: string | string[];
		content?: { title: string; href: string }[];
	}[];
};

export type Footer = {
	social: string[];
	logo: string;
	contact: { [key: string]: string };
	copyright: string;
};

export interface ImageData {
	src: string;
	alt: string;
}

export interface HeroText {
	f1: string;
	f2?: string;
	f3?: string;
	f4?: string;
}

export interface HeroContentData {
	title: string | HeroText;
	paragraphs: HeroText[];
	image: ImageData;
}

export type HeroBanner = {
	type: 'banner';
	id: 'home';
	data: { image: ImageData };
};

export type HeroContent = {
	type: 'content';
	reverse: boolean;
	id: 'P' | 'D' | 'S' | 'A';
	data: HeroContentData;
};

export type HeroIcon = {
	type: 'icon';
	id: 'FAQ' | 'Search';
	data: { title: string; image: ImageData };
};

export type HeroType = HeroBanner | HeroContent | HeroIcon;

export type Cards = {
	title: string;
	desc: string;
	link: [string, string];
}[];

export type Survey = {
	title: string;
	para: string[];
	button: string;
	image: string;
	link: string;
};

export type Newsletter = {
	title: string;
	para: string;
	button: string;
};

export type AboutSOGC = {
	image: string;
	title: string;
	para: string[];
};

export type Search = {
	title: string;
	placeholder: string;
	button: string;
};

export type Bibliography = { title: string; href: string }[];

export type Outline = {
	subpages: {
		href: string;
		title: string;
		modules: { [key: string]: string };
	}[];
	resources?: {
		href: string;
		title: string;
		modules: { [key: string]: string };
	}[];
};

type ContentType = {
	type: string[];
	data: (string | string[] | string[][])[];
};

export type ModuleType = {
	id: string;
	title: string;
	content: ContentType;
};

export type Modules = ModuleType[];
