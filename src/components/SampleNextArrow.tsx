import { ArrowLeft } from './icon';

interface SampleNextArrowProps {
	className?: string;
	type?: 'default';
	onClick?: () => void;
}

const SampleNextArrow = (props: SampleNextArrowProps) => {
	const { className, type, onClick } = props;

	return (
		<div
			className={`absolute right-10 top-1/2 z-[100] flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${className}`}
			onClick={onClick}
		>
			<ArrowLeft className='rotate-180' />
		</div>
	);
};

export default SampleNextArrow;
