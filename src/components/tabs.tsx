import Component, { React } from '../component';
import { View } from 'react-native';
import * as Styles from '../styles';

export default class Tabs extends Component<{}, {}> {
	render() {
		return <View style={Styles.tabs}>{this.props.children}</View>;
	}
}
