import Component, { React } from './component';
import { View, Text, AsyncStorage } from 'react-native';
import Localization from './localization';
import * as Styles from './styles';
import Tabs from './components/tabs';
import Login from './pages/login';
import Lend from './pages/lend';
import Add from './pages/add';
import Settings from './pages/settings';

export interface RyeState {
	page?: 'login' | 'main' | 'add';
}

export class Rye extends Component<{}, RyeState> {
	
	token: string;
	
	constructor() {
		super();
		
		this.state = {
			page: 'login'
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
	
	render() {
		return {
			login: <Login onLogin={this.attach(this.onLogin)}/>,
			main: (
				<Tabs tabs={[
					{
						name: Localization.lend,
						content: <Lend onAdd={() => this.catch(this.update({page: 'add'}))}/>
					},
					{
						name: Localization.borrow,
						content: <View/>
					},
					{
						name: Localization.settings,
						content: <Settings onLogout={this.attach(this.onLogout)}/>
					}
				]}/>
			),
			add: <Add onBack={() => this.catch(this.update({page: 'main'}))}/>
		}[this.state.page];
	}
}
