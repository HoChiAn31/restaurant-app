import { ArrowLeft } from './icon';

interface SampleNextArrowProps {
	className?: string;
	type?: 'default';
	onClick?: () => void;
	typeCus?: string;
}

const SampleNextArrow = ({ className, type, onClick, typeCus }: SampleNextArrowProps) => {
	if (typeCus === 'menu') {
		return (
			<div
				className={`absolute right-0 top-1/2 z-[100] hidden h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:flex ${className}`}
				onClick={onClick}
			>
				<ArrowLeft className='rotate-180' />
			</div>
		);
	}
	return (
		<div
			className={`absolute right-10 top-1/2 z-[100] hidden h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:flex ${className}`}
			onClick={onClick}
		>
			<ArrowLeft className='rotate-180' />
		</div>
	);
};

export default SampleNextArrow;
