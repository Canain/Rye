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
	thankyou: string;
	home: string;
	loan: string;
	borrowExplain: string;
	day: string;
	month: string;
	total: string;
	rate: string;
	fee: string;
	per: (percent: string, what: string, per: string) => string;
	location: (location: string[]) => string;
	loanTitle: string;
	loanLimit: (limit: string) => string;
	durationLimit: (max: number) => string;
	days: (days: number) => string;
	durationTitle: (loan: string) => string;
	due: (date: string) => string;
	durationTotal: (amount: string) => string;
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
