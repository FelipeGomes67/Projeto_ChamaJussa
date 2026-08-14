import { LoginStyle } from "./loginStyle";

export function Login () {



    return(
    <>
    
      <main className='main-section'>

        <figure className='figure-section'>
          <img className='figure-section__img' src={logo} alt="Logo" />
        </figure>


        <section className='section-card'>

          <div className='teste'>

            <header className='header-section'>

              <h2 className='header-section__tittle'>Chama Jussa</h2>
              <p className='header-section__subtittle'>Gerenciamento de Ordens de Serviço</p>
            </header>

            <form action="" className='login-user'>
              <strong className='login-user__text'>E-mail</strong>
              <input type="text" className='login-user__input' placeholder='email@email.com' />
              <strong className='login-user__text'>Senha</strong>
              <input type="password" className='login-user__input' placeholder='Digite sua senha' />
              <button className='login-user__button'> Acessar o Sistema</button>

            </form>
          </div>

        </section>
      </main>

      <form action=""></form>
      
    </>
    )
}