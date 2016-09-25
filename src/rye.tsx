import Component, { React } from './component';
import { View, Text, AsyncStorage } from 'react-native';
import Localization from './localization';
import * as Styles from './styles';
import Tabs from './components/tabs';
import Login from './pages/login';
import Lend from './pages/lend';
import Add from './pages/add';
import Settings from './pages/settings';
import Thanks from './pages/thanks';
import Borrow from './pages/borrow';
import Loan from './pages/loan';
import Duration from './pages/duration';
import Payback from './pages/payback';
import * as moment from 'moment';

type Page = 'login' | 'main' | 'add' | 'thanks' | 'loan' | 'duration';

export interface RyeState {
	page?: Page;
	rate?: number;
	fee?: number;
	tab?: number;
	loan?: number;
	days?: number;
	payback?: boolean;
	due?: number;
	lend?: number;
	current?: number;
	original?: number;
}

export class Rye extends Component<{}, RyeState> {
	
	token: string;
	
	constructor() {
		super();
		
		this.state = {
			page: 'login',
			rate: 0.0004,
			fee: 0.00002,
			tab: 0,
			loan: 0,
			days: 0,
			due: 0,
			lend: 0,
			original: 1000,
			current: 1010.14
		};
	}
	
	async onLogin(token: string) {
		this.token = token;
		await this.update({
			page: 'main'
		});
	}
	
	async onLogout() {
		this.token = null;
		await AsyncStorage.removeItem('token');
		await this.update({
			page: 'login'
		});
	}
	
	switch(page: Page) {
		this.catch(this.update({page: page}));
	}
	
	async loan() {
		await this.update({
			page: 'main',
			payback: true,
			due: moment().add(this.state.days, 'days').toDate().getTime()
		});
	}
	
	async lend() {
		await this.update({
			page: 'main',
			current: this.state.current + this.state.lend,
			original: this.state.original + this.state.lend,
			lend: 0
		});
	}
	
	render() {
		return {
			login: <Login onLogin={this.attach(this.onLogin)}/>,
			main: (
				<Tabs selected={this.state.tab} onSelect={selected => this.catch(this.update({tab: selected}))} tabs={[
					{
						name: Localization.lend,
						content: <Lend original={this.state.original} current={this.state.current} onAdd={() => this.switch('add')}/>
					},
					{
						name: this.state.payback ? Localization.payback : Localization.borrow,
						content: this.state.payback ? <Payback due={this.state.due} loan={this.state.loan} total={this.state.rate + this.state.fee} onPay={() => {}}/> : <Borrow rate={this.state.rate} fee={this.state.fee} onLoan={() => this.switch('loan')}/>
					},
					{
						name: Localization.settings,
						content: <Settings onLogout={this.attach(this.onLogout)}/>
					}
				]}/>
			),
			add: <Add lend={this.state.lend} onBack={() => this.switch('main')} onDone={this.attach(this.lend)} onChange={lend => this.catch(this.update({lend: lend}))}/>,
			thanks: <Thanks onHome={() => this.switch('main')}/>,
			loan: <Loan total={this.state.fee + this.state.rate} loan={this.state.loan} onChange={loan => this.catch(this.update({loan: loan}))} onBack={() => this.switch('main')} onDone={() => this.switch('duration')}/>,
			duration: <Duration days={this.state.days} onChange={days => this.catch(this.update({days: days}))} loan={this.state.loan} total={this.state.rate + this.state.fee} onBack={() => this.switch('loan')} onDone={this.attach(this.loan)}/>
		}[this.state.page];
	}
}
