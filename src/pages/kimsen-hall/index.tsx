import Slider from 'react-slick';
import { Clock } from '../../components/icon';

const KimSenHallPage = () => {
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
				<img src='https://i.imgur.com/8as1nBQ.jpeg' alt='bg' className='w-full' />
				<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
					<div className='w-[400px] text-center lg:w-full'>
						<p className='font-mtdValky text-base font-bold uppercase leading-tight text-white lg:text-[40px] lg:leading-[48px]'>
							sảnh
							<br />
						</p>
						<p className='font-mtdValky text-[26px] font-bold uppercase leading-loose text-white lg:text-[64px] lg:leading-[76.80px]'>
							hoàng sen - kim sen
						</p>
					</div>
				</div>
			</div>
			<div className='mx-auto w-full space-y-6 px-5 pt-12 lg:max-w-[865px] lg:px-0'>
				<div className='flex w-full items-center justify-center'>
					<img
						src='https://i0.wp.com/thuytadamsen.vn/wp-content/uploads/2019/03/sanh-kim-sen.jpg?w=960'
						alt='retaurant'
						className=''
					/>
				</div>
				<div className="font-['Manrope'] text-xl font-semibold leading-[30px] text-[#3f3f41]">
					Là sảnh kết hợp của 2 sảnh nhỏ là Hoàng Sen và Kim Sen. Với sảnh Kim Sen có thể tổ chức 28
					bàn (trên dưới 250 khách). Còn với sảnh Hoàng Sen có thể đáp ứng 50 bàn (trên dưới 500
					người).
				</div>

				<div className='relative grid grid-cols-2 gap-4'>
					<img
						// className='absolute left-0 top-0 h-[486px] w-[647.47px]'
						src='https://i0.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/S%E1%BA%A3nh-ho%C3%A0ng-sen.jpg?strip=info&w=960'
						alt=''
					/>
					<img
						// className='absolute left-[671.53px] top-0 h-[486px] w-[648.47px]'
						src='https://i1.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/sanh-kim-sen.jpg?strip=info&w=960'
						alt=''
					/>
				</div>

				<div className='inline-flex flex-col items-start justify-start gap-5'>
					<div className="self-stretch font-['Manrope'] text-base font-normal leading-normal text-[#3f3f41]">
						Sảnh nằm ngay lối vào của cổng số 2 Đầm Sen, có thiết kế Châu Âu sang trọng đẳng cấp.
						Khi gộp cả Hoàng Sen và Kim Sen để thành Hoàng Kim sen, có thể đáp ứng lượng khách trên
						dưới 750 người. tương đương 78 bàn.
					</div>
					<div className='inline-flex items-center justify-start gap-2 self-stretch'>
						<div className='h-[33px] w-1.5 bg-[#ed7d31]' />
						<div className="shrink grow basis-0 font-['Manrope'] text-base font-medium leading-tight text-[#c75d15]">
							Nếu bạn cần tiếp khoảng 78 bàn (750), hãy chọn sảnh Hoàng Kim Sen nhà hàng Thủy Tạ Đầm
							Sen. Đồng thời có thể chia thành 2 sảnh nhỏ là Hoàng Sen và Kim Sen.
						</div>
					</div>
					<div className="self-stretch font-['Manrope'] text-base font-normal leading-normal text-[#3f3f41]">
						Mặc dù diện tích lớn, nhưng thiết kế của sảnh Hoàng Kim Sen hoàn toàn không có cột nhà
						giữa sảnh. (Điều mà nhiều kiến trúc khác thường mắc phải, hạn chế quan sát, chụp ảnh và
						ghi hình sự kiện). Đồng thời các kỹ sư của Phuthotourist đã khéo léo thiết kế khung trần
						sang trọng. Đèn trang trí màu vàng, khiến thực khách luôn cảm thấy không gian ấm cúng.
						Đồng thời, sân khấu được thiết kế phong cách La Mã, lung linh với đèn led hiện đại phù
						hợp cho những đôi uyên ương ra mắt hai họ.
					</div>
				</div>

				<div className='flex flex-col gap-4 lg:flex-row'>
					<img
						src='https://i1.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00700.jpg?strip=info&w=748'
						alt=''
						className='h-auto w-full lg:w-2/3'
					/>
					<div className='grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:gap-6'>
						<img
							src='https://i1.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00724.jpg?strip=info&w=748'
							alt=''
							className='h-auto object-cover'
						/>
						<img
							src='https://i0.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00771.jpg?strip=info&w=748'
							alt=''
							className='h-auto object-cover'
						/>
					</div>
				</div>
				<div className=''>
					<img
						src='https://i0.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00782.jpg?strip=info&w=748'
						alt=''
						className='w-full'
					/>
					<div className="text-center font-['Manrope'] text-xl font-semibold leading-[30px] text-[#ed7d31]">
						Sảnh Hoàng Sen
					</div>
				</div>
				<div className='flex flex-col gap-4 lg:flex-row'>
					<img
						src='https://i1.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00706.jpg?strip=info&w=748'
						alt=''
						className='h-auto w-full lg:w-2/3'
					/>
					<div className='grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:gap-6'>
						<img
							src='https://i1.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00707.jpg?strip=info&w=748'
							alt=''
							className='h-auto object-cover'
						/>
						<img
							src='https://i2.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00714.jpg?strip=info&w=748'
							alt=''
							className='h-auto object-cover'
						/>
					</div>
				</div>
				<div className=''>
					<img
						src='https://i2.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00722.jpg?strip=info&w=748'
						alt=''
						className='w-full'
					/>
					<div className="text-center font-['Manrope'] text-xl font-semibold leading-[30px] text-[#ed7d31]">
						Sảnh Kim Sen
					</div>
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

export default KimSenHallPage;
