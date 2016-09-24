import { ViewStyle, Platform } from 'react-native';

export const mixin = <T>(...styles: T[]): T => Object.assign({}, ...styles);

export const center: ViewStyle = {
	justifyContent: 'center',
	alignItems: 'center'
};

export const main = mixin(center, {
	flex: 1,
	marginTop: Platform.OS === 'ios' ? 20 : 0
});
