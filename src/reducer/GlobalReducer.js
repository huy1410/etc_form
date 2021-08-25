import { SET_OPEN_MENU, SET_OPEN, 
	GET_COUNTRY, GET_PROVINCE, GET_DISTRICT, GET_COMMUNE,
	GET_TYPE_VIHICLE, GET_COLOR, GET_PLATE_COLOR, GET_BRAND,
	GET_NATIONAL_NUMBER, GET_PROVINCE_NUMBER, GET_SERI_VIHICLE,
	GET_ADDRESS, GET_COUNTRY_ID, GET_PROVINCE_ID, GET_DISTRICT_ID,
	GET_COMMUNE_ID ,ERROR, POST_REGISTER
} from '../constant/Action'

const GlobalReducer = (state, action) => {
	switch (action.type) {
		case SET_OPEN_MENU:
			return {
				...state,
				menu_open: action.payload
			};
		case SET_OPEN:
			return {
				...state,
				open1: action.payload.a,
				open2: action.payload.b,
				open3: action.payload.c,
				open4: action.payload.d,
				open5: action.payload.e,
				open6: action.payload.f,
				open7: action.payload.g,
			};
		case GET_COUNTRY:
			return {
				...state,
				country: action.payload
			};
		case GET_PROVINCE:
			return {
				...state,
				province: action.payload
			};
		case GET_DISTRICT:
			return {
				...state,
				district: action.payload
			};
		case GET_COMMUNE:
			return {
				...state,
				commune: action.payload
			};
		case GET_TYPE_VIHICLE:
			return {
				...state,
				type_vihicle: action.payload
			};
		case GET_COLOR:
			return {
				...state,
				color: action.payload
			};
		case GET_PLATE_COLOR:
			return {
				...state,
				plate_color: action.payload
			};
		case GET_BRAND:
			return {
				...state,
				brand: action.payload
			};
		case GET_NATIONAL_NUMBER:
			return {
				...state,
				national_number: action.payload
			};
		case GET_PROVINCE_NUMBER:
			return {
				...state,
				province_number: action.payload
			};
		case GET_SERI_VIHICLE:
			return {
				...state,
				serichu: action.payload
			};
		case GET_ADDRESS:
			return {
				...state,
				address: action.payload
			};
		case GET_COUNTRY_ID:
			return {
				...state,
				country_id: action.payload
			};
		case GET_PROVINCE_ID:
			return {
				...state,
				province_id: action.payload
			};
		case GET_DISTRICT_ID:
			return {
				...state,
				district_id: action.payload
			};
		case GET_COMMUNE_ID:
			return {
				...state,
				commune_id: action.payload
			};
		case POST_REGISTER:
			return {
				...state,
				post: action.payload,
			};
		case ERROR:
			return {
				...state,
				error: 'Error !!!'
			};
		default:
			break;
	}
}
export default GlobalReducer;
