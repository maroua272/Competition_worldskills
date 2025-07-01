import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <div className="form-group">
          <label>Ton adresse email utilisee lors de l'inscription</label>
          <input type="email" placeholder="Entrez votre email" required />
        </div>
        <div className="form-group">
          <label>Ton mot de passe</label>
          <input type="password" placeholder="Entrez votre mot de passe" required />
        </div>
        <div className="login-links">
        <Link to="/forgot-password">Mot de passe oublié ?</Link>
        <p>
          Tu n'as pas de compte ? <Link to="/register">Inscris-toi</Link>
        </p>
      </div>
        <p>Tu n'as pas de compte? <a href="">S'inscrie</a></p>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
export default Login;
