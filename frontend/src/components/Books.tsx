import React, { useState } from 'react';

import {
    Box,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    TablePagination,
    Paper
} from '@mui/material';

interface IBook {
    id?: number;
    label: string;
    author: string;
    gender: string;
    published: string;
    imgURL: string;
}

interface Props {
    books: IBook[];
    //to add children>> children: React.ReactNode
}

const Books: React.FC<Props> = ({ books }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <React.Fragment>
            <Box sx={{
                width: '100%',
                minWidth: '60vw',
                height: '95vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
                <TableContainer component={Paper} sx={{ width: '60vw' }} >
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#1976d2', color: '#fafafa' }} >
                                <TableCell sx={{ color: 'inherit' }} >Label</TableCell>
                                <TableCell sx={{ color: 'inherit' }} align="right">Author</TableCell>
                                <TableCell sx={{ color: 'inherit' }} align="right">Gender</TableCell>
                                <TableCell sx={{ color: 'inherit' }} align="right">Published</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                books
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map(book => (
                                        <TableRow key={book.id} sx={{ '& > *': { borderBottom: 'unset' } }}>
                                            <TableCell>{book.label}</TableCell>
                                            <TableCell align="right">{book.author}</TableCell>
                                            <TableCell align="right">{book.gender}</TableCell>
                                            <TableCell align="right">{book.published}</TableCell>
                                        </TableRow>
                                    ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={books.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </React.Fragment >
    );
}

export default Books