import MenuLayout from '../../layouts/MenuLayout';
import Slider from 'react-slick';
import { useEffect, useRef, useState } from 'react';
import { MenuMobile } from '../../components/icon';
import SampleNextArrow from '../../components/SampleNextArrow';
import SamplePrevArrow from '../../components/SamplePrevArrow';
import { fetchRestaurantCategories } from '../../firebase/fetchRestaurantCategories';
import { fetchMenuItems } from '../../firebase/fetchMenuItems';
import { MenuItemProps } from '../../types/menuItem';

interface RestaurantCategory {
	id: string;
	imageUrl: string;
	name: string;
	description: string;
}

const MenuPage = () => {
	const [activeIndex, setActiveIndex] = useState<string | null>();
	const [menuData, setMenuData] = useState<MenuItemProps[]>([]);
	const [menuDataFilter, setMenuDataFilter] = useState<MenuItemProps[]>([]);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeItem, setActiveItem] = useState<MenuItemProps>();
	const [isLoading, setIsLoading] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const [filterMenu, setFilterMenu] = useState<string>();
	const [quantityShow, setQuantityShow] = useState<number>(4);
	const handleItemClick = (index: string) => {
		setActiveIndex(index);
	};
	const [restaurantCategories, setRestaurantCategories] = useState<RestaurantCategory[]>([]);

	useEffect(() => {
		const getCategories = async () => {
			try {
				const data = await fetchRestaurantCategories();
				// console.log('Data:', data);
				setRestaurantCategories(data as RestaurantCategory[]);
			} catch (error) {
				console.error(error);
			} finally {
			}
		};

		getCategories();
	}, []);
	useEffect(() => {
		const getMenuItems = async () => {
			try {
				const data = await fetchMenuItems();

				const filter = data.filter((item) => item.categoryMenu === restaurantCategories[0].id);

				setMenuData(data);
				setMenuDataFilter(filter);

				if (filter.length > 0) {
					setActiveItem(filter[0]);
					setActiveIndex(filter[0].id);
					setQuantityShow(filter.length);
				}
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(true);
			}
		};
		if (restaurantCategories.length > 0) {
			getMenuItems();
		}
	}, [restaurantCategories]);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		if (activeIndex && menuData) {
			const filter = menuData.find((menu) => menu.id === activeIndex);
			setActiveItem(filter);
		}
	}, [activeIndex, menuData]);

	useEffect(() => {
		if (filterMenu) {
			const filter = menuData.filter((item) => item.categoryMenu === filterMenu);

			if (filter.length > 0) {
				setActiveItem(filter[0]);
				setActiveIndex(filter[0].id);

				setQuantityShow(filter.length);
			}
			setMenuDataFilter(filter);
		}
	}, [filterMenu, menuData]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	const handleFilterMenu = (e: string) => {
		setFilterMenu(e);
	};
	if (!isLoading) {
		return (
			<>
				<p>Loading...</p>
			</>
		);
	}
	const settingMenu = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: quantityShow,
		slidesToScroll: 1,
		autoplaySpeed: 1000,
		nextArrow: <SampleNextArrow typeCus='menu' />,
		prevArrow: <SamplePrevArrow typeCus='menu' />,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: quantityShow - 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className='relative px-5 pb-40 lg:px-14 2xl:px-20'>
			<div className='absolute -left-6 -top-64 z-10 h-[400px] w-[320px] transform rounded-full bg-transparent opacity-15 outline outline-[60px] outline-[#ed7d31] lg:-left-[10%] lg:-top-[106%] lg:h-[900px] lg:w-[900px] lg:outline-[120px]'></div>

			{/* Nút mở menu (chỉ hiển thị trên mobile) */}
			<button
				className='fixed right-0 top-28 z-50 flex items-center justify-center rounded-full p-3 text-white md:hidden'
				onClick={toggleMenu}
			>
				{/* <IoMenu size={24} /> */}
				<MenuMobile />
			</button>

			{isMenuOpen && (
				<div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 md:hidden'>
					<div ref={menuRef} className='relative w-full max-w-sm rounded-lg p-5 shadow-lg'>
						<button className='absolute right-10 text-5xl text-[#ed7d31]' onClick={toggleMenu}>
							×
						</button>
						<MenuLayout data={restaurantCategories} setCategory={handleFilterMenu} />
					</div>
				</div>
			)}

			<div className='relative z-20 flex flex-col justify-between md:flex-row'>
				{isLoading && menuDataFilter.length > 0 ? (
					<div>
						<div>
							{isLoading && activeItem && (
								<div className='flex flex-col md:flex-row lg:items-center'>
									<div className='flex items-center justify-center'>
										<img
											src={activeItem.imageUrl}
											alt={activeItem.titleFirst}
											className='h-[300px] w-[300px] md:h-[465px] md:w-[465px]'
										/>
									</div>
									<div className='space-y-6 px-4 md:h-[359px] md:w-[578px] md:px-0'>
										<div className='text-3xl font-bold text-[#3f3f41] md:text-5xl'>
											{activeItem.titleFirst}
										</div>
										<div className='flex items-start justify-start gap-2 border-b-2 border-[#ed7d31] py-2'>
											<div className='font-mtdValky text-5xl font-bold uppercase text-[#ed7d31] md:text-7xl'>
												{activeItem.titleLast}
											</div>
										</div>
										<div className='mt-[10px] text-lg text-[#3f3f41] md:text-2xl'>
											{activeItem.description}
										</div>
										<div className='mt-[10px] flex flex-wrap gap-2'>
											{activeItem.category.map((cat, idx) => (
												<div
													key={idx}
													className='rounded bg-[#fcbb62] px-4 py-1 text-lg font-bold text-white md:text-xl'
												>
													{cat}
												</div>
											))}
										</div>

										<div className='mt-[10px] text-2xl font-bold text-[#ed7d31] md:text-[40px]'>
											{new Intl.NumberFormat('vi-VN').format(activeItem.minPrice)} -{' '}
											{new Intl.NumberFormat('vi-VN').format(activeItem.maxPrice)} VNĐ
										</div>
									</div>
								</div>
							)}
							<div className='px-5 md:px-20'>
								<div className='w-full lg:w-[860px] 2xl:w-[1000px]'>
									<Slider {...settingMenu}>
										{menuDataFilter.map((item, index) => (
											<div
												key={index}
												onClick={() => handleItemClick(item.id)}
												className={`cursor-pointer`}
											>
												<div className={`flex items-center justify-center`}>
													<div
														className={`flex-col items-center justify-center p-3 ${
															activeIndex === item.id ? 'rounded-lg bg-white' : ''
														}`}
													>
														<div className='flex items-center justify-center'>
															<img
																src={item.imageUrl}
																alt={item.titleLast}
																className='h-16 w-16 lg:h-24 lg:w-24 2xl:h-28 2xl:w-28'
															/>
														</div>
														<p className='pt-2 text-center text-xs text-[#3f3f41] md:text-xl lg:w-24 lg:text-lg 2xl:h-20 2xl:w-32'>
															{item.titleFirst} <span>{item.titleLast}</span>
														</p>
													</div>
												</div>
											</div>
										))}
									</Slider>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div>Chưa có trong thực đơn</div>
				)}

				{/* Chỉ hiển thị MenuLayout trên màn hình lớn */}
				<div className='hidden md:block'>
					<MenuLayout data={restaurantCategories} setCategory={handleFilterMenu} />
				</div>
			</div>
		</div>
	);
};

export default MenuPage;
