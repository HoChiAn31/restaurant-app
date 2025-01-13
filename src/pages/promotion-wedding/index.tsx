import { ConfigProvider, Table, TableColumnsType } from 'antd';

interface DataSourceItemType {
	key: string;
	name: string;
	small?: string;
	medium_small?: string;
	medium?: string;
	medium_large?: string;
	large?: string;
	extra_large?: string;
}

const dataSource: DataSourceItemType[] = [
	{
		key: '1',
		name: 'Liễn hồng, bút ký tên, kệ ảnh, thúng hỷ',
	},
	{
		key: '2',
		name: 'Tháp ly, 2 chai Champagne, đá khói',
	},
	{
		key: '3',
		name: 'Khăn ăn, hoa tươi để bàn, khăn lạnh',
	},
	{
		key: '4',
		name: 'Ban nhạc hòa tấu (2 nhạc công)',
	},
	{
		key: '5',
		name: 'Thức ăn nhẹ đầu giờ Cô Dâu Chú Rể',
	},
	{
		key: '6',
		name: 'Đậu phộng đầu giờ',
	},
	{
		key: '7',
		name: 'Nước ngọt, nước suối suốt tiệc (phục vụ rót bình)',
	},
	{
		key: '8',
		name: 'MC tiếng Việt đầu giờ',
	},
	{
		key: '9',
		name: 'Thiệp cưới theo mẫu (chưa in nội dung)',
	},
	{
		key: '10',
		name: 'Pháo kim tuyến (4 viên)',
	},
	{
		key: '11',
		name: 'Bánh cưới 4 giả 1 thật',
	},
	{
		key: '12',
		name: 'Thiệp cưới theo mẫu (có in nội dung)',
	},
	{
		key: '13',
		name: 'Saxo + 2 Ca sĩ',
	},
	{
		key: '14',
		name: 'Máy chiếu Album hoặc màn hình Led',
	},
	{
		key: '15',
		name: 'Đội múa khai tiệc',
	},
	{
		key: '16',
		name: 'Máy quay trực tiếp',
	},
	{
		key: '17',
		name: 'Bàn ăn gia đình',
	},
	{
		key: '18',
		name: 'Giảm giá chương trình nghi lễ đặc biệt',
	},
];

const columns: TableColumnsType<DataSourceItemType> = [
	{
		title: 'Quà tặng',
		dataIndex: 'name',
		key: 'name',
		width: 300,
	},
	{
		title: 'Số bàn đặt chính thức',
		key: 'name',
		children: [
			{
				title: '15-20',
				dataIndex: 'small',
				key: 'small',
			},
			{
				title: '21-26',
				dataIndex: 'medium_small',
				key: 'medium_small',
			},
			{
				title: '27-32',
				dataIndex: 'medium',
				key: 'medium',
			},
			{
				title: '33-42',
				dataIndex: 'medium_large',
				key: 'medium_large',
			},
			{
				title: '43-50',
				dataIndex: 'large',
				key: 'large',
			},
			{
				title: '51-65',
				dataIndex: 'extra_large',
				key: 'extra_large',
			},
		],
	},
];
const PromotionWeddingPage = () => {
	return (
		<div>
			<div className='relative'>
				<img
					src='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/restaurants%2FBG-header.png?alt=media&token=07d9ef21-b7b6-4deb-b95c-9eb5bfd3f1ec'
					alt=''
				/>
				<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
					<p className="font-['MTD Valky Bold'] text-center text-[64px] font-bold uppercase text-white">
						Khuyến Mãi Tiệc Cưới
					</p>
				</div>
			</div>
			<div className='mx-auto w-full px-5 lg:max-w-[865px] lg:px-0'>
				<div className='flex w-full items-center justify-center py-20'>
					<img
						src='https://i0.wp.com/thuytadamsen.vn/wp-content/uploads/2019/03/DSC00724.jpg?w=748'
						alt='retaurant'
						className=''
					/>
				</div>
			</div>
			<div className='mx-auto my-5 max-w-[865px] space-y-5'>
				<ConfigProvider
					theme={{
						token: {
							colorPrimaryHover: '#ed7d31',
						},
						components: {
							Table: {
								headerColor: '#c75d15',
								headerBg: '#ffeed7',
								borderColor: '#C2C2C2',
								headerBorderRadius: 0,
							},
						},
					}}
				>
					<Table dataSource={dataSource} columns={columns} pagination={false} bordered />
				</ConfigProvider>
				<div className="pl-5 font-['Manrope'] text-base font-normal text-[#666666] 2xl:w-[1320px]">
					<ul className='list-disc'>
						<li>
							Quý khách vào dự tiệc tại nhà Thuỷ Tạ Đầm Sen được tham quan Công Viên Đầm Sen Miễn
							Phí trong ngày.
						</li>
						<li>
							Chương trình khuyến mãi chỉ áp dụng trên số bàn tiệc chính thức đã thoả thuận trong
							hợp đồng (không áp dụng cho bàn dự phòng và bàn phát sinh trong buổi tiệc).
						</li>
						<li>Chương trình khuyến mãi không quy đổi thành tiền hoặc chương trình khác.</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default PromotionWeddingPage;
