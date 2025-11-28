import { router } from '@inertiajs/react'

const Home = () => {
  return (
    <div>
      <h2>Olá, tudo bem?</h2>
        <p>Bem-vindo ao Tasklamation!</p>
        <button onClick={() => {router.delete('/users/sign_out', {preserveScroll: true})}}>
          Ir para Login
        </button>
    </div>
  )
}

export default Home