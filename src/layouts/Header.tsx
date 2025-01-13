import { useEffect, useState } from 'react';
import { ConfigProvider, Input, Menu } from 'antd';
import { SearchOutlined, MenuOutlined } from '@ant-design/icons';
import { ArrowDown } from '../components/icon';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
	const location = useLocation();
	const name = location.pathname;

	const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initial check for mobile view
	const [isToggleMenu, setIsToggleMenu] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false); // Track scrolling

	// Xác định key đang active dựa vào pathname
	const selectedKeys = (() => {
		if (name.includes('/menu')) return ['menu'];
		if (name.includes('/conference-room')) return ['conference-room'];
		if (name.includes('/promotion-wedding')) return ['promotion-wedding'];
		if (name.includes('/banquetHall')) return ['SubMenu'];
		if (name.includes('/banquetHall/dragon-boat')) return ['SubMenu', 'dragon-boat'];
		if (name.includes('/banquetHall/ngansen-hall')) return ['SubMenu', 'ngansen-hall'];
		if (name.includes('/banquetHall/kimsen-hall')) return ['SubMenu', 'kimsen-hall'];
		if (name.includes('/banquetHall/thanhsen-hall')) return ['SubMenu', 'thanhsen-hall'];
		return [];
	})();

	// Use useEffect to update the state when the window is resized
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		const handleScroll = () => {
			setIsScrolled(window.scrollY > 300); // Change header background color on scroll for both mobile and desktop
		};

		window.addEventListener('resize', handleResize);
		window.addEventListener('scroll', handleScroll);

		// Cleanup the event listeners on unmount
		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`fixed left-0 right-0 top-0 z-[99999] ${isScrolled ? 'lg:bg-white lg:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]' : ''} shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] lg:bg-transparent lg:shadow-none`}
		>
			<div className='relative mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-2 2xl:max-w-[1680px]'>
				{/* Mobile Layout */}
				{isMobile && (
					<div className='flex w-full items-center md:hidden'>
						<button
							className='text-2xl text-[#434146]'
							onClick={() => setIsToggleMenu(!isToggleMenu)}
						>
							<MenuOutlined />
						</button>
						<div className='flex flex-1 justify-center'>
							<img
								src='https://i0.wp.com/thuytadamsen.vn/wp-content/uploads/2019/05/logo-thuy-ta-dam-sen-100.png?fit=100%2C97'
								alt='Logo'
							/>
						</div>
					</div>
				)}

				{/* Desktop Layout */}
				{!isMobile && (
					<div className='hidden items-center gap-2 md:flex'>
						<img
							src='https://i0.wp.com/thuytadamsen.vn/wp-content/uploads/2019/05/logo-thuy-ta-dam-sen-100.png?fit=100%2C97'
							alt='Logo'
							className='lg:w-20'
						/>
						<div className='flex flex-col'>
							<span
								className={`${isScrolled ? '!text-[#434146]' : 'text-white'} ${name === '/menu' ? 'text-[#434146]' : 'text-white'} font-['MTD Valky Bold'] text-xl font-semibold leading-[28.80px] 2xl:text-2xl`}
							>
								Nhà hàng
							</span>
							<span
								className={`${isScrolled ? '!text-[#434146]' : 'text-white'} ${name === '/menu' ? 'text-[#434146]' : 'text-white'} font-['MTD Valky Bold'] text-3xl font-semibold uppercase text-[#434146] 2xl:text-4xl`}
							>
								Thủy Tạ Đầm Sen
							</span>
						</div>
					</div>
				)}

				{/* Menu Mobile */}
				{isMobile && (
					<div
						className={`${isToggleMenu ? 'block' : 'hidden'} absolute inset-x-0 top-full block w-full bg-white shadow-md md:hidden`}
					>
						<ConfigProvider
							theme={{
								token: {
									colorPrimary: '#c75d15',
									colorPrimaryHover: '#c75d15',
								},
								components: {
									Menu: {
										itemSelectedColor: '#c75d15',
										itemHoverColor: '#c75d15',
									},
								},
							}}
						>
							<Menu
								mode='inline'
								selectedKeys={selectedKeys}
								className='border-transparent bg-transparent'
							>
								<Menu.Item key='menu'>
									<Link to={'/menu'}>Thực đơn</Link>
								</Menu.Item>
								<Menu.Item key='conference-room'>
									<Link to={'/conference-room'}>Phòng hội nghị</Link>
								</Menu.Item>
								<Menu.Item key='promotion-wedding'>
									<Link to={'/promotion-wedding'}>Khuyến mãi tiệc cưới</Link>
								</Menu.Item>
								<Menu.SubMenu
									key='SubMenu'
									title={
										<div className='flex items-center gap-2'>
											<span>Sảnh tiệc</span>
										</div>
									}
								>
									<Menu.Item key='dragonBoat'>
										<Link to={'/dragonBoat'}>Thuyền rồng Kim Long - Hoàng Long</Link>
									</Menu.Item>
									<Menu.Item key='Sảnh Ngân Sen'>Sảnh Ngân Sen</Menu.Item>
									<Menu.Item key='Sảnh Hoàng Sen - Kim Sen'>Sảnh Hoàng Sen - Kim Sen</Menu.Item>
									<Menu.Item key='Sảnh Thanh Sen'>Sảnh Thanh Sen</Menu.Item>
								</Menu.SubMenu>
							</Menu>
						</ConfigProvider>
					</div>
				)}

				{/* Menu Desktop */}
				{!isMobile && (
					<div className='z-50 hidden md:flex'>
						<ConfigProvider
							theme={{
								token: {
									colorPrimary: '#c75d15',
									colorPrimaryHover: '#c75d15',
								},
								components: {
									Menu: {
										itemColor: isScrolled ? '#434146' : name === '/menu' ? '#434146' : '#878787',
										itemSelectedColor: '#c75d15',
										itemHoverColor: '#c75d15',
										activeBarHeight: 0,
										itemBg: '#c75d15',
									},
								},
							}}
						>
							<Menu
								theme={name !== '/menu' || isScrolled ? 'light' : 'light'}
								mode='horizontal'
								selectedKeys={selectedKeys}
								className='border-transparent bg-transparent'
							>
								<Menu.Item key='menu'>
									<Link to={'/menu'}>Thực đơn</Link>
								</Menu.Item>
								<Menu.SubMenu
									key='SubMenu'
									title={
										<div className='flex items-center gap-2'>
											<span>Sảnh tiệc</span>
											<ArrowDown color='#434146' />
										</div>
									}
								>
									<Menu.Item key='dragon-boat'>
										<Link to={'/banquetHall/dragon-boat'}>Thuyền rồng Kim Long - Hoàng Long</Link>
									</Menu.Item>
									<Menu.Item key='ngansen-hall'>
										<Link to={'/banquetHall/ngansen-hall'}>Sảnh Ngân Sen</Link>
									</Menu.Item>
									<Menu.Item key='kimsen-hall'>
										<Link to={'/banquetHall/kimsen-hall'}>Sảnh Hoàng Sen - Kim Sen</Link>
									</Menu.Item>
									<Menu.Item key='thanhsen-hall'>
										<Link to={'/banquetHall/thanhsen-hall'}>Sảnh Thanh Sen</Link>
									</Menu.Item>
								</Menu.SubMenu>
								<Menu.Item key='conference-room'>
									<Link to={'/conference-room'}>Phòng hội nghị</Link>
								</Menu.Item>
								<Menu.Item key='promotion-wedding'>
									<Link to={'/promotion-wedding'}>Khuyến mãi tiệc cưới</Link>
								</Menu.Item>
							</Menu>
						</ConfigProvider>
					</div>
				)}

				{/* Ô tìm kiếm (chỉ hiển thị trên desktop) */}
				{!isMobile && (
					<div className='hidden w-1/5 md:block'>
						<ConfigProvider
							theme={{
								components: {
									Input: {
										activeBorderColor: '#ffffff',
										hoverBorderColor: '#ffffff',
										hoverBg: '#ffffff',
									},
								},
							}}
						>
							<Input
								size='large'
								placeholder='Tìm kiếm'
								suffix={<SearchOutlined />}
								className='border-transparent hover:outline-none hover:outline-transparent'
							/>
						</ConfigProvider>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
