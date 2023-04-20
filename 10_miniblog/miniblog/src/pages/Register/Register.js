import styles from "./Register.module.css"

import { useState, useEffect } from 'react'

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form>
        <label>
          <span>Nome:</span>
          <input 
          type="text"
          name="displayName" 
          required 
          placeholder="Nome de Usuário" />
        </label>
        <label>
          <span>E-mail:</span>
          <input 
          type="email" 
          name="email" 
          required 
          placeholder="E-mail de usuário"/>
        </label>
        <label>
          <span>Senha:</span>
          <input 
          type="password" 
          name="password" 
          required 
          placeholder="Digite sua senha"/>
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input 
          type="password" 
          name="confirmPassword" 
          required 
          placeholder="Confirme sua senha"/>
        </label>
        <button className="btn">Cadastrar-se</button>
      </form>
    </div>
  )
}

export default Register