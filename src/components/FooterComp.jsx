import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (

    /* comienzo con el diseño del footer el cual va a ser estatico */
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Recuerda seguir una dieta equilibrada y hacer deporte.<br/>
        &copy; {new Date().getFullYear()} Copyright - {' '}
        <a className='text-dark decoration-none' href='https://mdbootstrap.com/'>
        Designed by Fernando Martínez Sánchez
        </a>
      </div>
    </MDBFooter>
  );
}