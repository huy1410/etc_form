import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';



const Table = () => {
	const [data, setData] = React.useState([]);
	// React.useEffect(() => {
	// 	GetDS('');
	// }, [])
	const columns = [
    {
      headerName: 'STT',
			field: 'id',
			width: 110,
    },
    {
      headerName: 'Biển số',
			field: 'biensoDaydu',
			width: 150
    },
    {
      headerName: 'Chủ sở hữu',
			field: 'tenChuSoHuu',
			width: 200
    },
    {
      headerName: 'Số khung',
			field: 'soKhung',
			width: 200
    },
    {
      headerName: 'Số máy 1',
			field: 'soMay1',
			width: 200
    },
    {
      headerName: 'Số máy 2',
			field: 'soMay2',
			width: 200
		},
		{
      headerName: 'Ngày đăng ký',
			field: 'ngayTraDangKy',
			width: 200
    },
    {
      headerName: 'Trạng thái đăng kí',
			field: 'dienGiaiTrangthaiDangky',
			width: 200
    },
    {
      headerName: 'Trạng thái hồ sơ',
			field: 'dienGiaiTrangthaiHoso',
			width: 200
    },
  ];

	// const GetDS = async (dk) => {
	// 	const rs = await get_theobienso(dk);
	// 	setData(rs?.data?.result.data.map((item, index) => {
	// 		item.id = index + 1;
	// 		return item;
	// 	}))
	// }

	// const { data } = useDemoData({
	// 	dataSet: 'Commodity',
	// 	rowLength: 10,
	// 	maxColumns: 6,
	// });


	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid
				sortingOrder={['desc', 'asc']}
				sortModel={[
					{
						field: 'id',
						sort: 'asc',
					},
				]}
				columns={columns}
				rows={data}
				pageSize={5}
			/>
		</div>
	);
}

export default Table
