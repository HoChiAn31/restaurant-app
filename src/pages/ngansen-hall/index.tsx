import Slider from 'react-slick';
import { Clock } from '../../components/icon';

const NganSenHallPage = () => {
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
						<p className='font-mtdValky text-base font-bold uppercase leading-tight text-white lg:text-[40px] lg:leading-[48px]'>
							sảnh
							<br />
						</p>
						<p className='font-mtdValky text-[26px] font-bold uppercase leading-loose text-white lg:text-[64px] lg:leading-[76.80px]'>
							ngân sen
						</p>
					</div>
				</div>
			</div>
			<div className='mx-auto w-full space-y-6 px-5 pt-12 lg:max-w-[865px] lg:px-0'>
				<div className='flex w-full items-center justify-center'>
					<img
						src='https://i0.wp.com/thuytadamsen.vn/wp-content/uploads/2019/03/sanh-ngan-sen.jpg?w=960'
						alt='retaurant'
						className=''
					/>
				</div>
				<div className='inline-flex flex-col items-start justify-start gap-4'>
					<div className="font-['Manrope'] text-xl font-semibold leading-[30px] text-[#3f3f41]">
						Nếu bạn có nhu cầu tiếp 500 khách, thì sảnh Ngân Sen là lựa chọn hợp lý. Sức chứa của
						sảnh có thể xếp 37 bàn cho một sự kiện.
					</div>
					<div className="font-['Manrope'] text-base font-normal leading-normal text-[#3f3f41]">
						Ngân Sen là một khu tiệc của nhà hàng Thủy Tạ thuộc Công viên văn hóa Đầm Sen (do
						Phuthotourist quản lý). Đa số thực khách bước vào nhà hàng đều cho rằng đây là sảnh
						chính. Bởi vị trí của nó nằm trực diện cổng số 2 CVVH Đầm Sen. Điều này không sai, bởi
						theo kiến trúc, thì sảnh này là vị trí của đài sen nếu nhìn từ trên cao. Còn sảnh Thanh
						Sen sẽ là cánh hoa tỏa ra trên mặt hồ.
						<br />
						Với kiến trúc hình tròn, rộng 402m2, sảnh được trang trí theo phong cách cung đình. Sảnh
						có một tầng lửng, giúp cho việc ghi hình sự kiện có thêm nhiều góc cạnh khác nhau.
					</div>
				</div>
				<div className='flex flex-col gap-4 lg:flex-row lg:gap-4'>
					<img
						src='https://i0.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC_0190.jpg?strip=info&w=1920'
						alt=''
						className='h-auto w-full lg:w-2/3'
					/>
					<div className='grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:gap-6'>
						<img
							src='https://i2.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC_01961.jpg?strip=info&w=1920'
							alt=''
							className='h-auto object-cover'
						/>
						<img
							src='https://i0.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC_0232.jpg?strip=info&w=1280'
							alt=''
							className='h-auto object-cover'
						/>
					</div>
				</div>
				{/* desktop */}

				<div className='hidden gap-4 lg:flex'>
					<div className='flex w-1/2 flex-col gap-4'>
						<img
							src='https://i0.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00740.jpg?strip=info&w=748'
							alt=''
							className='h-auto w-full object-cover'
						/>
						<img
							src='https://i2.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00757.jpg?strip=info&w=748'
							alt=''
							className='h-auto w-full object-cover'
						/>
					</div>
					<img
						src='https://i0.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00760.jpg?strip=info&w=748'
						alt=''
						className='h-auto w-2/3 object-cover'
					/>
				</div>
				{/* mobile */}
				<div className='space-y-4 lg:hidden'>
					<img
						src='https://i0.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00740.jpg?strip=info&w=748'
						alt=''
						className='h-auto w-full object-cover'
					/>
					<div className='grid grid-cols-2 gap-4'>
						<img
							src='https://i2.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00757.jpg?strip=info&w=748'
							alt=''
							className='h-auto w-full object-cover'
						/>
						<img
							src='https://i0.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00760.jpg?strip=info&w=748'
							alt=''
							className='h-auto w-full object-cover'
						/>
					</div>
				</div>

				<div className='flex flex-col gap-4 lg:flex-row'>
					<img
						src='https://i2.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/ng%C3%A2n-sen-1.jpg?strip=info&w=640'
						alt=''
						className='h-auto w-full object-cover lg:w-1/3'
					/>
					<img
						src='https://i1.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/ng%C3%A2n-sen-2.jpg?strip=info&w=640'
						alt=''
						className='h-auto w-full object-cover lg:w-1/3'
					/>
					<img
						src='https://i2.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/ng%C3%A2n-sen.jpg?strip=info&w=467'
						alt=''
						className='h-auto w-full object-cover lg:w-1/3'
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
									Sảnh Thanh Sen
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
										Sảnh Thanh Sen
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

export default NganSenHallPage;
