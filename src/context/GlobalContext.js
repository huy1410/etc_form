import { useContext, createContext, useReducer, useEffect } from 'react'
import {
	SET_OPEN_MENU, SET_OPEN, GET_COUNTRY, GET_PROVINCE, GET_DISTRICT,
	GET_COMMUNE, GET_TYPE_VIHICLE, GET_COLOR, GET_PLATE_COLOR, GET_BRAND,
	GET_NATIONAL_NUMBER, GET_PROVINCE_NUMBER, GET_SERI_VIHICLE,
	GET_ADDRESS, GET_COUNTRY_ID, GET_PROVINCE_ID, GET_DISTRICT_ID,
	GET_COMMUNE_ID, ERROR, POST_REGISTER
} from '../constant/Action'
import {
	get_quocgia, get_tinh, get_huyen, get_xa, get_loaixe,
	get_mauson, get_maubien, get_nhanhieu, get_daubienqg,
	get_daubientinh, get_serichu, post_dki
} from '../lib/api/CommonAPI'
import GlobalReducer from '../reducer/GlobalReducer'

const GlobalContext = createContext();
const initialValues = {
	menu_open: false,
	open1: false,
	open2: false,
	open3: false,
	open4: false,
	open5: false,
	open6: false,
	open7: false,
	country_id: '0',
	province_id: '0',
	district_id: '0',
	commune_id: '0',
	address: {
		province: '',
		district: '',
		commune: '',
	},
	brand:'',
    color: [],
    national_number: [],

}

export const GlobalProvider = ({ children }) => {
	const [data, dispatch] = useReducer(GlobalReducer, initialValues);

	const toggleDrawer = () => {
		dispatch({ type: SET_OPEN_MENU, payload: !data.menu_open });
	};
	useEffect(() => {
		get_Country();
		get_TypeVihicle();
		get_Color();
		get_PlateColor();
		get_Brand();
	}, [])

	useEffect(() => {
		if (data.country_id) {
			get_Province(data.country_id);
			get_CountryNumber(data.country_id);
			get_Seri();

		}
	}, [data.country_id]);

	useEffect(() => {
		if (data.province_id) {
			get_District(data.province_id);
			get_ProvinceCode(data.province, data.province_id);
		}
	}, [data.province_id]);

	useEffect(() => {
		if (data.district_id)
			get_Commune(data.district_id);
	}, [data.district_id]);

	//---------- Function-API ----------//

	const postDki = async (data) => {
		const qg = await post_dki(data);
		alert(qg?.data.message);
		console.log("response", qg);
	}

	const get_Country = async () => {
		const t = await get_quocgia();
		dispatch({ type: GET_COUNTRY, payload: t?.data?.result })
	}

	const get_Province = async (idquocgia) => {
		const t = await get_tinh(idquocgia);
		dispatch({ type: GET_PROVINCE, payload: t?.data?.result })
		// console.log(t);
	}

	const get_District = async (idtinh) => {
		const t = await get_huyen(idtinh);
		dispatch({ type: GET_DISTRICT, payload: t?.data?.result })
		// console.log(t);
	}

	const get_Commune = async (idtinh, idhuyen) => {
		const t = await get_xa(idtinh, idhuyen);
		dispatch({ type: GET_COMMUNE, payload: t?.data?.result })
		// console.log(t);
	}

	const get_TypeVihicle = async () => {
		const t = await get_loaixe();
		dispatch({ type: GET_TYPE_VIHICLE, payload: t?.data?.result })
		// console.log(t);
	}

	const get_Color = async () => {
		const t = await get_mauson();
		dispatch({ type: GET_COLOR, payload: t?.data?.result })
		// console.log(t);
	}

	const get_PlateColor = async () => {
		const t = await get_maubien();
		dispatch({ type: GET_PLATE_COLOR, payload: t?.data?.result })
		// console.log(t);
	}

	const get_Brand = async () => {
		const t = await get_nhanhieu();
		dispatch({ type: GET_BRAND, payload: t?.data?.result })
		// console.log(t);
	}

	const get_CountryNumber = async (national_number) => {
		const t = await get_daubienqg(national_number);
		dispatch({ type: GET_NATIONAL_NUMBER, payload: t?.data?.result })
		// console.log(t);
	}

	const get_ProvinceNumber = async (matinh) => {
		const t = await get_daubientinh(matinh);
		dispatch({ type: GET_PROVINCE_NUMBER, payload: t?.data?.result })
		// console.log(t);
	}

	const get_Seri = async (matinh) => {
		const t = await get_serichu(matinh);
		dispatch({ type: GET_SERI_VIHICLE, payload: t?.data?.result })
		// console.log(t);
	}

	const get_ProvinceCode = (tinh, idtinh) => {
		// const mt = tinh?.find(
		// 	(item) => item.id === parseInt(idtinh, 10)
		// );
		// get_ProvinceNumber(mt.ma);
	}

	//---------- Function-Form ----------//

	const onChangeCountry = (e) => {
		dispatch({ type: GET_COUNTRY_ID, payload: e });
	}

	const onChangeProvince = (e) => {
		dispatch({ type: GET_PROVINCE_ID, payload: e });

		if (e != undefined) {
			const selectedProvince = data.province.find(
				(item) => item.id === parseInt(e, 10)
			);
			let dctinh = selectedProvince.ten;

			dispatch({
				type: GET_ADDRESS, payload: {
					province: dctinh,
					district: '',
					commune: '',
				}
			});
		}
	}

	const onChangeDistrict = (e) => {
		dispatch({ type: GET_DISTRICT_ID, payload: e });
		if (e != undefined) {
			const selectedProvince = data.district.find(
				(option) => option.id === parseInt(e, 10)
			);
			let dchuyen = selectedProvince.ten + ", ";

			dispatch({
				type: GET_ADDRESS, payload: {
					...data.address,
					district: dchuyen,
					commune: '',
				}
			});
		}
	}

	const onChangeCommune = (e) => {
		dispatch({ type: GET_COMMUNE_ID, payload: e });
		if (e != undefined) {
			const selectedProvince = data.commune.find(
				(option) => option.id === parseInt(e, 10)
			);
			let dcxa = selectedProvince.ten + ", ";
			// form.setFieldsValue({
			// 	otoChuSoHuu: {
			// 		diaChi: dcxa + data.address.district + data.address.province
			// 	}
			// });
			dispatch({
				type: GET_ADDRESS, payload: {
					...data.address, commune: dcxa
				}
			});
		}
	}

	const onOpen = (key) => {
		switch (key) {
			case 1:
				dispatch({ type: SET_OPEN, payload: { a: !data.open1 } });
				break;
			case 2:
				dispatch({ type: SET_OPEN, payload: { b: !data.open2 } });
				break;
			case 3:
				dispatch({ type: SET_OPEN, payload: { c: !data.open3 } });
				break;
			case 4:
				dispatch({ type: SET_OPEN, payload: { d: !data.open4 } });
				break;
			case 5:
				dispatch({ type: SET_OPEN, payload: { e: !data.open5 } });
				break;
			case 6:
				dispatch({ type: SET_OPEN, payload: { f: !data.open6 } });
				break;
			case 7:
				dispatch({ type: SET_OPEN, payload: { g: !data.open7 } });
				break;
			default:
				break;
		}
	}
	return (
		<GlobalContext.Provider value={{
			data, dispatch, toggleDrawer, onOpen,
			onChangeCountry, onChangeProvince,
			onChangeDistrict, onChangeCommune
		}}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobal = () => useContext(GlobalContext);
