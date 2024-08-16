import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0)

  const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];
  
  const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];

  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="text" onClick={() => setCount((count) => count + 1)}>{count}</Button>
        <Button variant="contained" onClick={() => setCount((count) => count + 1)}>{count}</Button>
        <Button variant="outlined" onClick={() => setCount((count) => count + 1)}>{count}</Button>
      </Stack>
      <DataGrid rows={rows} columns={columns} />
    </>
  )
}

export default App
