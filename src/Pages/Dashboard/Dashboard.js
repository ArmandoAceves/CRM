import React, { useEffect } from 'react';
import { Card } from 'primereact/card';
import './Dashboard.css';

export default function Dashboard() {
  useEffect(() => {}, []);

  console.log('Rendering Dashboard');
  return (
    <div className='graficos'>
      <h2 className='titulo'>Hola soy un dashboard</h2>
      <hr className="mb-3 mx-3 border-top-2 border-bottom-1" />
      <div className='tarjetas'>
        <Card title="Cliente Nuevos" className='titulo_card'>
          <hr className="mb-3 mx-3 border-top-2 border-bottom-1" />
          <p className="m-0 dato">
            1200
          </p>
        </Card>
        <Card title="Clientes actuales" className='titulo_card'>
          <hr className="mb-3 mx-3 border-top-2 border-bottom-1" />
          <p className="m-0 dato">
            5000
          </p>
        </Card>
        <Card title="Clientes Totales" className='titulo_card'>
          <hr className="mb-3 mx-3 border-top-2 border-bottom-1" />
          <p className="m-0 dato">
            6200
          </p>
        </Card>
        <Card title="Clientes Perdidos" className='titulo_card'>
          <hr className="mb-3 mx-3 border-top-2 border-bottom-1" />
          <p className="m-0 dato">
            100
          </p>
        </Card>
      </div>
    </div>
  );
}