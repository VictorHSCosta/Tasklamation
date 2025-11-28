import { useForm, Link } from '@inertiajs/react'

export default function Register() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    password_confirmation: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // POST para a rota do Devise
    post('/users', {
      data: { user: data },
      onError: (errors) => {
        console.log('Erro no cadastro:', errors)
      }
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Criar Conta</h1>
        
        <form onSubmit={handleSubmit}>
          {/* Campo de Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            {errors.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            )}
          </div>

          {/* Campo de Senha */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Senha (mínimo 6 caracteres)
            </label>
            <input
              id="password"
              type="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <div className="text-red-500 text-sm mt-1">{errors.password}</div>
            )}
          </div>

          {/* Campo de Confirmação de Senha */}
          <div className="mb-4">
            <label htmlFor="password_confirmation" className="block text-gray-700 font-medium mb-2">
              Confirme a Senha
            </label>
            <input
              id="password_confirmation"
              type="password"
              value={data.password_confirmation}
              onChange={(e) => setData('password_confirmation', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password_confirmation && (
              <div className="text-red-500 text-sm mt-1">{errors.password_confirmation}</div>
            )}
          </div>

          {/* Erro geral (se houver) */}
          {errors.error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {errors.error}
            </div>
          )}

          {/* Botão de Submit */}
          <button
            type="submit"
            disabled={processing}
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {processing ? 'Cadastrando...' : 'Cadastrar'}
          </button>

          {/* Link para login */}
          <div className="mt-4 text-center">
            <Link href="/users/sign_in" className="text-blue-500 hover:underline">
              Já tem conta? Faça login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
