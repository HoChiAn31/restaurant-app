import { ConfigProvider, Input, Menu } from 'antd';
import {
	MailOutlined,
	AppstoreOutlined,
	SettingOutlined,
	DownOutlined,
	SearchOutlined,
} from '@ant-design/icons';
import { ArrowDown } from '../components/icon';
import { useState } from 'react';

const Header = () => {
	const [openKeys, setOpenKeys] = useState<string[]>([]);

	return (
		<div className='mx-auto flex max-w-[1400px] items-center justify-between'>
			<div className='flex items-center gap-2'>
				<img
					src='https://i0.wp.com/thuytadamsen.vn/wp-content/uploads/2019/05/logo-thuy-ta-dam-sen-100.png?fit=100%2C97'
					alt=''
				/>
				<div className='flex flex-col'>
					<span className="font-['MTD Valky Bold'] text-2xl font-bold leading-[28.80px] text-[#434146]">
						Nhà hàng
					</span>
					<span className="font-['MTD Valky Bold'] text-4xl font-bold uppercase text-[#434146]">
						Thủy Tạ Đầm Sen
					</span>
				</div>
			</div>
			<div>
				<ConfigProvider
					theme={{
						token: {
							colorPrimary: '#c75d15', // Màu chữ mặc định
							colorPrimaryHover: '#c75d15', // Màu chữ khi hover
						},
						components: {
							Menu: {
								itemSelectedColor: '#c75d15', // Màu chữ khi active

								itemHoverColor: '#c75d15',
							},
						},
					}}
				>
					<Menu
						mode='horizontal'
						defaultSelectedKeys={['mail']}
						openKeys={openKeys}
						className='border-transparent bg-transparent'
						onOpenChange={(keys) => setOpenKeys(keys)}
					>
						<Menu.Item key='Thực đơn'>Thực đơn</Menu.Item>

						<Menu.SubMenu
							key='SubMenu'
							title={
								<div className='flex items-center gap-2'>
									<span>Sảnh tiệc</span>
									<ArrowDown color={openKeys.includes('SubMenu') ? '#c75d15' : '#434146'} />
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
						<Menu.Item key='Phòng hội nghị'>Phòng hội nghị</Menu.Item>
						<Menu.Item key='Khuyến mãi tiệc cưới'>Khuyến mãi tiệc cưới</Menu.Item>
					</Menu>
				</ConfigProvider>
			</div>

			<div className='w-1/5'>
				<ConfigProvider
					theme={{
						// token: {
						// 	colorPrimary: '', // Màu chữ mặc định
						// 	colorPrimaryHover: '', // Màu chữ khi hover
						// },
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
		</div>
	);
};

export default Header;
