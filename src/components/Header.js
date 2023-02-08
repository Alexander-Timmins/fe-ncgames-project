import { Link } from 'react-router-dom';
function Header(){
    return(
        <h1 className="Header"><Link className='home_link' to='/'><img className="logo" src='https://logos-download.com/wp-content/uploads/2021/01/Northcoders_LTD_Logo_full-700x389.png'></img></Link></h1>
    )
}

export default Header