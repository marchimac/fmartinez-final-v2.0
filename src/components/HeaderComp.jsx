import logo from '../images/cutlery.png'
const styles = {
  imgLogo: {
    width: '8%'
  }
}

function HeaderComp() {

  /* doy forma al footer estatico */
  return (
    <>
    <div className='d-flex m-3' data-testid='tested' >
      <img className='m-2' src={logo} style={styles.imgLogo} alt='Icono con un plato, un cuchillo y un tenedor' />
      <h1 className='m-auto color' >Metabolismo basal y recetas</h1>
    </div>
    </>
  );
}

export default HeaderComp;