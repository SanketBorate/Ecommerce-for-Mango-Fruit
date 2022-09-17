import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OrderDetails from './OrderDetails';

export default function BlankPage() {
    return (

        <div>
            <Routes>
                <Route path='/order-details' element={<OrderDetails />} />
            </Routes>

        </div>

    );

}
