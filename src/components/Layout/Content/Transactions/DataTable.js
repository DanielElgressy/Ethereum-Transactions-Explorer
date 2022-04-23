import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'timestamp', headerName: 'Timestamp', width: 180 },
  { field: 'from', headerName: 'From', width: 300 },
  { field: 'to', headerName: 'To', width: 300 },
  {
    field: 'value',
    headerName: 'Value of transcation',
    type: 'number',
    width: 200,
  },
  {
    field: 'confirmation',
    headerName: 'confirmation',
    sortable: false,
    width: 200
  },
  {
    field: 'hash',
    headerName: 'Hash',
    type: 'number',
    width: 200,
  }
];

export default function DataTable(props) {

  return (
    <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={props.rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
      />
    </div>
  );
}
