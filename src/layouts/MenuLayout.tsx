import { LogoMenu } from '../components/icon';
import { useState } from 'react';

const restaurantData = [
	{
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/restaurants%2Fb%C3%B21.png?alt=media&token=e74d38a6-ba58-4be7-aa26-3c35a852b0e9',
		name: 'Bò',
		description: '4 món',
	},
	{
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/restaurants%2Fdt1.png?alt=media&token=ccf8233b-dc46-440a-abe0-825e8ec1de66',
		name: 'Dồi trường',
		description: '3 món',
	},
	{
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/restaurants%2Fcg1.png?alt=media&token=20f41b16-e394-48de-bb39-09915009bcac',
		name: 'Chả giò',
		description: '4 món',
	},
	{
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/restaurants%2Fgoi1.png?alt=media&token=6f4664db-998e-489f-9272-4d6d71453aef',
		name: 'Gỏi',
		description: '1 món',
	},
	{
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/restaurants%2Fcbc1.png?alt=media&token=fa921fb5-8f8c-4bb6-b2fa-bcffc3b77fdf',
		name: 'Chim bồ câu',
		description: '1 món',
	},
];

interface RestaurantCardProps {
	imageUrl: string;
	name: string;
	description: string;
	isActive: boolean;
	onClick: () => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
	imageUrl,
	name,
	description,
	isActive,
	onClick,
}) => {
	return (
		<div
			className={`relative mb-5 flex h-[111px] cursor-pointer items-center 2xl:h-[90px]`}
			onClick={onClick}
		>
			<div className='z-50 flex-shrink-0'>
				<img src={imageUrl} alt={name} className='h-[100px] w-[100px] 2xl:h-[90px] 2xl:w-[90px]' />
			</div>
			<div
				className={`${isActive ? 'bg-[#FCBB62]' : 'bg-white'} -ml-10 flex h-[111px] w-full flex-col justify-center rounded-lg pl-14 shadow-[0_3px_10px_rgb(0,0,0,0.2)] 2xl:h-[90px]`}
			>
				<p
					className={`${isActive ? 'text-white' : 'text-[#3f3f41]'} font-['MTD Valky Bold'] text-3xl font-bold`}
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

const MenuLayout = () => {
	const [activeRestaurant, setActiveRestaurant] = useState<number | null>(null);

	const handleCardClick = (index: number) => {
		setActiveRestaurant(index === activeRestaurant ? null : index); // Toggle active state
	};

	return (
		<div className='rounded-3xl bg-[#fff9eb] px-2 py-5 lg:w-[421px] 2xl:h-[700px]'>
			<div className='mb-5 flex w-full items-center justify-center'>
				<LogoMenu />
			</div>
			<div className='h-[360px] overflow-y-auto px-3 2xl:h-[540px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-[#C5C4C4] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-2'>
				{restaurantData.map((restaurant, index) => (
					<RestaurantCard
						key={index}
						imageUrl={restaurant.imageUrl}
						name={restaurant.name}
						description={restaurant.description}
						isActive={activeRestaurant === index}
						onClick={() => handleCardClick(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default MenuLayout;
