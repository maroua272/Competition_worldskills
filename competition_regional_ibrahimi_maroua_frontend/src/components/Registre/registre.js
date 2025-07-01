import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validation simple
    if (!form.nom || !form.prenom || !form.email || !form.password || !form.confirmPassword) {
      setError("Tous les champs sont obligatoires.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    // Ici tu peux ajouter la logique d'envoi au backend (API)
    alert("Inscription réussie !");
  };

  return (
    <div className="register-container">
      <h1>Inscription</h1>
      {error && <p className="error">{error}</p>}

      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom</label>
          <input type="text" name="nom" value={form.nom} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Prénom</label>
          <input type="text" name="prenom" value={form.prenom} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Confirmer mot de passe</label>
          <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
        </div>

        <button type="submit">S'inscrire</button>
      </form>

      <p className="login-text">
        Vous avez déjà un compte ? <Link to="/login">Connectez-vous</Link>
      </p>
    </div>
  );
}

export default Register;
