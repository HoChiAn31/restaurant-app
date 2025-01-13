import { Clock } from '../../components/icon';

const DragonBoatPage = () => {
	return (
		<div className='pb-20'>
			<div className='relative'>
				<img
					src='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/restaurants%2FBG-header.png?alt=media&token=07d9ef21-b7b6-4deb-b95c-9eb5bfd3f1ec'
					alt=''
				/>
				<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
					<div className='text-center'>
						<span className="font-['MTD Valky Bold'] text-[40px] font-bold uppercase leading-[48px] text-white">
							thuyền rồng
							<br />
						</span>
						<span className="font-['MTD Valky Bold'] text-[64px] font-bold uppercase leading-[76.80px] text-white">
							kim long - hoàng long
						</span>
					</div>
				</div>
			</div>
			<div className='mx-auto w-full px-5 lg:max-w-[865px] lg:px-0'>
				<div className='flex w-full items-center justify-center py-10'>
					<img
						src='https://i0.wp.com/thuytadamsen.vn/wp-content/uploads/2019/03/sanh-kim-long-hoang-long.jpg?w=960'
						alt='retaurant'
						className=''
					/>
				</div>
				<div className='relative flex h-auto flex-col gap-4'>
					<div className="w-full font-['Manrope'] text-xl font-semibold leading-[30px] text-[#3f3f41]">
						Điểm đập vào mắt du khách khi đến tham công viên văn hóa Đầm Sen, là hai chiếc thuyền
						rồng ngạo nghễ rướn thân mình hướng ra giữa lòng hồ. Đây là hai sảnh của nhà hàng Thủy
						Tạ Đầm Sen có tên gọi Kim Long và Hoàng Long.
					</div>

					<div className='flex items-center gap-2'>
						<div className='h-[33px] w-1.5 bg-[#ed7d31]' />
						<div className="shrink grow basis-0 font-['Manrope'] text-base font-normal leading-normal text-[#c75d15]">
							Nếu bạn có nhu cầu tiếp từ 140 đến 180 khách, thì hai sảnh thuyền rồng (Kim Long và
							Hoàng Long) là lựa chọn số 1 dành cho bạn.
						</div>
					</div>

					<div className="w-full font-['Manrope'] text-base font-normal leading-normal text-[#3f3f41]">
						Ngoài ra, 2 chiếc thuyền rồng cũng tượng trưng cho 2 búp sen điểm tô bên cánh hoa Thanh
						Sen, hướng ra hồ. Thông thường, các thực khách riêng lẻ và gia đình thường chọn hai sảnh
						thuyền rồng này làm tiệc sinh nhật gia đình, gặp gỡ bạn bè, hoặc tiếp khách ngoại giao.
						Đây cũng là vị trí đẹp để du khách có thể xem bắn pháo hoa tại Công viên văn hóa Đầm Sen
						vào những dịp lễ lớn.
					</div>
				</div>
				<div className='flex gap-4'>
					<img
						src='https://i0.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00745.jpg?strip=info&w=748'
						alt=''
						className='h-auto w-2/3 object-cover'
					/>
					<div className='flex w-1/2 flex-col gap-4'>
						<img
							src='https://i0.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00764.jpg?strip=info&w=748'
							alt=''
							className='h-auto w-full object-cover'
						/>
						<img
							src='https://i2.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00766.jpg?strip=info&w=748'
							alt=''
							className='h-auto w-full object-cover'
						/>
					</div>
				</div>
				<div className='flex gap-4 pt-2'>
					<div className='flex w-1/2 flex-col gap-4'>
						<img
							src='https://i1.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/DSC00767.jpg?strip=info&w=748'
							alt=''
							className='h-auto w-full object-cover'
						/>
						<img
							src='https://i0.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/nha-hang-thuy-ta-dam-sen-2.jpg?strip=info&w=640'
							alt=''
							className='h-auto w-full object-cover'
						/>
					</div>
					<img
						src='https://i1.wp.com/wp.thuytadamsen.vn/wp-content/uploads/2019/03/nha-hang-thuy-ta-dam-sen-1.jpg?strip=info&w=500'
						alt=''
						className='h-auto w-2/3 object-cover'
					/>
				</div>
				<div>
					<div className="font-['Manrope'] text-[32px] font-bold text-[#ed7d31]">
						Các sảnh tiệc khác
					</div>
					<div className='grid grid-cols-3 gap-2'>
						<div className='space-y-1'>
							<img src='https://i.imgur.com/5NeJIqH.png' alt='' />
							<div className='flex items-center justify-between'>
								<div className="w-[311px] font-['Manrope'] text-lg font-bold leading-[22.86px] text-[#c75d15]">
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
								<div className="w-[311px] font-['Manrope'] text-lg font-bold leading-[22.86px] text-[#c75d15]">
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
								<div className="w-[311px] font-['Manrope'] text-lg font-bold leading-[22.86px] text-[#c75d15]">
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
				</div>
			</div>
		</div>
	);
};

export default DragonBoatPage;
