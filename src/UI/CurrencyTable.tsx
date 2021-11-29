import React, {useState} from "react";
import { ICurrencyTableProps } from "./types";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import './styles.scss';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const CurrencyTable: React.FC<ICurrencyTableProps<Object>> = ({ data }): JSX.Element => {
    const [ arrowDirection, setArrowDirection ] = useState<boolean>(true);

    console.log(arrowDirection);
        return (
            <TableContainer  component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className={'container'}>
                        <TableRow>
                            <TableCell>{ 'Coin name '}</TableCell>
                            <TableCell>{ 'Coin Price (USD)' }</TableCell>
                            <TableCell>{ 'OpeningPrice (USD)' }</TableCell>
                            <TableCell>
                                { 'Price Increase' }
                                <ArrowDownwardIcon onClick={() => setArrowDirection(!arrowDirection)} />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.calories}</TableCell>
                                <TableCell align="center">{row.fat}</TableCell>
                                <TableCell align="center">
                                    {row.carbs}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
};

export const MemoizedCurrencyTable = React.memo(CurrencyTable);
