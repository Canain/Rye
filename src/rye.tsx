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

type Page = 'login' | 'main' | 'add' | 'thanks';

export interface RyeState {
	page?: Page;
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
	
	switch(page: Page) {
		this.catch(this.update({page: page}));
	}
	
	render() {
		return {
			login: <Login onLogin={this.attach(this.onLogin)}/>,
			main: (
				<Tabs tabs={[
					{
						name: Localization.lend,
						content: <Lend onAdd={() => this.switch('add')}/>
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
			add: <Add onBack={() => this.switch('main')} onDone={() => this.switch('thanks')}/>,
			thanks: <Thanks onHome={() => this.switch('main')}/>
		}[this.state.page];
	}
}
