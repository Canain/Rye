import Component, { React } from '../component';
import { View } from 'react-native';
import Button from './button';
import * as Styles from '../styles';

class TabsHeader extends Component<{}, {}> {
	render() {
		return <View style={Styles.tabs}>{this.props.children}</View>;
	}
}

interface TabProps {
	selected?: boolean;
	onClick: () => void;
}

class Tab extends Component<TabProps, {}> {
	render() {
		return (
			<Button style={this.props.selected ? Styles.selectedTab : Styles.tab} onClick={this.props.onClick}>
				{this.props.children}
			</Button>
		);
	}
}

export interface TabInfo {
	name: string;
	content: JSX.Element;
}

export interface TabsProps {
	tabs: TabInfo[];
	selected: number;
	onSelect: (selected: number) => void;
}

export interface TabsState {
}

export default class Tabs extends Component<TabsProps, TabsState> {
	
	render() {
		return (
			<View style={Styles.main}>
				<TabsHeader>
					{this.props.tabs.map((tab, i) => <Tab key={i} selected={this.props.selected === i} onClick={() => this.props.onSelect(i)}>{tab.name}</Tab>)}
				</TabsHeader>
				<View style={Styles.content}>{this.props.tabs[this.props.selected].content}</View>
			</View>
		);
	}
}
