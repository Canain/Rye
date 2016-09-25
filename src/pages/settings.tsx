import Component, { React } from '../component';
import { View, Text } from 'react-native';
import * as Styles from '../styles';
import Localization from '../localization';
import FernButton from '../components/fernbutton';

export interface SettingsProps {
	onLogout: () => void;
}

export interface SettingsState {
}

export default class Settings extends Component<SettingsProps, SettingsState> {
	
	render() {
		return (
			<View style={Styles.settings}>
				<FernButton style={Styles.logout} onClick={this.props.onLogout} underlayColor="#ff7998">{Localization.logout}</FernButton>
			</View>
		);
	}
}
