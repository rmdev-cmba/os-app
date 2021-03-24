import { useState, useCallback } from 'react';
import  Link  from 'next/link';
import styles from '../../styles/Home.module.css'

// https://www.youtube.com/watch?v=9RcY9SeMSak&list=PLbV6TI03ZWYVxGBKyYJf_Qy6d4saMbCq3&index=4
// SWR: https://www.youtube.com/watch?v=aSXwLUSbwf4&list=PLbV6TI03ZWYVxGBKyYJf_Qy6d4saMbCq3&index=5

function SearchPage() {
    const [textInput, setTextInput] = useState('');

    // const { data, error } = useSWR(
    //     textInput !== '' ? `/api/search/${textInput}` : null,
    //     api
    // );

    const handleSearch = useCallback(
        async (e) => {
            e.preventDefault();

            setTextInput(document.getElementsByTagName('input')[0].value);
        },
        [setTextInput]
    );

    return (
        <div className={styles.container}>
            

            <div className="text-center">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Digite número da OS "
                        className="text-2xl border-2 border-box w-3/12 m-auto text-center my-12" />
                    <button type="submit" className="hidden">
                        Pesquisar
                    </button>

                </form>
               
            </div>

        </div>
    );
}
  
  export default SearchPage;

  // Continuar no video: https://www.youtube.com/watch?v=b-YXlBXk9wA&list=PLbV6TI03ZWYVxGBKyYJf_Qy6d4saMbCq3&index=5