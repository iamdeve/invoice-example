import React, { Component, Fragment } from 'react';
import Input from './Layout/Input';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ReactToPrint from 'react-to-print';
import { withStyles } from '@material-ui/styles';

const StyledTableCell = withStyles(theme => ({
	head: {
		backgroundColor: 'lightBlue',
	},
	body: {
		// fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: '#ccc',
		},
	},
}))(TableRow);

const styles = theme => ({});

class TableLayout extends Component {
	state = {
		code: '',
		name: '',
		quantity: '',
		amount: '',
	};

	render() {
        const { classes, data } = this.props;
        console.log(this.props)
		return (
			<Fragment>
				<TableContainer>
					<Table className={classes.table} aria-label='customized table'>
						<TableHead>
							<TableRow>
								<StyledTableCell>Code</StyledTableCell>
								<StyledTableCell>Name</StyledTableCell>
								<StyledTableCell>Quantity</StyledTableCell>
								<StyledTableCell>Amount</StyledTableCell>
								<StyledTableCell>Add</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<StyledTableRow>
								<StyledTableCell component='th' scope='row'>
									<Input textFieldType='text' name='code' value={this.props.data.code} inputStyled={{ padding: '0.7vh .3vh', fontSize: '2vh' }} changed={this.props.changeHandler} />
								</StyledTableCell>
								<StyledTableCell>
									<Input textFieldType='text' name='name' value={this.props.data.name} inputStyled={{ padding: '0.7vh .3vh', fontSize: '2vh' }} changed={this.props.changeHandler} />
								</StyledTableCell>
								<StyledTableCell>
									<Input textFieldType='text' name='quantity' value={this.props.data.quantity} inputStyled={{ padding: '0.7vh .3vh', fontSize: '2vh' }} changed={this.props.changeHandler} />
								</StyledTableCell>
								<StyledTableCell>
									<Input textFieldType='text' name='amount' value={this.props.data.amount} inputStyled={{ padding: '0.7vh .3vh', fontSize: '2vh' }} changed={this.props.changeHandler} />
								</StyledTableCell>
								<StyledTableCell>
									<Button onClick={this.props.saveHandler} disabled={this.props.data.code === '' || this.props.data.name === '' || this.props.data.quantity === '' || this.props.data.amount === ''} variant='contained' color='primary' size='small' className={classes.button} startIcon={<SaveIcon />}>
										Save
									</Button>
									&nbsp;
									<ReactToPrint
										trigger={() => (
											<Button onClick={this.printReport} variant='contained' color='secondary' size='small' className={classes.button} startIcon={<PrintIcon />}>
												Report
											</Button>
										)}
										content={() => this.componentRef}
									/>
								</StyledTableCell>
							</StyledTableRow>
						</TableBody>
					</Table>
				</TableContainer>
                <TableDataLayout classes={classes} rows={this.props.rows} ref={el => (this.componentRef = el)}/>
			</Fragment>
		);
	}
}
class TableDataLayout extends Component {
	render() {
		return (
			<Fragment>
				<TableContainer style={{ maxHeight: '50vh' }} component={Paper}>
					<Table className={this.props.classes.table} aria-label='customized table'>
						<TableHead>
							<TableRow>
								<StyledTableCell>Sr#</StyledTableCell>
								<StyledTableCell>Code</StyledTableCell>
								<StyledTableCell>Name</StyledTableCell>
								<StyledTableCell>Quantity</StyledTableCell>
								<StyledTableCell>Amount</StyledTableCell>
								<StyledTableCell>&nbsp;</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{this.props.rows.map((row, i) => (
								<StyledTableRow key={i}>
									<StyledTableCell component='th' scope='row'>
										{i + 1}
									</StyledTableCell>
									<StyledTableCell>{row.code}</StyledTableCell>
									<StyledTableCell>{row.name}</StyledTableCell>
									<StyledTableCell>{row.quantity}</StyledTableCell>
									<StyledTableCell>{row.amount}</StyledTableCell>
									<StyledTableCell>&nbsp;</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Fragment>
		);
	}
}

export default withStyles(styles)(TableLayout);