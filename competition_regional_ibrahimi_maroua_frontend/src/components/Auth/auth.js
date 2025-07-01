import React from "react";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <div class="container">
      <div>
        <h1>A VOUS DE RACONTER LE</h1>
        <h2>" WOW "!!</h2>
      </div>

      <div>
        <Link to="/login">Se connecter</Link>
        <Link to="/register">S'inscrire</Link>
      </div>
    </div>
  );
}

export default Auth;
