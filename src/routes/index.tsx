import config from '../config';
import DefaultLayout from '../layouts/DefaultLayout';
import HomePage from '../pages/home';
import MenuPage from '../pages/menu';

interface RouteConfig {
	path: string;
	component: React.ComponentType;
	layout?: React.ComponentType<any> | null;
}
const publicRoutes: RouteConfig[] = [
	{ path: config.home, component: HomePage, layout: DefaultLayout },
	{ path: config.menu, component: MenuPage, layout: DefaultLayout },
];

export { publicRoutes };
