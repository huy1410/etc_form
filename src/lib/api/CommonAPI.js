import axios from 'axios'

axios.defaults.baseURL = 'http://10.0.25.184:8089/DkOtoFull';

export async function post_dki(data) {

	console.log(JSON.stringify(data));

	try {
		const res = await axios({
			method: 'post',
			url: '/api/DangKyMoiCapBien',
			headers: {
				'api_key': '123',
				'Content-Type': 'application/json'
			},
			data: JSON.stringify(data)
		});
		return res;
	} catch (error) {
		console.log(error);
		// return error;
	}


}
export async function get_quocgia() {
	try {
		const res = await axios.get("/api/GetDanhSachQuocGia?trangThaiKichHoat=null", {
			headers: { 'api_key': '123' }
		}
		);
		return res;
	} catch (error) {
		console.log(error);
	}
}

export async function get_tinh(idquocgia) {
	try {
		const res = await axios.get("/api/GetDiaDanhHanhChinhTheoCapHanhChinh?capHanhChinh=" + idquocgia, {
			headers: { 'api_key': '123' }
		});
		return res;
	} catch (error) {
		console.log(error);
	}
}

export async function get_huyen(idtinh) {
	try {
		const res = await axios.get("/api/GetDiaDanhHanhChinhTheoIdCha/" + idtinh, {
			headers: { 'api_key': '123' }
		});
		return res;
	} catch (error) {
		console.log(error);
	}
}

export async function get_xa(idhuyen) {
	try {
		const res = await axios.get("/api/GetDiaDanhHanhChinhTheoIdCha/" + idhuyen, {
			headers: { 'api_key': '123' }
		});
		return res;
	} catch (error) {
		console.log(error);
	}
}

export async function get_loaixe() {
	try {
		const res = await axios.get("/api/GetListOtoMaLoaiXe", {
			headers: { 'api_key': '123' }
		});
		return res;
	} catch (error) {
		console.log(error);
	}
}

export async function get_mauson() {
	try {
		const res = await axios.get("/api/GetListMaMau", {
			headers: { 'api_key': '123' }
		});
		return res;
	} catch (error) {
		console.log(error);
	}
}

export async function get_maubien() {
	try {
		const res = await axios.get("/api/GetHoSoKemTheo?vungDulieu=MA_MAU_BIEN", {
			headers: { 'api_key': '123' }
		});
		return res;
	} catch (error) {
		console.log(error);
	}
}

export async function get_nhanhieu() {
	try {
		const res = await axios.get("/api/GetListOtoMaNhanHieu", {
			headers: { 'api_key': '123' }
		});
		return res;
	} catch (error) {
		console.log(error);
	}
}

export async function get_daubienqg(idquocgia) {
	try {
		const res = await axios.get("/api/GetListDauBienQuocGia/" + idquocgia, {
			headers: { 'api_key': '123' }
		});
		return res;
	} catch (error) {
		console.log(error);
	}
}

export async function get_daubientinh(idtinh) {
	try {
		const res = await axios.get("/api/GetListDauBienTheoTinh/" + idtinh,{
			headers: { 'api_key': '123' }
		});
		return res;
	} catch (error) {
		console.log(error);
	}
}

export async function get_serichu() {
	try {
		const res = await axios.get("/api/GetListOtoSeriChu", {
			headers: { 'api_key': '123' }
		});
		return res;
	} catch (error) {
		console.log(error);
	}
}

export async function get_theobienso(tk) {
	try {
		console.log(tk);
		const res = await axios.get("/api/DangKyMoiTimKiemHoSoXe?" + tk + "&idCanBoThucHienTimKiem=7665&limit=10&page=1", {
			headers: { 'api_key': '123' }
		});
		return res;
	} catch (error) {
		return [];
	}

}