import Component, { React } from '../component';
import { View } from 'react-native';
import Button from './button';
import * as Styles from '../styles';

export class TabsHeader extends Component<{}, {}> {
	render() {
		return <View style={Styles.tabs}>{this.props.children}</View>;
	}
}

export interface TabProps {
	selected?: boolean;
	onClick: () => void;
}

export class Tab extends Component<TabProps, {}> {
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
	initial?: number;
	tabs: TabInfo[];
}

export interface TabsState {
	selected?: number;
}

export default class Tabs extends Component<TabsProps, TabsState> {
	constructor() {
		super();
		
		this.state = {
			selected: 0
		};
	}
	
	componentWillMount() {
		if (this.props.initial) {
			this.update({selected: this.props.initial});
		}
	}
	
	render() {
		return (
			<View style={Styles.main}>
				<TabsHeader>
					{this.props.tabs.map((tab, i) => <Tab key={i} selected={this.state.selected === i} onClick={() => this.catch(this.update({selected: i}))}>{tab.name}</Tab>)}
				</TabsHeader>
				<View style={Styles.content}>{this.props.tabs[this.state.selected].content}</View>
			</View>
		);
	}
}
