
import TabPanel from "../../../components/TabPanel"
import {
	Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField
} from "@material-ui/core"
import Table from "./Table"
import { useState } from "react";

const ListRegisted = ({ value, index }) => {
	const [visible, setVisible] = useState('none');
	const onVisible = () => {
		visible === 'none' ? setVisible('') : setVisible('none')
	}
	return (
		<TabPanel value={value} index={index}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
				<Grid
				container spacing={3}
			>
				<Grid
					container justify="center" spacing={3}
				>
				<Grid item>
						<TextField
							id="ten" name="bienSo" label="Biến số"
							placeholder="" fullWidth
						 variant="outlined" size="small"
						/>
					</Grid>
					<Grid item>
						<Button variant="contained" color="primary"
						type="submit">Tìm kiếm</Button>
					</Grid>
					<Grid item>
						<Button variant="outlined" color="primary" onClick={onVisible}
							>Tìm kiếm nâng cao</Button>
					</Grid>
					</Grid>
					<Grid
					container item
					alignItems="center"
					spacing={3}
					style={{ display: visible }}
				>
					<Grid item>
						<TextField
							id="ten" name="soKhung" label="Số khung"
							placeholder="" fullWidth
							InputLabelProps={{
								shrink: true,
							}} variant="outlined" size="small"
						/>
					</Grid>
					<Grid item >
						<TextField
							id="ten" name="soMay" label="Số máy 1"
							placeholder="" fullWidth
							InputLabelProps={{
								shrink: true,
							}} variant="outlined" size="small"
						/>
					</Grid>
					<Grid item >
						<TextField
							id="ten" name="soMay2" label="Số máy 2"
							placeholder="" fullWidth
							InputLabelProps={{
								shrink: true,
							}} variant="outlined" size="small"
						/>
					</Grid>
					<Grid item >

							<TextField
								id="trangthaiId" label="Trạng thái hồ sơ" placeholder="Chọn trạng thái hồ sơ"
								value="0" displayEmpty name='trangthaiId'
								select variant="outlined" size="small" fullWidth onChange
							>
								<MenuItem value="0" disabled>
									Chọn Trạng thái hồ sơ
								</MenuItem>
							</TextField>

					</Grid>
					</Grid>
					</Grid>

				</Grid>
				<Grid item xs={12}>
					<Table />
				</Grid>
			</Grid>
		</TabPanel >
	)
}

export default ListRegisted