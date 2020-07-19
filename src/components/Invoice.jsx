import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from './Layout/Input';
import Typography from '@material-ui/core/Typography';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import TableLayout from './TableLayout'
import Report from 'react-data-report';
import Button from '@material-ui/core/Button';
import EyeIcon from '@material-ui/icons/Visibility'

function createData(code, name, quantity, amount) {
	return { code, name, quantity, amount };
}

const rows = [createData(2111, 'Frozen yoghurt', 3, 159), createData(2112, 'Ice cream sandwich', 4, 237), createData(2113, 'Eclair', 5, 262), createData(2114, 'Cupcake', 5, 305), createData(2115, 'Gingerbread', 4, 356)];

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		backgroundColor: '#ddd',
		padding: '2vh',
		border: '1px solid #fff',
	},
	InputContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '1vh',
		'& input': {
			width: '10vh',
			padding: '0.7vh 0.3vh',
			fontSize: '2vh',
			'@media (max-width:700px)': {
				width: '100%',
			},
		},
	},
	InputContainerDate: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '1vh',
		'& input': {
			width: '18vh',
			padding: '0.7vh .3vh',
			fontSize: '2vh',
			'@media (max-width:700px)': {
				width: '100%',
			},
		},
	},
	InputNameContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '1vh',
		'& input': {
			width: '51.4vh',
			padding: '0.7vh .3vh',
			fontSize: '2vh',
			'@media (max-width:700px)': {
				width: '100%',
			},
		},
	},
	InputRemarksContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '1vh',
		'& input': {
			width: '46vh',
			padding: '0.7vh .3vh',
			fontSize: '2vh',
			'@media (max-width:700px)': {
				width: '100%',
			},
		},
	},
	CalculationContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '1vh',
	},
	InputTotalontainer: {
		padding: '1vh',
	},
});

class Invoice extends Component {
	state = {
		code: '',
		name: '',
		quantity: '',
		amount: '',
	};

