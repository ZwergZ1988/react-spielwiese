import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DataGrid } from '@mui/x-data-grid';

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
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
      </button>
      <DataGrid rows={rows} columns={columns} />
    </>
  )
}

export default App
