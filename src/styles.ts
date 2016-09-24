import { Platform, ViewStyle, TextStyle } from 'react-native';

export const mixin = <T>(...styles: T[]): T => Object.assign({}, ...styles);

export const center: ViewStyle = {
	justifyContent: 'center',
	alignItems: 'center'
};

export const main: ViewStyle = {
	flex: 1,
	marginTop: Platform.OS === 'ios' ? 20 : 0,
	flexDirection: 'column',
	justifyContent: 'space-between'
};

export const tabs: ViewStyle = {
	height: 48,
	flexDirection: 'row'
};

export const tab: ViewStyle = {
	flex: 1,
	justifyContent: 'flex-end',
	alignItems: 'center',
	paddingBottom: 10,
	marginBottom: 1
};

export const selectedTab: ViewStyle = mixin(tab, <ViewStyle>{
	borderBottomColor: 'black',
	borderBottomWidth: tab.marginBottom,
	marginBottom: 0
});

export const login: ViewStyle = {
	flex: 1,
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	marginBottom: 64
};

export const textInput: TextStyle = {
	height: 32,
	marginLeft: 32,
	marginRight: 32,
	borderWidth: 1,
	borderColor: 'black',
	margin: 10,
	textAlign: 'center'
};

export const loginButton: ViewStyle = {
	margin: 10,
	backgroundColor: '#71BC78',
	width: 256,
	height: 48,
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
};

export const loginButtonText: TextStyle = {
	color: 'white'
}

export const content: ViewStyle = {
	flex: 1
};
