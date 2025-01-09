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
	// Xác định key đang active dựa vào pathname
	const selectedKeys = (() => {
		if (name.includes('/menu')) return ['menu'];
		if (name.includes('/phong-hoi-nghi')) return ['Phòng hội nghị'];
		if (name.includes('/khuyen-mai-tiec-cuoi')) return ['Khuyến mãi tiệc cưới'];
		if (name.includes('/sanhtiec')) return ['SubMenu'];
		return [];
	})();

	// Use useEffect to update the state when the window is resized
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		window.addEventListener('resize', handleResize);

		// Cleanup the event listener on unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className='fixed left-0 right-0 top-0 z-[99999] bg-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] lg:bg-transparent lg:shadow-none'>
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
						/>
						<div className='flex flex-col'>
							<span className="font-['MTD Valky Bold'] text-xl font-semibold leading-[28.80px] text-[#434146] 2xl:text-2xl">
								Nhà hàng
							</span>
							<span className="font-['MTD Valky Bold'] text-3xl font-semibold uppercase text-[#434146] 2xl:text-4xl">
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
								<Menu.Item key='Phòng hội nghị'>
									<Link to={'/phong-hoi-nghi'}>Phòng hội nghị</Link>
								</Menu.Item>
								<Menu.Item key='Khuyến mãi tiệc cưới'>
									<Link to={'/khuyen-mai-tiec-cuoi'}>Khuyến mãi tiệc cưới</Link>
								</Menu.Item>
								<Menu.SubMenu
									key='SubMenu'
									title={
										<div className='flex items-center gap-2'>
											<span>Sảnh tiệc</span>
										</div>
									}
								>
									<Menu.Item key='Thuyền rồng Kim Long - Hoàng Long'>
										Thuyền rồng Kim Long - Hoàng Long
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
										itemSelectedColor: '#c75d15',
										itemHoverColor: '#c75d15',
									},
								},
							}}
						>
							<Menu
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
									<Menu.Item key='Thuyền rồng Kim Long - Hoàng Long'>
										Thuyền rồng Kim Long - Hoàng Long
									</Menu.Item>
									<Menu.Item key='Sảnh Ngân Sen'>Sảnh Ngân Sen</Menu.Item>
									<Menu.Item key='Sảnh Hoàng Sen - Kim Sen'>Sảnh Hoàng Sen - Kim Sen</Menu.Item>
									<Menu.Item key='Sảnh Thanh Sen'>Sảnh Thanh Sen</Menu.Item>
								</Menu.SubMenu>
								<Menu.Item key='Phòng hội nghị'>
									<Link to={'/phong-hoi-nghi'}>Phòng hội nghị</Link>
								</Menu.Item>
								<Menu.Item key='Khuyến mãi tiệc cưới'>
									<Link to={'/khuyen-mai-tiec-cuoi'}>Khuyến mãi tiệc cưới</Link>
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
