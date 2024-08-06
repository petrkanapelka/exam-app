import React from 'react';
import { Controller } from './controller/Controller';
import { CounterTable } from './counterTable/CounterTable';

export const Counter = React.memo(() => {
    return (
        <div className='counter'>
            <CounterTable />
            <Controller />
        </div>
    );
});