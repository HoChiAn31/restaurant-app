import { ConfigProvider, Table, TableColumnsType } from 'antd';

interface DataSourceItemType {
	key: string;
	location: string;
	area: string;
	theaterSeating: string;
	roomCapacity: string;
	halfDayCapacity: number | null;
	fullDayCapacity: number | null;
	note: string;
}
interface PromotionData {
	key: string;
	promotion: string;
}

const dataSourcePromotion: PromotionData[] = [
	{
		key: '1',
		promotion: 'Màn hình LED',
	},
	{
		key: '2',
		promotion: 'Bàn lễ tân',
	},
	{
		key: '3',
		promotion: 'Bục phát biểu',
	},
	{
		key: '4',
		promotion: 'Âm thanh, 2 micro',
	},
];

// Cấu hình cột với tiêu đề cha và các khuyến mãi con
const columnPromotions = [
	{
		title: 'Khuyến mãi', // Tiêu đề cha
		children: dataSourcePromotion.map((item) => ({
			title: item.promotion, // Các tiêu đề con
			dataIndex: item.promotion,
			key: item.key,
			render: () => <div>{/* Empty content */}</div>, // Không hiển thị nội dung
		})),
	},
];
const dataSource: DataSourceItemType[] = [
	{
		key: '1',
		location: 'Hoàng Kim Sen',
		area: '1.035m²',
		theaterSeating: '1.000 khách',
		roomCapacity: '85',
		halfDayCapacity: 40000000,
		fullDayCapacity: 70000000,
		note: '',
	},
	{
		key: '2',
		location: 'Hoàng sen',
		area: '667m²',
		theaterSeating: '500 khách',
		roomCapacity: '50',
		halfDayCapacity: 25000000,
		fullDayCapacity: 45000000,
		note: '',
	},
	{
		key: '3',
		location: 'Kim sen',
		area: '368m²',
		theaterSeating: '250 khách',
		roomCapacity: '28',
		halfDayCapacity: 15000000,
		fullDayCapacity: 30000000,
		note: '',
	},
	{
		key: '4',
		location: 'Thanh sen',
		area: '860m²',
		theaterSeating: '750 khách',
		roomCapacity: '62',
		halfDayCapacity: 30000000,
		fullDayCapacity: 60000000,
		note: '',
	},
	{
		key: '5',
		location: 'Ngàn sen',
		area: '402m²',
		theaterSeating: '500 khách',
		roomCapacity: '37',
		halfDayCapacity: 20000000,
		fullDayCapacity: 40000000,
		note: '',
	},
	{
		key: '6',
		location: 'Thuyền Kim Long',
		area: '162m²',
		theaterSeating: '',
		roomCapacity: '14',
		halfDayCapacity: 0,
		fullDayCapacity: 0,
		note: '',
	},
	{
		key: '7',
		location: 'Thuyền Hoàng Long',
		area: '179m²',
		theaterSeating: '',
		roomCapacity: '16',
		halfDayCapacity: 0,
		fullDayCapacity: 0,
		note: '',
	},
];

