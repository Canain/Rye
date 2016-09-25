import Component, { React } from '../component';
import { View, Text } from 'react-native';
import * as Styles from '../styles';
import Localization from '../localization';
import FernButton from '../components/fernbutton';

export interface ThanksProps {
	onHome: () => void;
}

export default class Thanks extends Component<ThanksProps, {}> {
	render() {
		return (
			<View style={Styles.thanks}>
				<Text style={Styles.thanksBig}>{Localization.thankyou}</Text>
				<FernButton style={Styles.lendButton} onClick={this.props.onHome}>{Localization.home}</FernButton>
			</View>
		);
	}
}
