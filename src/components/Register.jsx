import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/Autcontext';
import FormRegister from './FormRegister';
import home from '../Assets/images/home.jpg';
import logo from '../Assets/images/logo.png';
import './styles/Register.css';

const Register = () => {
  const { signUp } = useAuth();
  const [error, setError] = useState('');
  const [confirmpass, setConfirmPass] = useState('');
  const history = useHistory();
  const handleConfirmPass = (e) => setConfirmPass(e.target.value);

  const handleSignUP = async (password, email) => {
    if (password !== confirmpass) {
      //console.log(password, confirmpass, 'jajajja');
      setError('la contraseña no coincide');
      setTimeout(() => setError(''), 10000);
    } else {
      try {
        await signUp(email, password);
        history.push('/WallNotes');
      } catch (error) {
        setError('Credenciales incorrectas');
        setTimeout(() => setError(''), 1500);
      }
    }
  };

  return (
    <section className="container">
      <div className="homepick">
        <p className="description">
          TakeNotes es una herramienta que te permitirá llevar información por
          medio de un archivo de notas, en donde podrás almacenar rapidamente
          tus ideas ó lista de tareas.
          <br/>
          ¡Anímate a usarla!
        </p>
        <img src={home} alt="home-img" className="home-img" />
      </div>
      <div className="container-Form">
        <div>
          <img src={logo} alt="logo-img" className="logo" />
          {error && <p className="error">{error}</p>}
        </div>
        <FormRegister
          handleConfirmPass={handleConfirmPass}
          handleSignUP={handleSignUP}
        />
        <p className="description-sesion">
          Ya estas registrado <Link to="/">inicia Sesión</Link>{' '}
        </p>
      </div>
    </section>
  );
};

export default Register;
