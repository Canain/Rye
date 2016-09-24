import Component, { React } from './component';
import { View, Text } from 'react-native';
import Localization from './localization';
import * as Styles from './styles';
import Tabs from './components/tabs';
import Login from './pages/login';
import Lend from './pages/lend';
import Add from './pages/add';

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
						content: <View/>
					}
				]}/>
			),
			add: <Add onBack={() => this.catch(this.update({page: 'main'}))}/>
		}[this.state.page];
	}
}
