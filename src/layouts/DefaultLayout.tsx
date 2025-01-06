import { FC } from 'react';
import Header from './Header';
import { useLocation } from 'react-router-dom';

interface DefaultLayoutProps {
	children: React.ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
	const location = useLocation();

	const name = location.pathname;

	if (name === '/') {
		return <>{children}</>;
	}
	return (
		<div className={`min-h-screen bg-[#F2FFFD]`}>
			<Header />
			{children}
		</div>
	);
};

export default DefaultLayout;
