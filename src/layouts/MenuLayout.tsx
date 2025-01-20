import { LogoMenu } from '../components/icon';
import { FC, useState } from 'react';
import { restaurantCategory } from '../mocks/dataMenu';

// const restaurantData = [
// 	{
// 		id: '550e8400-e29b-41d4-a716-446655440000',
// 		imageUrl:
// 			'https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/restaurants%2Fb%C3%B21.png?alt=media&token=e74d38a6-ba58-4be7-aa26-3c35a852b0e9',
// 		name: 'Bò',
// 		description: '4 món',
// 	},
// 	{
// 		id: '6a1f2c8d-3a3d-4e1d-b1b8-dffb9cf77a9c',
// 		imageUrl:
// 			'https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/restaurants%2Fdt1.png?alt=media&token=ccf8233b-dc46-440a-abe0-825e8ec1de66',
// 		name: 'Dồi trường',
// 		description: '3 món',
// 	},
// 	{
// 		id: '1e2b3c4d-5f6a-7b8c-9d0e-1f2a3b4c5d6e',
// 		imageUrl:
// 			'https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/restaurants%2Fcg1.png?alt=media&token=20f41b16-e394-48de-bb39-09915009bcac',
// 		name: 'Chả giò',
// 		description: '4 món',
// 	},
// 	{
// 		id: '7f8e9d0c-1a2b-3c4d-5e6f-7a8b9c0d1e2f',
// 		imageUrl:
// 			'https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/restaurants%2Fgoi1.png?alt=media&token=6f4664db-998e-489f-9272-4d6d71453aef',
// 		name: 'Gỏi',
// 		description: '1 món',
// 	},
// 	{
// 		id: '2a3b4c5d-6e7f-8a9b-0c1d-2e3f4a5b6c7d',
// 		imageUrl:
// 			'https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/restaurants%2Fcbc1.png?alt=media&token=fa921fb5-8f8c-4bb6-b2fa-bcffc3b77fdf',
// 		name: 'Chim bồ câu',
// 		description: '1 món',
// 	},
// ];

interface RestaurantCardProps {
	key: string;
	imageUrl: string;
	name: string;
	description: string;
	isActive: boolean;
	onClick: () => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
	key,
	imageUrl,
	name,
	description,
	isActive,
	onClick,
}) => {
	return (
		<div
			className={`relative flex h-[111px] cursor-pointer items-center 2xl:mb-5 2xl:h-[90px]`}
			onClick={onClick}
			key={key}
		>
			<div className='z-50 flex-shrink-0'>
				<img src={imageUrl} alt={name} className='h-[80px] w-[80px] 2xl:h-[90px] 2xl:w-[90px]' />
			</div>
			<div
				className={`${isActive ? 'bg-[#FCBB62]' : 'bg-white'} -ml-10 flex h-[90px] w-full flex-col justify-center rounded-lg pl-14 shadow-[0_3px_10px_rgb(0,0,0,0.2)] 2xl:h-[90px]`}
			>
				<p
					className={`${isActive ? 'text-white' : 'text-[#3f3f41]'} font-['MTD Valky Bold'] font-bold lg:text-xl 2xl:text-3xl`}
				>
					{name}
				</p>
				<p
					className={`${isActive ? 'text-white' : 'text-[#9e9e9e]'} font-['Manrope'] text-[17px] font-normal`}
				>
					{description}
				</p>
			</div>
		</div>
	);
};
interface MenuLayoutProps {
	setCategory: (value: string) => void;
}
const MenuLayout: FC<MenuLayoutProps> = ({ setCategory }) => {
	const [activeRestaurant, setActiveRestaurant] = useState<string>(restaurantCategory[0].id); // Chọn mặc định phần tử đầu tiên

	const handleCardClick = (id: string) => {
		if (id === activeRestaurant) {
			return;
		}
		setActiveRestaurant(id);
		setCategory(id);
	};

	return (
		<div className='rounded-3xl bg-[#fff9eb] px-2 py-5 lg:w-[340px] 2xl:h-[700px] 2xl:w-[421px]'>
			<div className='mb-5 flex w-full items-center justify-center'>
				<LogoMenu />
			</div>
			<div className='h-[360px] overflow-y-auto px-3 2xl:h-[540px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-[#C5C4C4] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-2'>
				{restaurantCategory.map((restaurant, index) => (
					<RestaurantCard
						key={restaurant.id}
						imageUrl={restaurant.imageUrl}
						name={restaurant.name}
						description={restaurant.description}
						isActive={activeRestaurant === restaurant.id}
						onClick={() => handleCardClick(restaurant.id)}
					/>
				))}
			</div>
		</div>
	);
};

export default MenuLayout;
