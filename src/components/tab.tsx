import Component, { React } from '../component';
import * as Styles from '../styles';
import Button from './button';

export interface TabProps {
	selected?: boolean;
	onClick: () => void;
}

export default class Tab extends Component<TabProps, {}> {
	render() {
		return (
			<Button style={this.props.selected ? Styles.selectedTab : Styles.tab} onClick={this.props.onClick}>
				{this.props.children}
			</Button>
		);
	}
}
