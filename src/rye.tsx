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
	constructor() {
		super();
		
		this.state = {
			tab: 'lend',
			login: true
		};
	}
	
	render() {
		return (
			this.state.login ?
			<Login/> :
			<View style={Styles.main}>
				<Tabs>
					<Tab selected={this.state.tab === 'lend'} onClick={() => this.catch(this.update({tab: 'lend'}))}>{Localization.lend}</Tab>
					<Tab selected={this.state.tab === 'borrow'} onClick={() => this.catch(this.update({tab: 'borrow'}))}>{Localization.borrow}</Tab>
					<Tab selected={this.state.tab === 'settings'} onClick={() => this.catch(this.update({tab: 'settings'}))}>{Localization.settings}</Tab>
				</Tabs>
			</View>
		);
	}
}
