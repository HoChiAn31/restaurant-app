import { get, ref, set } from 'firebase/database';
import { db } from './firebase';

interface MenuItem {
	id: string;
	titleFirst: string;
	titleLast: string;
	imageUrl: string;
	minPrice: number;
	maxPrice: number;
	description: string;
	category: string[];
	categoryMenu: string;
}

export const fetchAddMenuItems = async (menuItems: MenuItem[]) => {
	try {
		const menuRef = ref(db, 'menuItems');

		const menuData: Record<string, MenuItem> = {};
		menuItems.forEach((item) => {
			menuData[item.id] = item;
		});

		await set(menuRef, menuData);
	} catch (error) {
		throw error;
	}
};

export const fetchMenuItems = async (): Promise<MenuItem[]> => {
	try {
		const menuRef = ref(db, 'menuItems');

		const snapshot = await get(menuRef);

		if (snapshot.exists()) {
			const data = snapshot.val();

			const menuItems: MenuItem[] = Object.keys(data).map((key) => ({
				id: key,
				...data[key],
			}));

			return menuItems;
		} else {
			return [];
		}
	} catch (error) {
		throw error;
	}
};
