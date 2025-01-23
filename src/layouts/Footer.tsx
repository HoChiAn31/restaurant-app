import { FC } from 'react';
import { Call, Location } from '../components/icon';

const Footer: FC = () => {
	return (
		<div
			style={{
				backgroundImage:
					"url('https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/restaurants%2Fgold-cutlery-set-black-background%201.png?alt=media&token=cfb245e7-8976-45f1-968f-07fb5ce3b5a5')",
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}
			className='h-auto lg:h-[344px]'
		>
			<div className='relative flex flex-col items-center justify-center py-4 lg:flex-row'>
				<div className='mt-2 flex w-full flex-wrap gap-2 px-4 lg:mr-[10%] lg:w-auto lg:flex-nowrap lg:gap-24 lg:px-0 2xl:mr-[10%]'>
					{/* Logo */}
					<div className='flex w-full justify-center lg:w-auto lg:justify-start'>
						<img
							src='https://i0.wp.com/thuytadamsen.vn/wp-content/uploads/2019/05/logo-thuy-ta-dam-sen-100.png?fit=100%2C97'
							alt='Logo'
							className='mx-auto lg:mx-0 lg:h-[120px] lg:w-[120px]'
						/>
					</div>
					{/* Contact */}
					<div className='w-full space-y-2 lg:mt-0 lg:w-1/3'>
						<div className='font-mtdValky text-2xl font-bold leading-[28.80px] text-white lg:text-[32px] lg:leading-[38.40px]'>
							Liên hệ
						</div>
						<div className='flex items-start gap-1'>
							<Location />
							<div className="font-['Manrope'] text-sm font-normal text-white lg:text-lg">
								03 Hòa Bình, Phường 3, Quận 11, TP. Hồ Chí Minh
								<br />
								(Cổng số 2 Công viên Văn hóa Đầm Sen)
							</div>
						</div>
						<div className='flex items-center gap-1'>
							<Call />
							<div className="font-['Manrope'] text-sm font-normal text-white lg:text-lg">
								028 3961 2082 – 028 3858 6763
							</div>
						</div>
					</div>
					{/* Branches */}
					<div className='mt-4 inline-flex w-full flex-col items-start justify-start gap-3 lg:mt-0 lg:w-1/3'>
						<div>
							<p className='font-mtdValky text-2xl font-bold leading-[28.80px] text-white lg:text-[32px] lg:leading-[38.40px]'>
								Các đơn vị cùng hệ thống Phuthotourist
							</p>
						</div>
						<ul className='flex flex-col items-start justify-start gap-0.5'>
							<li className='flex items-center gap-2'>
								<div className='h-2 w-2 rounded-full bg-white' />
								<span className="font-['Manrope'] text-sm leading-[27px] text-white lg:text-lg">
									Công ty CP DVDL Phú Thọ
								</span>
							</li>
							<li className='flex items-center gap-2'>
								<div className='h-2 w-2 rounded-full bg-white' />
								<span className="font-['Manrope'] text-sm leading-[27px] text-white lg:text-lg">
									Khu du lịch sinh thái Vàm Sát
								</span>
							</li>
							<li className='flex items-center gap-2'>
								<div className='h-2 w-2 rounded-full bg-white' />
								<span className="font-['Manrope'] text-sm leading-[27px] text-white lg:text-lg">
									Khách sạn Ngọc Lan
								</span>
							</li>
							<li className='flex items-center gap-2'>
								<div className='h-2 w-2 rounded-full bg-white' />
								<span className="font-['Manrope'] text-sm leading-[27px] text-white lg:text-lg">
									Khách sạn Phú Thọ
								</span>
							</li>
							<li className='flex items-center gap-2'>
								<div className='h-2 w-2 rounded-full bg-white' />
								<span className="font-['Manrope'] text-sm leading-[27px] text-white lg:text-lg">
									Trung tâm Du lịch Đầm Sen
								</span>
							</li>
						</ul>
					</div>

					{/*  */}
					<div className='bottom-6 left-[18%] px-4 pt-5 text-left lg:hidden'>
						<div className="w-[60%] font-['Manrope'] text-xs font-normal text-white">
							Copyright © Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)
						</div>
					</div>
				</div>
				<div className='bottom-5 left-[9%] hidden px-4 pt-5 text-left lg:absolute lg:block 2xl:left-[16%]'>
					<div className="font-['Manrope'] text-sm font-normal text-white">
						Copyright © Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)
					</div>
				</div>
				<div className='absolute bottom-0 right-0 lg:hidden'>
					<img src='https://i.imgur.com/JHU8WgH.png' alt='' className='' />
				</div>
			</div>
		</div>
	);
};

export default Footer;
