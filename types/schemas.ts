export interface UserSchema {
	username: string;
	signup_date: number;
	user_id: number;
	avatar: string;
	themes: string[];
}

export interface ThemeSchema {
	name: string;
	author: string;
	anime: string[];
	manga: string[];
	comment: string;
	source: string;
	tags: string[];
	theme_id: number;
	user_id: number;
	preview: string;
}

export interface FileSchema {
	theme_id: number;
	css: string;
	background: string;
	cover: string;
}
