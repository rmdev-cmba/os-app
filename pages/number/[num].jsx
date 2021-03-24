import axios from 'axios';
import styles from '../../styles/Home.module.css'

function Num({ user }) {


    return (
        <div className={styles.container}>
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
    // console.log('cheguei aqui', context.params._id)
    //id = "603d96192ddebf55d7979517"

    const response = await axios.get('http://localhost:3000/api/os/[number]', { params: { id: context.params._id } })

    const data = await response.data;

    return {
        props: {

            user: data
            // props for your component
        }
    }
}

export default Num;