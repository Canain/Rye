import Component, { React } from '../component';
import { View, Text } from 'react-native';
import * as Styles from '../styles';
import Localization from '../localization';
import Button from '../components/button';

export interface ModalProps {
	onBack: () => void;
	title: string;
}

export default class Modal extends Component<ModalProps, {}> {
	render() {
		return (
			<View style={Styles.modal}>
				<View style={Styles.modalTop}>
					<View style={Styles.modalTopContent}>
						<Button style={Styles.modalTopAction} onClick={this.props.onBack}>{Localization.back}</Button>
						<Text>{this.props.title}</Text>
						<Button style={Styles.modalTopAction}/>
					</View>
				</View>
				<View style={Styles.content}>{this.props.children}</View>
			</View>
		);
	}
}
