import React, { useState } from 'react'
import moment from 'moment'
import {
    Container, MenuItem,
    Grid,
    Typography
  } from '@material-ui/core';
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
import YearPicker from '../../../Components/FormsUI/YearPicker';
import Checkbox from '../../../Components/FormsUI/Checkbox';
const Owner = () => {
	const classes = useStyles();
    const { data, dispatch, onChangeCountry, onChangeProvince,
        onChangeDistrict, onChangeCommune } = useGlobal();
        

	return (
		<>
        <Grid item container spacing={3}>
                    <Grid item xs={9}>
                    <Textfield
                      name="chusohuu"
                      label="Chủ sở hữu"
                     
                    >
                      
                </Textfield>
                  </Grid>

                  <Grid item xs={3}>
                  <YearPicker
                      name="namsinh"
                      label="Năm sinh"
                     
                    />
                  </Grid>
                  <Grid item xs={3}>
                  <Textfield
                      name="country"
                      label="Quốc gia"
                      select
                      onChange={(e) => onChangeCountry(e.target.value)}
                   
                    >
                     
				
                  </Textfield>
                  </Grid>
                  <Grid item xs={3}>
                  <Textfield
                      name="province"
                      label="Tỉnh/Thành phố"
                      select
                      onChange={(e) => onChangeProvince(e.target.value)}
                   >
                    
                      </Textfield>
                  </Grid>
                  <Grid item xs={3}>
                  <Textfield
                      name="district"
                      label="Quận/Huyện"
                      select
                      onChange={(e) => onChangeDistrict(e.target.value)}
                   >

                            
                   </Textfield>
                  </Grid>
                  <Grid item xs={3}>
                  <Textfield
                      name="ward"
                      label="Phường/Xã"
                      select
                      onChange={(e) => onChangeCommune(e.target.value)}
                   >
                     
                     </Textfield>
                  </Grid>
                  <Grid item xs={12}>
                  <Textfield
                      name="diachi"
                      label="Địa chỉ"
                  
				
                    />
                    </Grid>
                  <Grid item xs={6}>
                  <Textfield
                      name="cccd_chuxe"
                      label="Số CCCD/CMND/Hộ chiếu chủ xe"
                    />
                    
                  </Grid>
                  <Grid item xs={3}>
                  <DateTimePicker
                      name="ngaycap_chuxe"
                      label="Ngày cấp"
                    />
                    
                  </Grid>
                  <Grid item xs={3}>
                  <Select
                      name="noicap"
                      label="Nơi cấp"
                      
                    />
                    
                  </Grid>
                  <Grid item xs={6}>
                  <Textfield
                      name="cccd_nltt"
                      label="Số CCCD/CMND/Hộ chiếu NLTT"
                    />
                    
                  </Grid>
                  <Grid item xs={3}>
                  <DateTimePicker
                      name="ngaycap_nltt"
                      label="Ngày cấp"
                    />
                    
                  </Grid>
                  <Grid item xs={3}>
                  <Select
                      name="noicap1"
                      label="Nơi cấp"
                      
                    />
                    
                  </Grid>
         </Grid>  
         
		</>
	)
}

export default Owner
