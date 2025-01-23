import { LogoMenu } from '../components/icon';
import { FC, useState } from 'react';
import { restaurantCategoryProps } from '../types/restaurantCategory';

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
					className={`${isActive ? 'text-white' : 'text-[#3f3f41]'} font-mtdValky font-bold lg:text-xl 2xl:text-3xl`}
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
	data: restaurantCategoryProps[];
}
const MenuLayout: FC<MenuLayoutProps> = ({ setCategory, data }) => {
	const [activeRestaurant, setActiveRestaurant] = useState<string>(data[0].id); // Chọn mặc định phần tử đầu tiên

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
				{data.map((restaurant) => (
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
