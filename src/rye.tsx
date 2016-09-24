import Component, { React } from './component';
import { View, Text } from 'react-native';
import Localization from './localization';
import * as Styles from './styles';

export class Rye extends Component<{}, {}> {
	render() {
		return <View style={Styles.main}><Text>{Localization.hello}</Text></View>;
	}
}
