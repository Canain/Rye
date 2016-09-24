import Component, { React } from '../component';
import { View, Text, TextInput } from 'react-native';
import * as Styles from '../styles';
import Localization from '../localization';
import Button from '../components/button';

export default class Login extends Component<{}, {}> {
	email: TextInput;
	password: TextInput;
	
	render() {
		return (
			<View style={Styles.login}>
				<Text>{Localization.email}</Text>
				<TextInput ref={ref => this.email = ref} style={Styles.textInput} autoCapitalize="none" returnKeyType="next" keyboardType="email-address" onSubmitEditing={() => this.password.focus()}/>
				<Text>{Localization.password}</Text>
				<TextInput ref={ref => this.password = ref} style={Styles.textInput} autoCapitalize="none" secureTextEntry={true} returnKeyType="done"/>
				<Button style={Styles.loginButton} textStyle={Styles.loginButtonText} underlayColor="#a6d5ab" activeOpacity={1}>{Localization.login}</Button>
			</View>
		);
	}
}
