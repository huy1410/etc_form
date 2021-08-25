import { createContext, useContext, useState, useReducer, useEffect } from 'react';
import { GET_COUNTRIES, GET_CITIES,GET_DB, GET_DISTRICTS,GET_WARDS,GET_VALUE_COUNTRY,GET_VALUE_DISTRICT,GET_VALUE_WARD,GET_MAUSON,GET_VALUE_CITY,GET_SERI, GET_NHANHIEU,GET_LOAIXE,GET_DBT} from '../reducers/Type'
import axios from 'axios';

import { RegistrationReducer } from '../reducers/RegistrationReducer'
// import { getCountries, getCities, getDistricts, getWards } from '../lib/api/api_registration'
const ResultContext = createContext();

const initialState = {
    countries: [],
    idCountry: '',
    cities: [],
    idCity: '',
    districts: [],
    idDistricts: '',
    wards:[],
    nhanhieu:[],
    mauson: [],
    loaixe: [],
    seri:[],
    daubien:[],
    dbt:[],
    idWard: '',
    address: ''
    
}

export const ResultProvider = ({ children }) => {
    const [results, dispatch] = useReducer(RegistrationReducer, initialState)
//
useEffect(() => {
  
    axios.get('http://10.0.25.184:8089/DkOtoFull/api/GetListMaMau',{
        headers:{
            'api_key' : '123'
        }
        })
        .then(response => {
            dispatch({
                type: GET_MAUSON,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })

}, []);
//
useEffect(() => {
  
    axios.get('http://10.0.25.184:8089/DkOtoFull/api/GetListOtoSeriChu/1',{
        headers:{
            'api_key' : '123'
        }
        })
        .then(response => {
            dispatch({
                type: GET_SERI,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })

}, []);
//
useEffect(() => {
  
    axios.get('http://10.0.25.184:8089/DkOtoFull/api/GetListDauBienTheoTinh/29' ,{
        headers:{
            'api_key' : '123'
        }
        })
        .then(response => {
            dispatch({
                type: GET_DBT,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })

}, []);
useEffect(() => {
  
    axios.get('http://10.0.25.184:8089/DkOtoFull/api/GetListDauBienQuocGia/1',{
        headers:{
            'api_key' : '123'
        }
        })
        .then(response => {
            dispatch({
                type: GET_DB,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })

}, []);
//
useEffect(() => {
  
    axios.get('http://10.0.25.184:8089/DkOtoFull/api/GetListMaMau',{
        headers:{
            'api_key' : '123'
        }
        })
        .then(response => {
            dispatch({
                type: GET_MAUSON,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })

}, []);

    useEffect(() => {
        axios.get('http://10.0.25.184:8089/DkOtoFull/api/GetDanhSachQuocGia',{
            headers:{
                'api_key' : '123'
            }
        })
            .then(response => {
                dispatch({
                    type: GET_COUNTRIES,
                    payload: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

   
    useEffect(() => {
        if (results.idCountry == "1") {
            axios.get('http://10.0.25.184:8089/DkOtoFull/api/GetDiaDanhHanhChinhTheoCapHanhChinh?capHanhChinh=1',{
                headers:{
                    'api_key' : '123'
                }
            })
                .then(response => {
                    dispatch({
                        type: GET_CITIES,
                        payload: response.data
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [results.idCountry]);
    useEffect(() => {
        if (results.idCity != "") {
            axios.get('http://10.0.25.184:8089/DkOtoFull/api/GetDiaDanhHanhChinhTheoIdCha/' + results.idCity ,{
                headers:{
                    'api_key' : '123'
                }
            })
                .then(response => {
                    dispatch({
                        type: GET_DISTRICTS,
                        payload: response.data
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [results.idCity]);
    useEffect(() => {
        if ( results.idDistricts != "") {
            axios.get('http://10.0.25.184:8089/DkOtoFull/api/GetDiaDanhHanhChinhTheoIdCha/'+ results.idDistricts,{
                headers:{
                    'api_key' : '123'
                }
            })
                .then(response => {
                    dispatch({
                        type: GET_WARDS,
                        payload: response.data
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [results.idDistricts]);
//
useEffect(() => {
  
        axios.get('http://10.0.25.184:8089/DkOtoFull/api/GetListOtoMaNhanHieu',{
            headers:{
                'api_key' : '123'
            }
            })
            .then(response => {
                dispatch({
                    type: GET_NHANHIEU,
                    payload: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    
}, []);
//
useEffect(() => {
  
    axios.get('http://10.0.25.184:8089/DkOtoFull/api/GetListOtoMaLoaiXe',{
        headers:{
            'api_key' : '123'
        }
        })
        .then(response => {
            dispatch({
                type: GET_LOAIXE,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })

}, []);
const onChangeCountry =(value,nameCountry,address)=>{
    dispatch({
        type: GET_VALUE_COUNTRY,
        payload:{ value,nameCountry,address}
    })
}
//
const onChangeCity =(value,nameCity,address)=>{
    dispatch({
        type: GET_VALUE_CITY,
        payload:{ value,nameCity,address }
    });
     console.log(value,nameCity,address);
}

const onChangeDistrict =(value)=>{
    dispatch({
        type: GET_VALUE_DISTRICT,
        payload:{ value}
    });
    console.log(value);

}
const onChangeWard =(value)=>{
    dispatch({
        type: GET_VALUE_WARD,
        payload:{ value}
    });
    console.log(value);

}
const onChangeNhanhieu =(value,nameNhanhieu)=>{
    dispatch({
        type: GET_VALUE_Nhanhieu,
        payload:{ value,nameNhanhieu}
    })
}
    return (
        <ResultContext.Provider value={{ results, dispatch,onChangeCountry,onChangeDistrict,onChangeNhanhieu,onChangeCity ,onChangeDistrict,onChangeWard }}>
            {children}
        </ResultContext.Provider>
    );
};

export const useResult = () => useContext(ResultContext);