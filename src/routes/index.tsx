import config from '../config';
import DefaultLayout from '../layouts/DefaultLayout';
import conferenceRoomPage from '../pages/conference-room';
import DragonBoatPage from '../pages/dragon-boat';
import HomePage from '../pages/home';
import KimSenHallPage from '../pages/kimsen-hall';
import MenuPage from '../pages/menu';
import NganSenHallPage from '../pages/ngansen-hall';
import PromotionWeddingPage from '../pages/promotion-wedding';
import ThanhSenHallPage from '../pages/thanhsen-hall';

interface RouteConfig {
	path: string;
	component: React.ComponentType;
	layout?: React.ComponentType<any> | null;
}
const publicRoutes: RouteConfig[] = [
	{ path: config.home, component: HomePage, layout: DefaultLayout },
	{ path: config.menu, component: MenuPage, layout: DefaultLayout },
	{ path: config.conferenceRoom, component: conferenceRoomPage, layout: DefaultLayout },
	{ path: config.promotionWedding, component: PromotionWeddingPage, layout: DefaultLayout },
	{ path: config.dragonBoat, component: DragonBoatPage, layout: DefaultLayout },
	{ path: config.ngansenHall, component: NganSenHallPage, layout: DefaultLayout },
	{ path: config.kimsenHall, component: KimSenHallPage, layout: DefaultLayout },
	{ path: config.thanhsenHall, component: ThanhSenHallPage, layout: DefaultLayout },
];

export { publicRoutes };
