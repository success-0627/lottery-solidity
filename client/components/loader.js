import { ProgressSpinner } from 'primereact/progressspinner';
import { BlockUI } from 'primereact/blockui';
import 'primeflex/primeflex.css';

const LoaderPage = props => {
	return (
		<BlockUI class="text-center">
			<ProgressSpinner strokeWidth="8" center />
		</BlockUI>
	);
};

export default LoaderPage;