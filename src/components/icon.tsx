export const ArrowDown = ({ color = '#C75D15' }: { color?: string }) => (
	<svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M1 1L6 6L11 1'
			stroke={color}
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
	</svg>
);

export const ArrowLeft = ({
	className = '',
	width = '22px',
	height = '16px',
	color = '#ed7d31',
}: any) => (
	<svg
		width={width}
		height={height}
		viewBox='0 0 14 22'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className={className}
	>
		<path
			d='M11.1501 2.17499L2.3501 11L11.1501 19.825'
			stroke={color}
			stroke-width='4'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
	</svg>
);
