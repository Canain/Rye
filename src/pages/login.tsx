import Component, { React } from '../component';
import { View, Text, TextInput, AsyncStorage } from 'react-native';
import * as Styles from '../styles';
import Localization from '../localization';
import Button from '../components/button';
import API from '../api';

export interface LoginProps {
	onLogin: (token: string) => void;
}

export interface LoginState {
	loading?: boolean;
}

export interface LoginResponse {
	token?: string;
	error?: string;
}

export default class Login extends Component<LoginProps, LoginState> {
	password: TextInput;
	
	emailValue: string;
	passwordValue: string;
	
	api = new API();
	
	constructor() {
		super();
		
		this.state = {
			loading: true
		};
	}
	
	componentDidMount() {
		this.catch(this.init());
	}
	
	async init() {
		const token = await AsyncStorage.getItem('token');
		if (token) {
			return this.props.onLogin(token);
		}
		await this.update({loading: false});
	}
	
	async login() {
		if (!this.emailValue || !this.passwordValue) {
			return;
		}
		const response = await this.api.post<LoginResponse>('/login', {
			email: this.emailValue,
			password: this.passwordValue
		});
		if (response.error) {
			return console.error(response.error);
		}
		await AsyncStorage.setItem('token', response.token);
		this.props.onLogin(response.token);
	}
	
	render() {
		return (
			this.state.loading ? null :
			<View style={Styles.login}>
				<Text>{Localization.email}</Text>
				<TextInput style={Styles.textInput} onChangeText={text => this.emailValue = text} autoCapitalize="none" returnKeyType="next" keyboardType="email-address" onSubmitEditing={() => this.password.focus()}/>
				<Text>{Localization.password}</Text>
				<TextInput ref={ref => this.password = ref} style={Styles.textInput} onChangeText={text => this.passwordValue = text} autoCapitalize="none" secureTextEntry={true} returnKeyType="done" onSubmitEditing={this.attach(this.login)}/>
				<Button style={Styles.loginButton} textStyle={Styles.loginButtonText} underlayColor="#a6d5ab" activeOpacity={1} onClick={this.attach(this.login)}>{Localization.login}</Button>
			</View>
		);
	}
}
