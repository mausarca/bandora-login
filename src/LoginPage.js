import React, { useState } from 'react';
import { Mail, Lock, Heart, Eye, EyeOff, User, Camera } from 'lucide-react';

const LoginSelector = ({ onSelect }) => (
  <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center p-4">
    <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 text-center">
      <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" fill="#ec4899" />
      <h1 className="text-2xl font-bold mb-6">Bienvenido a Bandora</h1>
      
      <div className="space-y-4">
        <button
          onClick={() => onSelect('client')}
          className="w-full p-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 flex items-center justify-center"
        >
          <User className="w-5 h-5 mr-2" />
          Ingresar como Cliente
        </button>
        
        <button
          onClick={() => onSelect('creator')}
          className="w-full p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center justify-center"
        >
          <Camera className="w-5 h-5 mr-2" />
          Ingresar como Creador
        </button>
      </div>
      
      <p className="mt-6 text-sm text-gray-500">
        ¿No tienes una cuenta? Selecciona tu tipo de usuario para registrarte
      </p>
    </div>
  </div>
);

const LoginForm = ({ type }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const isCreator = type === 'creator';

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
        <div className="text-center mb-6">
          <Heart className={`w-12 h-12 ${isCreator ? 'text-purple-600' : 'text-pink-600'} mx-auto`} fill={isCreator ? '#9333ea' : '#ec4899'} />
          <h2 className="text-2xl font-bold mt-2">
            {isCreator ? 'Portal de Creadores' : 'Portal de Clientes'}
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex mb-6 border-b">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 text-center font-semibold ${
              isLogin 
                ? `${isCreator ? 'text-purple-600 border-b-2 border-purple-600' : 'text-pink-600 border-b-2 border-pink-600'}` 
                : 'text-gray-400'
            }`}
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 text-center font-semibold ${
              !isLogin 
                ? `${isCreator ? 'text-purple-600 border-b-2 border-purple-600' : 'text-pink-600 border-b-2 border-pink-600'}` 
                : 'text-gray-400'
            }`}
          >
            Registrarse
          </button>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <div className="relative">
              <input
                type="email"
                className={`w-full px-4 py-2 pl-10 border rounded-lg ${
                  isCreator 
                    ? 'focus:ring-purple-500 focus:border-purple-500' 
                    : 'focus:ring-pink-500 focus:border-pink-500'
                }`}
                placeholder="tu@email.com"
              />
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          {!isLogin && isCreator && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Nombre Artístico
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Tu nombre artístico"
                />
                <User className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className={`w-full px-4 py-2 pl-10 pr-10 border rounded-lg ${
                  isCreator 
                    ? 'focus:ring-purple-500 focus:border-purple-500' 
                    : 'focus:ring-pink-500 focus:border-pink-500'
                }`}
                placeholder="••••••••"
              />
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Confirmar Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`w-full px-4 py-2 pl-10 border rounded-lg ${
                    isCreator 
                      ? 'focus:ring-purple-500 focus:border-purple-500' 
                      : 'focus:ring-pink-500 focus:border-pink-500'
                  }`}
                  placeholder="••••••••"
                />
                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>
          )}

          {isCreator && !isLogin && (
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-medium text-purple-800 mb-2">Requisitos para Creadores:</h3>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Documento de identidad válido</li>
                <li>• Mayor de edad</li>
                <li>• Foto de perfil verificada</li>
                <li>• Cuenta bancaria para pagos</li>
              </ul>
            </div>
          )}

          <button
            type="submit"
            className={`w-full py-3 px-4 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity ${
              isCreator 
                ? 'bg-gradient-to-r from-purple-500 to-purple-600' 
                : 'bg-gradient-to-r from-pink-500 to-pink-600'
            }`}
          >
            {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </button>
        </form>

        {/* Links útiles */}
        <div className="mt-4 text-center">
          <a 
            href="#" 
            className={`text-sm ${isCreator ? 'text-purple-600' : 'text-pink-600'} hover:underline`}
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {isCreator && (
          <div className="mt-6 text-center text-sm text-gray-500">
            Al registrarte como creador, aceptas nuestros{' '}
            <a href="#" className="text-purple-600 hover:underline">
              términos para creadores
            </a>
            {' '}y{' '}
            <a href="#" className="text-purple-600 hover:underline">
              políticas de contenido
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default function LoginPage() {
  const [selectedType, setSelectedType] = useState(null);

  if (!selectedType) {
    return <LoginSelector onSelect={setSelectedType} />;
  }

  return <LoginForm type={selectedType} />;
}