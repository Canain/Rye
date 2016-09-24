import Component, { React } from '../component';
import { View, Text } from 'react-native';
import Modal from '../components/modal';
import Localization from '../localization';
import * as numeral from 'numeral';
import * as Styles from '../styles';
import Keypad from '../components/keypad';

export interface AddProps {
	onBack: () => void;
}

export interface AddState {
	amount?: number;
}

export default class Add extends Component<AddProps, AddState> {
	constructor() {
		super();
		
		this.state = {
			amount: 0
		};
	}
	
	render() {
		return (
			<Modal onBack={this.props.onBack} title={Localization.add} onDone={() => {}}>
				<View style={Styles.add}>
					<View style={Styles.addTop}>
						<Text style={Styles.addAmount}>{numeral(this.state.amount).format('$0,0.00')}</Text>
					</View>
					<View style={Styles.addBot}><Keypad onChange={amount => this.catch(this.update({amount: amount / 100}))}/></View>
				</View>
			</Modal>
		);
	}
}