	inputChangeHandler = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
    };

	addHandler = () => {
		const { code, name, quantity, amount } = this.state;
		rows.push(createData(code, name, quantity, amount));
		this.setState({
			code: '',
			name: '',
			quantity: '',
			amount: '',
			showReport : false,
		});
	};

	showReport = () => {
		this.setState({
			showReport : !this.state.showReport,
		});
	};
	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<Grid container>
					<Grid item xs={12} style={{textAlign : 'center'}}>
						<Button onClick={this.showReport} variant='contained' color='primary' size='small' className={classes.button} startIcon={<EyeIcon />}>
							Show Report
						</Button>
					</Grid>
				</Grid>
				{this.state.showReport ? (<Report data={rows}/>) : 
				(<Container>
					<Grid container spacing={3}>
						<Grid item sm={12} xs={12}>
							<Paper className={classes.paper}>
								<Grid container>
									<Grid item sm={2} xs={12}>
										<Grid container>
											<div className={classes.InputContainer}>
												<Typography variant='h5'>Opening#:</Typography>
												<Input textFieldType='text' />
											</div>
										</Grid>
									</Grid>

									<Grid item sm={2} xs={12}>
										<Grid container>
											<div className={classes.InputContainer}>
												<Typography variant='h5'>Inv#:</Typography>
												<Input textFieldType='number' />
											</div>
										</Grid>
									</Grid>

									<Grid item sm={3} xs={12}>
										<Grid container>
											<div className={classes.InputContainerDate}>
												<Typography variant='h5'>Date:</Typography>
												<Input textFieldType='date' />
											</div>
										</Grid>
									</Grid>

									<Grid item sm={3} xs={12}>
										<Grid container>
											<div className={classes.InputContainerDate}>
												<Typography variant='h5'>Invoice Date:</Typography>
												<Input textFieldType='date' />
											</div>
										</Grid>
									</Grid>

									<Grid item xs={12}>
										<Grid container>
											<Grid item sm={2} xs={12}>
												<Grid container>
													<div className={classes.InputContainer}>
														<Typography variant='h5'>
															A/C#:
															<LiveHelpIcon />
														</Typography>
														<Input textFieldType='text' />
													</div>
												</Grid>
											</Grid>

											<Grid item sm={5} xs={12}>
												<Grid container>
													<div className={classes.InputNameContainer}>
														<Typography variant='h5'>Name:</Typography>
														<Input textFieldType='text' />
													</div>
												</Grid>
											</Grid>
											<Grid item sm={5} xs={12}>
												<Grid container>
													<div className={classes.InputRemarksContainer}>
														<Typography variant='h5'>Remarks:</Typography>
														<Input textFieldType='text' />
													</div>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Paper>

							<Paper className={classes.paper}>
							<TableLayout data={this.state} rows={rows} changeHandler={this.inputChangeHandler} saveHandler={this.addHandler}/>
								<Grid container>
									<Grid item sm={9} xs={12}>
										<Grid container>
											<Grid item sm={3} xs={12}>
												<Grid container>
													<div className={classes.CalculationContainer}>
														<Typography variant='h6'>Item(s):</Typography>
														<Typography variant='h6'>{rows.length.toFixed(2)}</Typography>
													</div>
												</Grid>
											</Grid>
											<Grid item sm={3} xs={12}>
												<Grid container>
													<div className={classes.CalculationContainer}>
														<Typography variant='h6'>Cartons(s):</Typography>
														<Typography variant='h6'>{rows.length.toFixed(2)}</Typography>
													</div>
												</Grid>
											</Grid>

											<Grid item sm={3} xs={12}>
												<Grid container>
													<div className={classes.CalculationContainer}>
														<Typography variant='h6'>Exc.Tax:</Typography>
														<Typography variant='h6'>{rows.length.toFixed(2)}</Typography>
													</div>
												</Grid>
											</Grid>

											<Grid item sm={3} xs={12}>
												<Grid container>
													<div className={classes.CalculationContainer}>
														<Typography variant='h6'>Further.Disc:</Typography>
														<Typography variant='h6'>{rows.length.toFixed(2)}</Typography>
													</div>
												</Grid>
											</Grid>

											<Grid item sm={3} xs={12}>
												<Grid container>
													<div className={classes.CalculationContainer}>
														<Typography variant='h6'>A.Discount:</Typography>
														<Typography variant='h6'>{rows.length.toFixed(2)}</Typography>
													</div>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
									<Grid item sm={3} xs={12}>
										<div className={classes.InputTotalontainer}>
											<Paper className={classes.paper}>

												<Grid container>
													<Grid item sm={6} xs={12}>
														<Typography variant='h6'>Sub Total:</Typography>
													</Grid>
													<Grid item sm={6} xs={12}>
														<Typography variant='h6'>{rows.length.toFixed(2)}</Typography>
													</Grid>
													<Grid item sm={6} xs={12}>
														<Typography variant='h6'>Discount:</Typography>
													</Grid>
													<Grid item sm={6} xs={12}>
														<Typography variant='h6'>{rows.length.toFixed(2)}</Typography>
													</Grid>
													<Grid item sm={6} xs={12}>
														<Typography variant='h6'>Tax(%)(F4):</Typography>
													</Grid>
													<Grid item sm={6} xs={12}>
														<Typography variant='h6'>{rows.length.toFixed(2)}</Typography>
													</Grid>
													<Grid item sm={6} xs={12}>
														<Typography variant='h6'>Freight:</Typography>
													</Grid>
													<Grid item sm={6} xs={12}>
														<Typography variant='h6'>{rows.length.toFixed(2)}</Typography>
													</Grid>
													<Grid item sm={6} xs={12}>
														<Typography variant='h6'>Net Amount:</Typography>
													</Grid>
													<Grid item sm={6} xs={12}>
														<Typography variant='h6'>{rows.length.toFixed(2)}</Typography>
													</Grid>
												</Grid>
											</Paper>
										</div>
									</Grid>
								</Grid>
							</Paper>
						</Grid>
					</Grid>
				</Container>)}

			</Fragment>
		);
	}
}

export default withStyles(styles)(Invoice);