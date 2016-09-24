import Component, { React } from './component';
import { View, Text } from 'react-native';
import Localization from './localization';
import * as Styles from './styles';
import Tabs from './components/tabs';
import Tab from './components/tab';
import Login from './pages/login';

export interface RyeState {
	tab?: 'lend' | 'borrow' | 'settings';
	login?: boolean;
}

export class Rye extends Component<{}, RyeState> {
	
	token: string;
	
	constructor() {
		super();
		
		this.state = {
			tab: 'lend',
			login: true
		};
	}
	
	async onLogin(token: string) {
		this.token = token;
		await this.update({
			login: false
		});
	}
	
	render() {
		return (
			this.state.login ? <Login onLogin={this.attach(this.onLogin)}/> :
			<Tabs tabs={[
				{
					name: Localization.lend,
					content: <View/>
				},
				{
					name: Localization.borrow,
					content: <View/>
				},
				{
					name: Localization.settings,
					content: <View/>
				}
			]}/>
		);
	}
}
