import { useState } from 'react';
import FormLogin from './FormLogin.jsx';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/Autcontext';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';
import logo from '../Assets/images/logo.png';
import home from '../Assets/images/home.jpg';
import './styles/Login.css';

const LogIn = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleLogin = async (email, password) => {
    try {
      await login(email, password);
      history.push('/WallNotes');
    } catch (error) {
      setError('Error en las credenciales');
      setTimeout(() => setError(''), 1500);
    }
  };

  const handleLoginGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        history.push('/WallNotes');
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      });
  };

  return (
    <div>
      <section className="container">
        <div className="homepick">
          <p className="description">
            TakeNotes es una herramienta que te permitirá llevar información por
            medio de un archivo de notas, en donde podrás almacenar rapidamente
            tus ideas ó lista de tareas.
            <br />
            ¡Anímate a usarla!
          </p>
          <img src={home} alt="home-img" className="home-img" />
        </div>
        <div className="container-Form">
          <div>
            <img src={logo} alt="logo-img" className="logo" />
          </div>
          {error && <p className="error">{error}</p>}
          <FormLogin
            handleLogin={handleLogin}
            handleLoginGoogle={handleLoginGoogle}
          />
          <p>
            ¿No tienes una cuenta? <Link to="/register">Registrate</Link>{' '}
          </p>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
