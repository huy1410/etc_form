import React, { useState } from 'react'
import moment from 'moment'
import { FormControlLabel, Grid, FormControl,InputLabel, MenuItem, Typography } from "@material-ui/core"
import { useStyles } from '../styles'
import MomentUtils from '@date-io/moment';
import {
	MuiPickersUtilsProvider, KeyboardDatePicker
} from '@material-ui/pickers';
import { useGlobal } from '../../../context/GlobalContext';
import { Formik, Field, Form } from 'formik';
import { CheckboxWithLabel } from 'formik-material-ui';
import Textfield from '../../../Components/FormsUI/Textfield';
import Select from '../../../Components/FormsUI/Select';
import DateTimePicker from '../../../Components/FormsUI/DataTimePicker';
import Checkbox from '../../../Components/FormsUI/Checkbox';
const Vehicle = () => {
	const classes = useStyles();
    const { data, dispatch, onChangeCountry, onChangeProvince,
        onChangeDistrict, onChangeCommune } = useGlobal();
        

	return (
		<>
         <Grid container spacing={3}>
		 <Grid item xs={3}>
                    <Textfield
                      name="LPTB"
                      label="Mã hồ sơ khai LPTB"
                    />
                  </Grid>
		<Grid item xs={9}>
                    <Textfield
                      name="cqc"
                      label="Cơ quan cấp"
                    />
                  </Grid>
				  <Grid item xs={3}>
                    <Textfield
                      name="KTCLXX"
                      label="Số seri phiếu KTCLXX"
                    />
                  </Grid>
		<Grid item xs={9}>
                    <Textfield
                      name="cqc1"
                      label="Cơ quan cấp"
                    />
                  </Grid>
				  <Grid item xs={6}>
				  <Select
                      name="loaixe"
                      label="Loại xe"
                     
                    />
                  </Grid>
		<Grid item xs={6}>
                    <Select
                      name="brand"
                      label="Nhãn hiệu"
                    />
                  </Grid>
				  <Grid item xs={6}>
                    <Textfield
                      name="sokhung"
                      label="Số khung"
                    />
                  </Grid>
				  <Grid item xs={6}>
                    <Textfield
                      name="somay"
                      label="Số máy"
                    />
                  </Grid>
				  <Grid item xs={6}>
				  <Select
                      name="loaixe"
                      label="Loại xe"
                     
                    />
                  </Grid>
				  <Grid item xs={6}>
				  <DateTimePicker
                      name="arrivealDate"
                      label="Ngày đăng ký"
                    />
                  </Grid>

		 </Grid>
           
         
		</>
	)
}

export default Vehicle
