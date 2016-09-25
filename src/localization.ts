import English from './localization/english';

export interface Language {
	lend: string;
	borrow: string;
	settings: string;
	email: string;
	password: string;
	login: string;
	lendExplain: string;
	lendMore: string;
	add: string;
	logout: string;
}

interface Languages {
	[language: string]: Language;
}

class Localization {
	languages: Languages = {
		english: English
	};
	private _language: string;
	
	constructor() {
		this.language = 'english';
	}
	
	set language(language: string) {
		this._language = language;
		Object.assign(this, this.languages[this.language]);
	}
	
	get language() {
		return this._language;
	}
}

export default <Language & Localization>new Localization();
