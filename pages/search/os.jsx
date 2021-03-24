

// https://www.youtube.com/watch?v=0-W5lak4NYY&list=PLbV6TI03ZWYVxGBKyYJf_Qy6d4saMbCq3&index=6 (20:00)
// 19/03/21 Verificar:
// https://www.youtube.com/watch?v=_Z0ig8HB34c&list=PLbV6TI03ZWYVxGBKyYJf_Qy6d4saMbCq3&index=7
function SearchOS({ user }) {


    return (
      <div>
        <p>ID: {user._id}</p>
        <p>Nome: {user.name}</p>
        <p>aparelho: {user.aparelho}</p>
        <p>norder: {user.norder}</p>
        <p>serie: {user.serie}</p>
        <p>defeito: {user.defeito}</p>
  
        <div>
          
            <a href="/">Voltar a Home</a>
          
        </div>
      </div>
    )
  
  }


  export async function getServerSideProps(context) {

    return(
        <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Digite a disciplina que você procura..."
          className="text-2xl border-2 border-box w-3/12 m-auto text-center my-12"
        />
        <button type="submit" className="hidden">
          Pesquisar
        </button>
        
      </form>
    )

  }


  export default SearchOS;