import { useEffect } from 'react';
import './styles.css';

import Footer from './../../components/Footer';

function Login() {
  useEffect(() => {
    document.title = 'Login | Bom Tempero';
  }, []);

  return (
    <>
      <div className="login">
        <span>Login</span>
      </div>
      
      <Footer />
    </>
  );
}

export default Login;