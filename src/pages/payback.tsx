import Component, { React } from '../component';
import { View, Text } from 'react-native';
import * as Styles from '../styles';
import * as numeral from 'numeral';
import Localization from '../localization';
import FernButton from '../components/fernbutton';
import * as moment from 'moment';

export interface PaybackProps {
	loan: number;
	total: number;
	due: number;
	onPay: () => void;
}

export interface PaybackState {
	
}

export default class Borrow extends Component<PaybackProps, PaybackState> {
	
	render() {
		return (
			<View style={Styles.borrow}>
				<View style={Styles.borrowContent}>
					<Text>You owe</Text>
					<Text style={Styles.lendCurrent}>{numeral(this.props.loan).format('$0,0.00')}</Text>
					<Text>{`+${numeral(this.props.total * this.props.loan).format('$0,0.00')} per day`}</Text>
					<Text>{`Loan Ends ${moment(this.props.due).format('ll')}`}</Text>
				</View>
				<FernButton style={Styles.lendButton} onClick={this.props.onPay}>Pay</FernButton>
			</View>
		);
	}
}
