
import TabPanel from "../../../components/TabPanel"
import Textfield from '../../../Components/FormsUI/Textfield';
import Select from '../../../Components/FormsUI/Select';
import DateTimePicker from '../../../Components/FormsUI/DataTimePicker';
import Checkbox from '../../../Components/FormsUI/Checkbox';
import { useFormikContext } from 'formik';
// import Button from '../../../Components/FormsUI/Button';
import {
  Container,
  Grid,Button,
  Typography ,Divider
} from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Field, Form, Formik, FormikProps } from 'formik';
import Plate from "./Plate"
import Vehicle from "./Vehicle"
import Owner from "./Owner"
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { useGlobal } from '../../../context/GlobalContext';
import * as moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardDatePicker } from 'formik-material-ui-pickers';

import { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MomentUtils from "@date-io/moment";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
     
    },
  
  }));
 
  
const FirstRegister = ({ value, index }) => {
    const classes = useStyles();
    const INITIAL_FORM_STATE = {
      chusohuu: '',
      namsinh: moment(new Date()).format('YYYY'),
      cccd_chuxe :'',
      cccd_nltt :'',
      ngaycap_chuxe :moment(new Date()).format('DD/MM/YYYY'),
      ngaycap_nltt :moment(new Date()).format('DD/MM/YYYY'),
    
    };
    
    const FORM_VALIDATION = Yup.object().shape({
      chusohuu: Yup.string()
        .required('Required'),
      namsinh: Yup.date()
        .required('Required'),
        // country: Yup.string()
        // .required('Required'),
        // province: Yup.string()
        // .required('Required'),
        // district: Yup.string()
        // .required('Required'),
        // ward: Yup.string()
        // .required('Required'),
      cccd_chuxe: Yup.string()
      .required('Required'),
      cccd_nltt: Yup.string()
      .required('Required'),
      ngaycap_chuxe: Yup.date()
      .required('Chọn ngày cấp'),
      ngaycap_nltt: Yup.date()
      .required('Required'),
    });
  
    
	return (
		<TabPanel value={value} index={index}>
       <Formik
              initialValues={{
                ...INITIAL_FORM_STATE
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                console.log(values);
              }}
            >
              <Form >
        
			<Grid
				container
				direction="row"
				alignItems="center"
				spacing={3}
			>
				<Grid item container xs={12} direction="row" justify="flex-end">
					<Button color="primary" >TRA CỨU DỮ LIỆU</Button>
				</Grid>
				
              
        <Grid item xs={1}>
     <Divider/>
        </Grid>
        <Grid item xs={2}>
        <Typography variant="overline" gutterBottom>
        Thông tin chủ sở hữu
      </Typography>
        </Grid>
        <Grid item xs={9}>
     <Divider/>
        </Grid>
        
        <Grid item xs ={12}> 
					<Owner />
				</Grid>
       
      
        <Grid item xs={1}>
     <Divider/>
        </Grid>
        <Grid item xs={1}>
        <Typography variant="overline" gutterBottom>
        Thông tin xe
      </Typography>
        </Grid>
        <Grid item xs={8}>
     <Divider/>
        </Grid>
        <Grid item xs={1}>
        <Typography variant="overline" gutterBottom>
        Thông tin biển số

      </Typography>

        </Grid>
        <Grid item xs={1}>
     <Divider/>
        </Grid>
        <Grid  item container spacing={3}>
        <Grid item xs={9}>
						<Vehicle />
					</Grid>
					<Grid item xs={3}>
						<Plate />
					</Grid>
        </Grid>
        <Grid
					item container
					direction="row"
					justify="center"
				>
					<Grid
						container xs={2}
						direction="row"
						justify="space-around"
					>
						<Button variant="contained"
							color="primary" type="submit"
						>CẤP BIỂN</Button>
						<Button variant="outlined"  
							color="primary" type="reset"
						>LÀM MỚI</Button>
					</Grid>
				</Grid>
        
      </Grid>
      </Form>
            </Formik>
            
		</TabPanel >
	)
}

export default FirstRegister
