import { FC } from 'react';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

interface DefaultLayoutProps {
	children: React.ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
	const location = useLocation();

	const name = location.pathname;

	if (name === '/') {
		return <div className='max-h-fit'>{children}</div>;
	}
	return (
		<div className={`${name === '/menu' ? '-z-20 bg-[#e6e6e6]' : ''} flex min-h-screen flex-col`}>
			<Header />
			<main className={`flex-grow ${name === '/menu' ? 'pt-[120px]' : ''}`}>{children}</main>
			<Footer />
		</div>
	);
};

export default DefaultLayout;
