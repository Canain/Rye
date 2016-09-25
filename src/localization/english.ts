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
	perday: 'per day',
	permonth: 'per month',
	total: 'total interest',
	rate: 'interest rate',
	fee: 'fee',
	borrowExplain: location => `Current interest rate for ${location[2] ? `${location[2]}, ` : ''}${location[1] ? `${location[1]}, ` : ''}${location[0]}`,
	per: (percent, what, per) => `${what === 'fee' ? '+' : ''}${percent} ${what} ${per}`
};
