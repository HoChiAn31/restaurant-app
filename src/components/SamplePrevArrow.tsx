import { ArrowLeft } from './icon';

interface SamplePrevArrowProps {
	className?: string;
	type?: 'default';
	onClick?: () => void;
	typeCus?: string;
}
const SamplePrevArrow = ({ className, type, onClick, typeCus }: SamplePrevArrowProps) => {
	if (typeCus === 'menu') {
		return (
			<div
				className={`absolute left-0 top-1/2 z-[100] hidden h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:flex ${className}`}
				onClick={onClick}
			>
				<ArrowLeft />
			</div>
		);
	}
	return (
		<div
			className={`absolute left-10 top-1/2 z-[100] hidden h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:flex ${className}`}
			onClick={onClick}
		>
			<ArrowLeft />
		</div>
	);
};

export default SamplePrevArrow;
