import { styled } from '@mui/system'
import { TextField } from '@mui/material'


export const ScssTextField = styled(TextField)({
	'& label.Mui-focused': {
		color: '#50FF40'
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: '#50FF40',
	},
	'& .MuiOutlinedInput-root': {
		'&.Mui-focused fieldset': {
			borderColor: '#50FF40',
		},
	},
});