import Component, { React } from '../component';
import { View, Text } from 'react-native';
import Modal from '../components/modal';
import Localization from '../localization';
import * as numeral from 'numeral';
import * as Styles from '../styles';
import Keypad from '../components/keypad';

export interface AddProps {
	lend: number;
	onBack: () => void;
	onDone: () => void;
	onChange: (lend: number) => void;
}

export interface AddState {
}

export default class Add extends Component<AddProps, AddState> {
	
	render() {
		return (
			<Modal onBack={this.props.onBack} title={Localization.add} onDone={this.props.onDone}>
				<View style={Styles.add}>
					<View style={Styles.addTop}>
						<Text style={Styles.addAmount}>{numeral(this.props.lend).format('$0,0.00')}</Text>
					</View>
					<View style={Styles.addBot}><Keypad onChange={amount => this.props.onChange(amount / 100)}/></View>
				</View>
			</Modal>
		);
	}
}
