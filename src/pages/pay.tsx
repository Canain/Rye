import Component, { React } from '../component';
import { View, Text } from 'react-native';
import Modal from '../components/modal';
import Localization from '../localization';
import * as numeral from 'numeral';
import * as Styles from '../styles';
import Keypad from '../components/keypad';

export interface PayProps {
	loan: number;
	pay: number;
	onBack: () => void;
	onDone: () => void;
	onChange: (pay: number) => void;
}

export interface PayState {
}

export default class Pay extends Component<PayProps, PayState> {
	
	render() {
		return (
			<Modal onBack={this.props.onBack} title={`Pay part or all of ${numeral(this.props.loan).format('$0,0.00')}`} onDone={this.props.onDone}>
				<View style={Styles.add}>
					<View style={Styles.addTop}>
						<Text style={Styles.addAmount}>{numeral(this.props.pay).format('$0,0.00')}</Text>
					</View>
					<View style={Styles.addBot}><Keypad onChange={amount => this.props.onChange(amount / 100)}/></View>
				</View>
			</Modal>
		);
	}
}
