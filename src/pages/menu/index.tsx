import MenuLayout from '../../layouts/MenuLayout';
import { settingMenu } from '../../constants/sliderSetting';
import Slider from 'react-slick';
import { useEffect, useRef, useState } from 'react';
import { menuItems } from '../../mocks/dataMenu';
import { MenuMobile } from '../../components/icon';

const MenuPage = () => {
	const [activeIndex, setActiveIndex] = useState<string | null>(menuItems[0].id);
	const [isMenuOpen, setIsMenuOpen] = useState(false); // State hiển thị menu
	const menuRef = useRef<HTMLDivElement>(null);
	const handleItemClick = (index: string) => {
		setActiveIndex(index);
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const activeItem = menuItems.find((item) => item.id === activeIndex);
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		};

		if (isMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [isMenuOpen]);
	return (
		<div className='relative px-5 pb-40 md:px-20'>
			<div className='absolute -left-[10%] -top-[106%] z-10 h-[900px] w-[900px] transform rounded-full bg-transparent opacity-15 outline outline-[120px] outline-[#ed7d31]'></div>

			{/* Nút mở menu (chỉ hiển thị trên mobile) */}
			<button
				className='fixed right-0 top-28 z-50 flex items-center justify-center rounded-full p-3 text-white md:hidden'
				onClick={toggleMenu}
			>
				{/* <IoMenu size={24} /> */}
				<MenuMobile />
			</button>

			{/* Hiển thị MenuLayout khi isMenuOpen là true */}
			{isMenuOpen && (
				<div
					className='fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50 md:hidden'
					ref={menuRef}
				>
					<div className='relative w-full max-w-sm rounded-lg p-5 shadow-lg'>
						<button
							className='absolute -right-10 top-6 text-5xl text-[#ed7d31]'
							onClick={toggleMenu}
						>
							×
						</button>
						<MenuLayout />
					</div>
				</div>
			)}

			<div className='relative z-20 flex flex-col justify-between md:flex-row'>
				<div>
					<div>
						{activeItem && (
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
										<div className='text-5xl font-bold uppercase text-[#ed7d31] md:text-7xl'>
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
										{activeItem.minPrice} - {activeItem.maxPrice} VNĐ
									</div>
								</div>
							</div>
						)}
						<div className='px-5 md:px-20'>
							<div className='w-full md:w-[1000px]'>
								<Slider {...settingMenu}>
									{menuItems.map((item, index) => (
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
															className='h-20 w-20 md:h-28 md:w-28'
														/>
													</div>
													<p className='h-20 w-32 pt-2 text-center text-lg text-[#3f3f41] md:text-xl'>
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

				{/* Chỉ hiển thị MenuLayout trên màn hình lớn */}
				<div className='hidden md:block'>
					<MenuLayout />
				</div>
			</div>
		</div>
	);
};

export default MenuPage;
