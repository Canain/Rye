import Component, { React } from '../component';
import { TouchableHighlight, Text } from 'react-native';
import * as Styles from '../styles';

export interface TabProps {
	selected?: boolean;
	onClick: () => void;
}

export default class Tab extends Component<TabProps, {}> {
	render() {
		return (
			<TouchableHighlight style={this.props.selected ? Styles.selectedTab : Styles.tab} onPress={this.props.onClick} underlayColor="transparent">
				<Text>{this.props.children}</Text>
			</TouchableHighlight>
		);
	}
}
