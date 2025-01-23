import { get, ref } from 'firebase/database';
import { db } from './firebase';
import { ImageProps } from 'antd';

export const fetchImages = async (): Promise<ImageProps[]> => {
	try {
		// Tham chiếu đến node "menuItems" trong Firebase
		const menuRef = ref(db, 'listImages');

		// Lấy dữ liệu từ Firebase
		const snapshot = await get(menuRef);

		if (snapshot.exists()) {
			const data = snapshot.val();

			// Chuyển đổi dữ liệu từ object thành array
			const images: ImageProps[] = Object.keys(data).map((key) => ({
				id: key,
				...data[key],
			}));

			console.log('Dữ liệu menu items đã được lấy thành công!', images);
			return images;
		} else {
			console.log('Không có dữ liệu trong menu items.');
			return [];
		}
	} catch (error) {
		console.error('Lỗi khi lấy dữ liệu menu items:', error);
		throw error;
	}
};
