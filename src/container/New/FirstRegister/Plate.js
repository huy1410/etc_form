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
const Plate = () => {
	const classes = useStyles();
    const { data, dispatch, onChangeCountry, onChangeProvince,
        onChangeDistrict, onChangeCommune } = useGlobal();
        

	return (
		<>
        <Grid container spacing={3}>
					<Grid item xs={12}>
					<Checkbox
								name="termsOfService"
								
								label="Khu kinh tế thương mại"
								/>
					</Grid>
				  <Grid item xs={12}>
				  <Select
                      name="dbtt"
                      label="Đầu biển theo tỉnh"
                    />
                  </Grid>
				  <Grid item xs={12}>
				  <Select
                      name="dbqg"
                      label="Đầu biển quốc gia"
                    />
                  </Grid>
				  <Grid item xs={12}>
				  <Select
                      name="seri"
                      label="Seri chữ"
                    />
                  </Grid>
				  <Grid item xs={12}>
				  <Select
                      name="color"
                      label="Màu biển"
                    />
                  </Grid>

		</Grid>
           
         
		</>
	)
}

export default Plate
