import English from './localization/english';

export interface Language {
	hello: string;
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
