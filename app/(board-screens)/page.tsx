import { LISTDATA } from '@/data/data';
import DashboardPage from '@/features/projects/dashboard';

const DashboardScreen = () => {
	// we should fetch data from api here and pass to client components
	const data = LISTDATA;

	return <DashboardPage data={data} />;
};

export default DashboardScreen;
