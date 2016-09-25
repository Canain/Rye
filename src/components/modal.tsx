import Component, { React } from '../component';
import { View, Text } from 'react-native';
import * as Styles from '../styles';
import Localization from '../localization';
import Button from '../components/button';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface ModalProps {
	onBack: () => void;
	onDone: () => void;
	title: string;
}

export default class Modal extends Component<ModalProps, {}> {
	render() {
		return (
			<View style={Styles.modal}>
				<View style={Styles.modalTop}>
					<View style={Styles.modalTopContent}>
						<Button style={Styles.modalTopAction} textStyle={Styles.modalTopActionText} onClick={this.props.onBack}><Icon name="arrow-back" size={20}/></Button>
						<Text style={Styles.modalTitle}>{this.props.title}</Text>
						<Button style={Styles.modalTopAction} textStyle={Styles.modalTopActionText} onClick={this.props.onDone}><Icon name="done" size={20} color="green"/></Button>
					</View>
				</View>
				<View style={Styles.content}>{this.props.children}</View>
			</View>
		);
	}
}
