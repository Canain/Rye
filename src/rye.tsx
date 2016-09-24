import Component, { React } from './component';
import { View, Text } from 'react-native';
import Localization from './localization';
import * as Styles from './styles';
import Tabs from './components/tabs';
import Tab from './components/tab';

export interface RyeState {
	tab?: 'lend' | 'borrow' | 'settings';
}

export class Rye extends Component<{}, RyeState> {
	constructor() {
		super();
		
		this.state = {
			tab: 'lend'
		};
	}
	
	render() {
		return (
			<View style={Styles.main}>
				<Tabs>
					<Tab selected={this.state.tab === 'lend'} onClick={() => this.catch(this.update({tab: 'lend'}))}>Lend</Tab>
					<Tab selected={this.state.tab === 'borrow'} onClick={() => this.catch(this.update({tab: 'borrow'}))}>Borrow</Tab>
					<Tab selected={this.state.tab === 'settings'} onClick={() => this.catch(this.update({tab: 'settings'}))}>Settings</Tab>
				</Tabs>
			</View>
		);
	}
}
