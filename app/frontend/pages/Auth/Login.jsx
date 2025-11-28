import { useForm, Link } from '@inertiajs/react'

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    user: { email: '',
    password: '',
    remember_me: false}
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // POST para a rota do Devise
    post('/users/sign_in', {
      data: {user: {data}},
      onError: (errors) => {
        console.log('Erro no login:', errors)
      }
    })
  }

  return (
    <div className="min-h-screen grid grid-cols-2 bg-gray-100">
      <div className='col-span-1 bg-[#F28D1C]'>

      </div>
      <div className="col-span-1 flex min-w-full flex-col justify-center items-center bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="items-center text-[#F28D1C] text-2xl font-semibold">Login</h1>
        
        <form onSubmit={handleSubmit}>
          {/* Campo de Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={data.user.email}
              onChange={(e) => setData('user.email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            {errors.user?.email && (
              <div className="text-red-500 text-sm mt-1">{errors.user.email}</div>
            )}
          </div>

          {/* Campo de Senha */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={data.user.password}
              onChange={(e) => setData('user.password', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.user?.password && (
              <div className="text-red-500 text-sm mt-1">{errors.user.password}</div>
            )}
          </div>

          {/* Checkbox Lembrar-me */}
          <div className="mb-4 flex items-center">
            <input
              id="remember_me"
              type="checkbox"
              checked={data.user.remember_me}
              onChange={(e) => setData('user.remember_me', e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="remember_me" className="text-gray-700">
              Lembrar-me
            </label>
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
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {processing ? 'Entrando...' : 'Entrar'}
          </button>

          {/* Links auxiliares */}
          <div className="mt-4 text-center">
            <Link href="/users/sign_up" className="text-blue-500 hover:underline">
              Não tem conta? Cadastre-se
            </Link>
          </div>
          
          <div className="mt-2 text-center">
            <Link href="/users/password/new" className="text-blue-500 hover:underline text-sm">
              Esqueceu a senha?
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
