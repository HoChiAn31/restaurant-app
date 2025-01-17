import Slider from 'react-slick';
import { Clock } from '../../components/icon';

const ThanhSenHallPage = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
	};
	return (
		<div className='pb-20 pt-16 md:pt-0'>
			<div className='relative'>
				<img src='https://i.imgur.com/K8dZNMS.png' alt='' className='w-full' />
				<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
					<div className='w-[400px] text-center lg:w-full'>
						<p className="font-['MTD Valky Bold'] text-base font-bold uppercase leading-tight text-white lg:text-[40px] lg:leading-[48px]">
							sảnh
							<br />
						</p>
						<p className="font-['MTD Valky Bold'] text-[26px] font-bold uppercase leading-loose text-white lg:text-[64px] lg:leading-[76.80px]">
							thanh sen
						</p>
					</div>
				</div>
			</div>
			<div className='mx-auto w-full space-y-6 px-5 pt-12 lg:max-w-[865px] lg:px-0'>
				<div className='flex w-full items-center justify-center'>
					<img
						src='https://i0.wp.com/thuytadamsen.vn/wp-content/uploads/2019/03/sanh-thanh-sen.jpg?w=960'
						alt='retaurant'
						className=''
					/>
				</div>
				<div className='inline-flex flex-col items-start justify-start gap-5'>
					<div className="font-['Manrope'] text-xl font-semibold leading-[30px] text-[#3f3f41]">
						Là sảnh đẹp nhất với không gian mở hướng ra hồ bán nguyệt của CVVH Đầm Sen. Với diện
						tích 862m2, sảnh Thanh Sen có thể tiếp 62 bàn (khoảng 750 khách).
					</div>
					<div className="font-['Manrope'] text-base font-normal leading-normal text-[#3f3f41]">
						Khác với các sảnh khác, sảnh Thanh Sen có hình cánh cung. Nếu như sảnh Ngân Sen được ví
						như đài sen, thì sảnh Thanh Sen lại xem như cánh sen hướng ra mặt hồ. Và điểm tô cho
						“cánh sen” là hai thuyền rồng tượng trưng những búp sen nhô lên lao. Với kiến trúc hình
						cong, nên không gian bên trong sảnh cũng được thiết kế theo hình cong từ cầu thang cho
						đến lối vào. Và cả sân khấu cũng được thiết kế hoành tráng bằng hình cong.
					</div>
				</div>

				<div className='flex flex-col gap-4 lg:flex-row'>
					<img
						src='https://i0.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/thanh-sen-3.jpg?strip=info&w=640'
						alt=''
						className='h-auto w-full lg:w-2/3'
					/>
					<div className='grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:gap-6'>
						<img
							src='https://i1.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00734.jpg?strip=info&w=748'
							alt=''
							className='h-auto object-cover'
						/>
						<img
							src='https://i0.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00730.jpg?strip=info&w=748'
							alt=''
							className='h-auto object-cover'
						/>
					</div>
				</div>
				<div className=''>
					<img
						src='https://i2.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC_01111-1024x681.jpg?strip=info&w=1920'
						alt=''
						className='w-full'
					/>
				</div>

				<div className='inline-flex flex-col items-start justify-start gap-2'>
					<div className="font-['MTD Valky Bold'] text-[32px] font-bold uppercase text-[#c75d15]">
						Rước dâu bằng thuyền hoa
					</div>
					<div className="font-['Manrope'] text-base font-normal leading-normal text-[#3f3f41]">
						Khác với các sảnh khác, sảnh Thanh Sen có hình cánh cung. Nếu như sảnh Ngân Sen được ví
						như đài sen, thì sảnh Thanh Sen lại xem như cánh sen hướng ra mặt hồ. Và điểm tô cho
						“cánh sen” là hai thuyền rồng tượng trưng những búp sen nhô lên lao. Với kiến trúc hình
						cong, nên không gian bên trong sảnh cũng được thiết kế theo hình cong từ cầu thang cho
						đến lối vào. Và cả sân khấu cũng được thiết kế hoành tráng bằng hình cong.
					</div>
				</div>
				<div className='flex flex-col gap-4 lg:flex-row'>
					<img
						src='https://i0.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/thanh-sen-4.jpg?strip=info&w=640'
						alt=''
						className='h-auto w-full lg:w-2/3'
					/>
					<div className='grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:gap-6'>
						<img
							src='https://i2.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC_2235-1024x678.jpg?strip=info&w=1280'
							alt=''
							className='h-auto object-cover'
						/>
						<img
							src='https://i0.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC_2213-1024x678.jpg?strip=info&w=1280'
							alt=''
							className='h-auto object-cover'
						/>
					</div>
				</div>

				<div className='relative flex flex-col gap-4 lg:grid lg:grid-cols-2'>
					<img
						src='https://i1.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC_0090-1024x681.jpg?strip=info&w=1280'
						alt=''
					/>
					<img
						src='https://i2.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC_0073-1024x682.jpg?strip=info&w=1280'
						alt=''
					/>
				</div>
				<div className='flex flex-col items-start justify-start gap-2'>
					<div className="font-['MTD Valky Bold'] text-[32px] font-bold uppercase text-[#c75d15]">
						sân khâu rèm nước
					</div>
					<div className="font-['Manrope'] text-base font-normal leading-normal text-[#3f3f41]">
						Bên cạnh đó, sân khấu chính của sảnh cũng được thiết kế như sân khấu ca nhạc. Mục đích
						đáp ứng mọi nhu cầu tổ chức sự kiện. Đặc biệt sân khấu này còn có hệ thống “rèm nước”.
						Khi diễn ra nghi thức, chiếm rèm nước trở nên sống động và lung linh. Tạo nên sự huyền
						diệu cho các đôi trong lễ thành hôn của mình.
					</div>
				</div>

				<div className='flex flex-col gap-4 lg:flex-row'>
					<img
						src='https://i2.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00736.jpg?strip=info&w=748'
						alt=''
						className='h-auto w-full lg:w-2/3'
					/>
					<div className='grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:gap-6'>
						<img
							src='https://i0.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC_02241-1024x683.jpg?strip=info&w=1280'
							alt=''
							className='h-auto object-cover'
						/>
						<img
							src='https://i1.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC_0155-1024x681.jpg?strip=info&w=1920'
							alt=''
							className='h-auto object-cover'
						/>
					</div>
				</div>

				<div className=''>
					<img
						src='https://i0.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC_01671-1024x596.jpg?strip=info&w=1920'
						alt=''
						className='w-full'
					/>
				</div>
				<div>
					<div className="font-['Manrope'] text-[32px] font-bold text-[#ed7d31]">
						Các sảnh tiệc khác
					</div>
					{/* desktop */}

					<div className='hidden grid-cols-3 gap-2 lg:grid'>
						<div className='space-y-1'>
							<img src='https://i.imgur.com/5NeJIqH.png' alt='' />
							<div className='flex items-center justify-between'>
								<div className="w-[311px] font-['Manrope'] text-base font-bold leading-[22.86px] text-[#c75d15]">
									Thuyền rồng Kim Long - Hoàng Long
								</div>
								<div className='flex items-center gap-1'>
									<Clock />
									<div className="text-right font-['Manrope'] text-base font-normal leading-normal text-[#666666]">
										11/02/2020
									</div>
								</div>
							</div>
						</div>
						<div className='space-y-1'>
							<img src='https://i.imgur.com/5NeJIqH.png' alt='' />
							<div className='flex items-center justify-between'>
								<div className="w-[311px] font-['Manrope'] text-base font-bold leading-[22.86px] text-[#c75d15]">
									Sảnh Hoàng Sen - Kim Sen
								</div>
								<div className='flex items-center gap-1'>
									<Clock />
									<div className="text-right font-['Manrope'] text-base font-normal leading-normal text-[#666666]">
										11/02/2020
									</div>
								</div>
							</div>
						</div>
						<div className='space-y-1'>
							<img src='https://i.imgur.com/5NeJIqH.png' alt='' />
							<div className='flex items-center justify-between'>
								<div className="w-[311px] font-['Manrope'] text-base font-bold leading-[22.86px] text-[#c75d15]">
									Sảnh Ngân Sen
								</div>
								<div className='flex items-center gap-1'>
									<Clock />
									<div className="text-right font-['Manrope'] text-base font-normal leading-normal text-[#666666]">
										11/02/2020
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* mobile */}
					<div className='lg:hidden'>
						<Slider {...settings}>
							<div className='space-y-1 px-1'>
								<img src='https://i.imgur.com/5NeJIqH.png' alt='' />
								<div className='flex items-center justify-between'>
									<div className="w-[311px] font-['Manrope'] text-base font-bold leading-[22.86px] text-[#c75d15]">
										Thuyền rồng Kim Long - Hoàng Long
									</div>
									<div className='flex items-center gap-1'>
										<Clock />
										<div className="text-right font-['Manrope'] text-base font-normal leading-normal text-[#666666]">
											11/02/2020
										</div>
									</div>
								</div>
							</div>
							<div className='space-y-1 px-1'>
								<img src='https://i.imgur.com/5NeJIqH.png' alt='' />
								<div className='flex items-center justify-between'>
									<div className="w-[311px] font-['Manrope'] text-base font-bold leading-[22.86px] text-[#c75d15]">
										Sảnh Hoàng Sen - Kim Sen
									</div>
									<div className='flex items-center gap-1'>
										<Clock />
										<div className="text-right font-['Manrope'] text-base font-normal leading-normal text-[#666666]">
											11/02/2020
										</div>
									</div>
								</div>
							</div>
							<div className='space-y-1 px-1'>
								<img src='https://i.imgur.com/5NeJIqH.png' alt='' />
								<div className='flex items-center justify-between'>
									<div className="w-[311px] font-['Manrope'] text-base font-bold leading-[22.86px] text-[#c75d15]">
										Sảnh Ngân Sen
									</div>
									<div className='flex items-center gap-1'>
										<Clock />
										<div className="text-right font-['Manrope'] text-base font-normal leading-normal text-[#666666]">
											11/02/2020
										</div>
									</div>
								</div>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThanhSenHallPage;