const columns: TableColumnsType<DataSourceItemType> = [
	{
		title: 'Vị trí',
		dataIndex: 'location',
		key: 'location',
	},
	{
		title: 'Diện tích',
		dataIndex: 'area',
		key: 'area',
	},
	{
		title: 'Xếp theo kiểu rạp hát',
		dataIndex: 'theaterSeating',
		key: 'theaterSeating',
	},
	{
		title: 'Công suất phòng',
		key: 'roomCapacity',
		responsive: ['lg'],

		children: [
			{
				title: 'Xếp theo kiểu bàn tròn (10 khách/bàn)',
				dataIndex: 'roomCapacity',
				key: 'roomCapacity_round',
				responsive: ['lg'],
			},
			{
				title: 'Xếp theo kiểu bàn tròn (10 khách/bàn)',
				dataIndex: 'roomCapacity',
				key: 'roomCapacity_round',
				responsive: ['lg'],
			},
		],
	},
	{
		title: 'Nửa ngày',
		dataIndex: 'halfDayCapacity',
		key: 'halfDayCapacity',
		render: (value, record, index) => {
			// Kiểm tra nếu dòng hiện tại và dòng trước đó đều có giá trị bằng 0
			const isFirstRowWithZero =
				record.halfDayCapacity === 0 &&
				record.fullDayCapacity === 0 &&
				(index === 0 ||
					(index > 0 &&
						dataSource[index - 1] &&
						dataSource[index - 1].halfDayCapacity !== 0 &&
						dataSource[index - 1].fullDayCapacity !== 0));

			if (isFirstRowWithZero) {
				return {
					children: <span className='font-bold'>Chỉ phục vụ set menu</span>,

					props: {
						colSpan: 3,
						rowSpan: 3,
					},
				};
			}

			return value ? value.toLocaleString() + ' VND' : { props: { colSpan: 0, rowSpan: 0 } };
		},
	},
	{
		title: 'Nguyên ngày',
		dataIndex: 'fullDayCapacity',
		key: 'fullDayCapacity',
		render: (value, record, index) => {
			const isFirstRowWithZero =
				record.halfDayCapacity === 0 &&
				record.fullDayCapacity === 0 &&
				(index === 0 ||
					(index > 0 &&
						dataSource[index - 1] &&
						dataSource[index - 1].halfDayCapacity !== 0 &&
						dataSource[index - 1].fullDayCapacity !== 0));

			if (isFirstRowWithZero) {
				return { props: { colSpan: 0, rowSpan: 0 } };
			}

			return value ? value.toLocaleString() + ' VND' : { props: { colSpan: 0, rowSpan: 0 } };
		},
	},
	{
		title: 'Ghi chú',
		key: 'note',
		render: (text, record, index) => {
			if (index === 0) {
				return {
					children: (
						<span style={{ display: 'block', textAlign: 'center' }}>
							Có đặt ăn menu tiệc được giảm 50% giá mặt bằng (Nếu lượng khách đặt tiệc tương đương
							khách tham gia hội nghị)
						</span>
					),
					props: {
						colSpan: 5, // Giới hạn lại số lượng cột cần nhóm thành 5 cột
						rowSpan: 5, // Gộp tất cả các dòng trong cột này thành một hàng duy nhất
					},
				};
			}

			return {
				props: {
					colSpan: 0, // Không hiển thị trong các dòng còn lại
				},
			};
		},
	},
];

const conferenceRoomPage = () => {
	return (
		<div className=''>
			<div className='relative'>
				<img
					src='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/restaurants%2FBG-header.png?alt=media&token=07d9ef21-b7b6-4deb-b95c-9eb5bfd3f1ec'
					alt=''
				/>
				<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
					<p className="font-['MTD Valky Bold'] text-center text-[64px] font-bold uppercase text-white">
						Phòng Hội Nghị
					</p>
				</div>
			</div>
			<div className='mx-auto w-full px-5 lg:max-w-[865px] lg:px-0'>
				<div className='flex w-full items-center justify-center py-20'>
					<img
						src='https://i0.wp.com/thuytadamsen.vn/wp-content/uploads/2019/03/DSC00771.jpg'
						alt='retaurant'
						className=''
					/>
				</div>
				<div>
					<div className="font-['Manrope'] text-4xl font-bold text-[#ed7d31]">
						Giá cho thuê phòng hội nghị
					</div>
					<div className="font-['Manrope'] text-xl font-normal text-[#666666]">
						(Đã bao gồm 10% thuế VAT)
					</div>
				</div>
				{/*  */}

				<div className='mx-auto my-5 max-w-[865px]'>
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
					<ConfigProvider
						theme={{
							token: {
								colorPrimaryHover: '#ed7d31',
							},
							components: {
								Table: {
									headerColor: '#c75d15',
									headerBg: '#ffffff',
									borderColor: '#C2C2C2',
									headerBorderRadius: 0,
								},
							},
						}}
					>
						<Table
							dataSource={[]}
							columns={columnPromotions}
							pagination={false}
							bordered
							showHeader={true}
							locale={{
								emptyText: null,
							}}
							className='rounded-none'
							components={{
								body: {
									wrapper: (props: any) => <tbody style={{ display: 'none' }} {...props} />,
								},
							}}
						/>
					</ConfigProvider>
				</div>
			</div>
		</div>
	);
};
export default conferenceRoomPage;
