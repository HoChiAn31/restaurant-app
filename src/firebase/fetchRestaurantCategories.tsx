import { ref, get, set } from 'firebase/database';
import { db } from './firebase';
import { restaurantCategoryProps } from '../types/restaurantCategory';

export const fetchRestaurantCategories = async () => {
	try {
		const restaurantRef = ref(db, 'restaurantCategories');

		const snapshot = await get(restaurantRef);

		if (snapshot.exists()) {
			const data = snapshot.val();
			return Object.keys(data).map((key) => ({
				id: key,
				...data[key],
			}));
		} else {
			return [];
		}
	} catch (error) {
		throw error;
	}
};

export const fetchAddRestaurantCategories = async (
	restaurantCategories: restaurantCategoryProps[],
) => {
	try {
		const menuRef = ref(db, 'restaurantCategories');

		const menuData: Record<string, restaurantCategoryProps> = {};
		restaurantCategories.forEach((item) => {
			menuData[item.id] = item;
		});

		// Thêm dữ liệu vào Firebase
		await set(menuRef, menuData);
	} catch (error) {
		throw error;
	}
};
