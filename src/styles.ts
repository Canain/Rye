import { Platform, ViewStyle, TextStyle } from 'react-native';

export const mixin = <T>(...styles: T[]): T => Object.assign({}, ...styles);

export const center: ViewStyle = {
	justifyContent: 'center',
	alignItems: 'center'
};

export const main: ViewStyle = {
	flex: 1,
	marginTop: Platform.OS === 'ios' ? 20 : 0,
	flexDirection: 'column'
};

export const fernButton: ViewStyle = {
	backgroundColor: '#71BC78',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
};

export const fernButtonText: TextStyle = {
	color: 'white'
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

export const textInput: ViewStyle = {
	height: 48,
	marginLeft: 32,
	marginRight: 32,
	marginBottom: 24,
	width: 256,
	borderColor: 'black',
	borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
};

export const textInputText: TextStyle = {
	textAlign: 'center',
	flex: 1
};

export const loginButton: ViewStyle = {
	width: 256,
	height: 48
};

export const content: ViewStyle = {
	flex: 1
};

export const lend: ViewStyle = {
	flex: 1,
	flexDirection: 'column',
	alignItems: 'stretch'
};

export const lendTop: ViewStyle = {
	flex: 1,
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
};

export const lendExplain: TextStyle = {
	
};

export const lendCurrent: TextStyle = {
	fontSize: 48
};

export const lendDiffPositive: TextStyle = {
	color: 'green'
};

export const lendDiffNegative: TextStyle = {
	color: 'red'
};

export const lendButton: ViewStyle = {
	height: 64,
	margin: 24
};

export const modal: ViewStyle = mixin(main, <ViewStyle>{
	marginTop: 0
});

export const modalTop: ViewStyle = {
	height: 48 + main.marginTop,
	shadowColor: 'black',
  shadowRadius: 2,
  shadowOpacity: 0.1,
	shadowOffset: {
		width: 0,
		height: 1
	},
	flexDirection: 'column',
	justifyContent: 'flex-end'
};

export const modalTopContent: ViewStyle = {
	height: 48,
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center'
};

export const modalTopAction: ViewStyle = {
	width: 64,
	height: 48,
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
};

export const modalTopActionText: TextStyle = {
	fontSize: 12
};

export const modalTitle: TextStyle = {
	fontSize: 16
};

export const add: ViewStyle = {
	flex: 1,
	flexDirection: 'column'
};

export const addAmount: TextStyle = {
	fontSize: 48
};

export const addTop: ViewStyle = {
	flex: 1,
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center'
};

export const addBot: ViewStyle = {
	flex: 1,
	marginBottom: 48
};

export const keypad: ViewStyle = {
	flex: 1,
	flexDirection: 'column'
};

export const key: ViewStyle = {
	flex: 1/3,
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center'
};

export const keyText: TextStyle = {
	fontSize: 18
};

export const keyRow: ViewStyle = {
	flex: 1/4,
	flexDirection: 'row'
};

export const settings: ViewStyle = {
	flex: 1,
	flexDirection: 'column'
};

export const logout: ViewStyle = mixin(lendButton, <ViewStyle>{
	backgroundColor: '#FF033E'
});

export const thanks: ViewStyle = {
	flex: 1,
	flexDirection: 'column',
	justifyContent: 'center',
};

export const thanksBig: TextStyle = {
	fontSize: 48,
	textAlign: 'center'
};

export const borrow: ViewStyle = mixin(lend);

export const borrowContent: ViewStyle = mixin(lendTop);

export const borrowExplain: TextStyle = {
	marginBottom: 4
};

export const borrowTotal: TextStyle = {
	fontSize: 38
};

export const borrowRate: TextStyle = {
	
};

export const borrowFee: TextStyle = {
	marginBottom: 24
};

export const borrowTop: ViewStyle = {
	flexDirection: 'column',
	alignItems: 'center',
	marginTop: 16
};

export const loanDay: TextStyle = {
	
};

export const loanMonth: TextStyle = {
	
};
