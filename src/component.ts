import * as React from 'react';
import { Component } from 'react';
import * as shallowequal from 'shallowequal';

export default class ES7Component<P, S> extends Component<P, S> {
	
	update(state?: S) {
		if (state) {
			return new Promise<void>(resolve => this.setState(state, resolve));
		}
		return new Promise<void>(resolve => this.forceUpdate(resolve));
	}
	
	shouldComponentUpdate(nextProps: P, nextState: S) {
		return !shallowequal(this.props, nextProps) || !shallowequal(this.state, nextState);
	}
	
	attach<T extends Function>(method: T): T{
		const func: any = method;
		const self = this;
		const proxy: any = function () {
			const ret: Promise<any> = func.apply(self, arguments);
			if (ret) {
				return ret.catch(e => console.error(e));
			}
			return ret;
		};
		return proxy;
	}
	
	catch(promise: Promise<any>) {
		return promise.catch(error => console.error(error));
	}
}

export {
	React
};
