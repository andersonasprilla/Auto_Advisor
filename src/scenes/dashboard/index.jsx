import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { 
    id: 'tag', 
    label: 'TAG', 
    minWidth: 170 
  },
  { 
    id: 'ro',
    label: 'Repair Order',
    minWidth: 100 
  },
  {
    id: 'vehicle',
    label: 'Vehicle',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'name',
    label: 'Name',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'contact',
    label: 'Contact Number',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'description',
    label: 'Description',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'waittime',
    label: 'Wait/Drop?',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(tag, ro, vehicle, name, contact, description, waittime) {
  return { tag, ro, vehicle, name, contact, description, waittime };
}

const rows = [
  createData(6895,503370,'CIVIC 06','REGINALD ALPHONSE','(786) 913-3899','BATTERY DYING','WAITER'),
  createData(6896,503391,'ODYSSEY 22','HAIYAN LI','(413) 575-1923','MIRROR FELL OFF','WAITER'),
  createData(6897,503417,'PILOT 22','DANE AIKEN','(352) 217-7153','POPPING NOISE/LOF','WAITER'),
  createData(6898,503426,'INSIGHT 20','DAVID ZELINSKY','(765) 543-6930','FUEL PUMP','DROP'),
  createData(6899,503429,'PILOT 20','ANA','(305) 793-6275','LOF/ROTATE','WAITER'),
  createData(6801,503481,'ACCORD 19','LUIS AQUINO','(786) 314-1632','LOF/NOISES','DROP'),
  createData(6802,503499,'ODYSSEY 13','BRIAN BRENNAN','(954) 790-3030','4WA','DROP'),
  createData(6803,503688,'ACCORD 14','LUIS VALENCIA','(954) 471-8882','CHECK ENGINE LIGHT','WAITER'),
  createData(6805,503694,'HRV 19','ELITA PEREZ','(754) 245-4568','LOF','WAITER'),
  createData(6806,503702,'CIVIC 13','MARCELO HELGUERA','(954) 673-5453','BATTERY ISSUES','DROP'),
  createData(6807,503784,'ODYSSEY 20','JOSE LICEA','(954) 294-0688','LOF/GAS CAP','DROP'),
  createData(6808,503803,'CIVIC 08','BIBI ALI','(954) 736-7214','BATTERY ISSUES','DROP'),
  createData(6809,503855,'ACCORD 14','SONIA WHITE','(954) 881-1928','LOF/NOISE','WAITER'),
  createData(6810,503863,'CRV 09','JAMES PEREZ','(954) 918-2956','A/C BATTERY','DROP'),
  createData(6811,503898,'ODYSSEY 19','NEDAL ','(786) 971-7057','SOP','DROP'),
  
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100, 1000]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}