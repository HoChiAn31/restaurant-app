import Slider from 'react-slick';
import { settingHomes } from '../../constants/sliderSetting';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchImages } from '../../firebase/fetchImage';
import { ImageProps } from '../../types/image';

const HomePage = () => {
	const nav = useNavigate();
	const handleSwitchMenu = () => {
		nav('/menu');
	};
	const [dataImage, setDataImage] = useState<ImageProps[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	useEffect(() => {
		const getCategories = async () => {
			try {
				const data = await fetchImages();
				console.log('Data fetched successfully', data);
				setDataImage(data as ImageProps[]);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(true);
			}
		};

		getCategories();
	}, []);
	if (!isLoading) {
		return (
			<div
				className='flex h-[100vh] items-center justify-center lg:h-screen'
				style={{
					backgroundImage: `url('https://demo.wenthemes.com/restaurantz-pro/wp-content/uploads/sites/13/2016/02/abendbrot-939435_1920.jpg')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',

					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Button className='py-5 text-primary' onClick={handleSwitchMenu}>
					Tìm hiểu thêm
				</Button>
			</div>
		);
	}
	return (
		<div>
			<Slider {...settingHomes} className='slick-home'>
				{dataImage.map((data) => (
					<div key={data.id} className=''>
						<div
							className='h-[100vh] lg:h-screen'
							style={{
								backgroundImage: `url('${data.image}')`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',

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
								<div className='relative z-50 -mt-32 flex transform flex-col items-start justify-center gap-4 lg:-mt-[2%] lg:max-w-[1328px] lg:gap-10'>
									<div className='flex w-full items-center justify-center'>
										<img
											src='https://i0.wp.com/thuytadamsen.vn/wp-content/uploads/2019/05/logo-thuy-ta-dam-sen-100.png?fit=100%2C97'
											alt=''
										/>
									</div>
									<div className='w-full'>
										<div className='flex flex-col text-center lg:gap-8'>
											<p className='font-mtdValky text-lg font-bold uppercase text-white lg:text-[40px]'>
												Chào mừng đến với
											</p>
											<p className='font-mtdValky text-lg font-bold uppercase text-white lg:text-[64px]'>
												nhà hàng Thủy Tạ Đầm Sen
											</p>
										</div>
									</div>
									<div className="h-[161px] w-[343px] text-center font-['Manrope'] text-sm font-normal text-white md:text-2xl lg:h-[148px] lg:w-[1328px]">
										Nhà hàng Thủy Tạ Đầm Sen nằm trên hồ của công viên văn hóa Đầm Sen, với 6 sảnh
										tiệc. Có thể đáp ứng nhu cầu lượng khách lớn từ 100 đến 700 khách/sảnh. Đặc
										biệt, nhà hàng Thủy Tạ còn có vị trí tổ chức tiệc ngoài trời tại Quảng trường La
										Mã (CVVH Đầm Sen), đáp ứng lượng khách lên đến 2000. Đây là vị trí lý tưởng để
										các quý công ty tổ chức đại tiệc cuối năm, hoặc sự kiện, tiệc cưới, sinh nhật...
									</div>

									<div className='absolute bottom-40 flex w-full items-center justify-center lg:hidden'>
										<Button className='w-full py-5 text-primary' onClick={handleSwitchMenu}>
											Tìm hiểu thêm
										</Button>
									</div>
									<div className='hidden w-full items-center justify-center lg:flex'>
										<Button className='px-20 py-5 text-primary' onClick={handleSwitchMenu}>
											Tìm hiểu thêm
										</Button>
									</div>
								</div>
							</>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default HomePage;
