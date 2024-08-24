import React from 'react';
import { useState } from 'react';
import { Button, Stack } from '@mui/material';

function Knopf() {

    const [count, setCount] = useState(0)

    return (
        <Stack spacing={2} direction="row">
            <Button variant="text" onClick={() => setCount((count) => count + 1)}>{count}</Button>
            <Button variant="contained" onClick={() => setCount((count) => count + 1)}>{count}</Button>
            <Button variant="outlined" onClick={() => setCount((count) => count + 1)}>{count}</Button>
        </Stack>
    );
}

export default Knopf;