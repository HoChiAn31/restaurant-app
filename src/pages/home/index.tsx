import Slider from 'react-slick';
import { settingHomes } from '../../constants/sliderSetting';
import { Button } from 'antd';

const HomePage = () => {
	return (
		<div>
			<Slider {...settingHomes} className='slick-home'>
				<div>
					<div
						className=''
						style={{
							backgroundImage:
								"url('https://demo.wenthemes.com/restaurantz-pro/wp-content/uploads/sites/13/2016/02/abendbrot-939435_1920.jpg')",
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							height: '100vh',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<>
							<div
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									backgroundColor: 'rgba(0, 0, 0, 0.1)', // Dark overlay with 50% opacity
									zIndex: 1,
								}}
							/>
							<div className='z-50 flex transform flex-col items-start gap-10 lg:mt-[7%] lg:max-w-[1328px]'>
								<div className='flex w-full items-center justify-center'>
									<img
										src='https://i0.wp.com/thuytadamsen.vn/wp-content/uploads/2019/05/logo-thuy-ta-dam-sen-100.png?fit=100%2C97'
										alt=''
									/>
								</div>
								<div className='w-full'>
									<div className='flex flex-col gap-8 text-center'>
										<p className="font-['MTD Valky Bold'] text-lg font-bold uppercase text-white lg:text-[40px]">
											Chào mừng đến với
										</p>
										<p className="font-['MTD Valky Bold'] text-lg font-bold uppercase text-white lg:text-[64px]">
											nhà hàng Thủy Tạ Đầm Sen
										</p>
									</div>
								</div>
								<div className="h-[161px] w-[343px] text-center font-['Manrope'] text-sm font-normal text-white md:text-2xl lg:h-[148px] lg:w-[1328px]">
									Nhà hàng Thủy Tạ Đầm Sen nằm trên hồ của công viên văn hóa Đầm Sen, với 6 sảnh
									tiệc. Có thể đáp ứng nhu cầu lượng khách lớn từ 100 đến 700 khách/sảnh. Đặc biệt,
									nhà hàng Thủy Tạ còn có vị trí tổ chức tiệc ngoài trời tại Quảng trường La Mã
									(CVVH Đầm Sen), đáp ứng lượng khách lên đến 2000. Đây là vị trí lý tưởng để các
									quý công ty tổ chức đại tiệc cuối năm, hoặc sự kiện, tiệc cưới, sinh nhật...
								</div>

								{/* <NavigationLink
									content={<p className='text-lg font-semibold text-white'>Tìm hiểu thêm</p>}
									type='button'
									to='/station'
									className='border border-white'
								/> */}
								<div className='flex w-full items-center justify-center'>
									<Button className='text-primary px-20 py-5'>Tìm hiểu thêm</Button>
								</div>
							</div>
						</>
					</div>
				</div>
				{/*  */}
				<div>
					<div
						className=''
						style={{
							backgroundImage:
								"url('https://demo.wenthemes.com/restaurantz-pro/wp-content/uploads/sites/13/2016/02/wine-622116_1920.jpg')",
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							height: '100vh',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<>
							<div
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									backgroundColor: 'rgba(0, 0, 0, 0.1)', // Dark overlay with 50% opacity
									zIndex: 1,
								}}
							/>
							<div className='z-50 mt-[7%] flex max-w-[1328px] transform flex-col items-start gap-10'>
								<div className='flex w-full items-center justify-center'>
									<img
										src='https://i0.wp.com/thuytadamsen.vn/wp-content/uploads/2019/05/logo-thuy-ta-dam-sen-100.png?fit=100%2C97'
										alt=''
									/>
								</div>
								<div className='w-full'>
									<div className='text-center'>
										<p className="font-['MTD Valky Bold'] text-[40px] font-bold uppercase leading-[52px] text-white">
											Chào mừng đến với
										</p>
										<p className="font-['MTD Valky Bold'] text-[64px] font-bold uppercase leading-[83.20px] text-white">
											nhà hàng Thủy Tạ Đầm Sen
										</p>
									</div>
								</div>
								<div className="h-[148px] w-[1328px] text-center font-['Manrope'] text-2xl font-normal text-white">
									Nhà hàng Thủy Tạ Đầm Sen nằm trên hồ của công viên văn hóa Đầm Sen, với 6 sảnh
									tiệc. Có thể đáp ứng nhu cầu lượng khách lớn từ 100 đến 700 khách/sảnh. Đặc biệt,
									nhà hàng Thủy Tạ còn có vị trí tổ chức tiệc ngoài trời tại Quảng trường La Mã
									(CVVH Đầm Sen), đáp ứng lượng khách lên đến 2000. Đây là vị trí lý tưởng để các
									quý công ty tổ chức đại tiệc cuối năm, hoặc sự kiện, tiệc cưới, sinh nhật...
								</div>

								{/* <NavigationLink
									content={<p className='text-lg font-semibold text-white'>Tìm hiểu thêm</p>}
									type='button'
									to='/station'
									className='border border-white'
								/> */}
								<div className='flex w-full items-center justify-center'>
									<Button className='text-primary px-20 py-5'>Tìm hiểu thêm</Button>
								</div>
							</div>
						</>
					</div>
				</div>
				{/*  */}
				<div>
					<div
						className=''
						style={{
							backgroundImage:
								"url('https://i0.wp.com/thuytadamsen.vn/wp-content/uploads/2019/05/cooking-20.jpg?fit=1920%2C1080')",
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							height: '100vh',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<>
							<div
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									backgroundColor: 'rgba(0, 0, 0, 0.1)', // Dark overlay with 50% opacity
									zIndex: 1,
								}}
							/>
							<div className='z-50 mt-[7%] flex max-w-[1328px] transform flex-col items-start gap-10'>
								<div className='flex w-full items-center justify-center'>
									<img
										src='https://i0.wp.com/thuytadamsen.vn/wp-content/uploads/2019/05/logo-thuy-ta-dam-sen-100.png?fit=100%2C97'
										alt=''
									/>
								</div>
								<div className='w-full'>
									<div className='text-center'>
										<p className="font-['MTD Valky Bold'] text-[40px] font-bold uppercase leading-[52px] text-white">
											Chào mừng đến với
										</p>
										<p className="font-['MTD Valky Bold'] text-[64px] font-bold uppercase leading-[83.20px] text-white">
											nhà hàng Thủy Tạ Đầm Sen
										</p>
									</div>
								</div>
								<div className="h-[148px] w-[1328px] text-center font-['Manrope'] text-2xl font-normal text-white">
									Nhà hàng Thủy Tạ Đầm Sen nằm trên hồ của công viên văn hóa Đầm Sen, với 6 sảnh
									tiệc. Có thể đáp ứng nhu cầu lượng khách lớn từ 100 đến 700 khách/sảnh. Đặc biệt,
									nhà hàng Thủy Tạ còn có vị trí tổ chức tiệc ngoài trời tại Quảng trường La Mã
									(CVVH Đầm Sen), đáp ứng lượng khách lên đến 2000. Đây là vị trí lý tưởng để các
									quý công ty tổ chức đại tiệc cuối năm, hoặc sự kiện, tiệc cưới, sinh nhật...
								</div>

								{/* <NavigationLink
									content={<p className='text-lg font-semibold text-white'>Tìm hiểu thêm</p>}
									type='button'
									to='/station'
									className='border border-white'
								/> */}
								<div className='flex w-full items-center justify-center'>
									<Button className='text-primary px-20 py-5'>Tìm hiểu thêm</Button>
								</div>
							</div>
						</>
					</div>
				</div>
			</Slider>
		</div>
	);
};

export default HomePage;
