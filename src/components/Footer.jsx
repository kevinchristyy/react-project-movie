import StrymLogo from '../assets/Strym.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='row row__column'>
                <Link to="/">
                    <figure className='footer__logo'>
                        <img src={StrymLogo} alt="" className='footer__logo--img' />
                    </figure>
                </Link>
                <div className='footer__copyright'>
                Copyright &copy; 2023 StrymMovies
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer