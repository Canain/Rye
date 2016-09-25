import { Language } from '../localization';

export default <Language>{
	lend: 'Lend',
	borrow: 'Borrow',
	settings: 'Settings',
	email: 'Email',
	password: 'Password',
	login: 'Login',
	lendExplain: 'You are lending',
	lendMore: 'Lend More',
	add: 'Enter amount to lend',
	logout: 'Logout',
	thankyou: 'Thank You',
	home: 'Home',
	loan: 'Take a Loan',
	day: 'day',
	month: 'month',
	total: 'total interest',
	rate: 'interest rate',
	fee: 'fee',
	location: location => `${location[2] ? `${location[2]}, ` : ''}${location[1] ? `${location[1]}, ` : ''}${location[0]}`,
	borrowExplain: 'Current interest rate for',
	per: (percent, what, per) => `${what === 'fee' ? '+' : ''}${percent}${what === 'total interest' ? ` per ${per}` : ` ${what} per ${per}`}`,
	loanTitle: 'Enter amount to borrow',
	loanLimit: limit => `Your current loan limit is ${limit}`
};
