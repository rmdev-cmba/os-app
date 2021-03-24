import axios from 'axios';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

// usando o Link
function UsersSSG({ users }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {users.map((user) => (
          <h3 key={user.id} >
            {/* cada usuário será um link e retorna um json */}
            <Link href="/profile/[id]" as={`/profile/${user._id}`}>
              <a>{user.name}</a>
            </Link>
          </h3>
        ))}
      </main>
      <footer className={styles.footer}>

        <a href="/">Voltar a Home</a>

      </footer>

    </div>

  );
}
// função SSR - Server Side Render
// https://www.youtube.com/watch?v=0-W5lak4NYY&list=PLbV6TI03ZWYVxGBKyYJf_Qy6d4saMbCq3&index=6

export async function getServerSideProps(context) {
  const response = await axios.get('http://localhost:3000/api/users');

  const data = await response.data;

  return {
    props: {

      users: data
      // props for your component
    }
  }
}

export default UsersSSG;

// SSG-ISG-SSR
// qual a melhor forma de usar cada página = https://www.youtube.com/watch?v=SIrZ6pX-XjE (44:00)
