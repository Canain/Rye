import { Platform, ViewStyle } from 'react-native';

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

export const selectedTab = mixin(tab, <ViewStyle>{
	borderBottomColor: 'black',
	borderBottomWidth: tab.marginBottom,
	marginBottom: 0
});
