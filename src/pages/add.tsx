import Component, { React } from '../component';
import Modal from '../components/modal';
import Localization from '../localization';

export interface AddProps {
	onBack: () => void;
}

export default class Add extends Component<AddProps, {}> {
	render() {
		return <Modal onBack={this.props.onBack} title={Localization.add} onDone={() => {}}></Modal>;
	}
}
