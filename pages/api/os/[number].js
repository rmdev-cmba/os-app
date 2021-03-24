
import { connectToDatabase } from '../../../database/mongodb';


export default async (req, res) => {
    //console.log('api/[id] chamado')
    const {url, method} = req;
    
    // digitado: http://localhost:3000/api/os/2545
    console.log({url, method}) // { url: '/api/os/2545', method: 'GET' }

    const id = req.query.id

   // let id = "603d96192ddebf55d7979517"
    // aqui pode acessar o banco de dados
   // const { db } = await connectToDatabase();

    

    //const data = await db.collection('user').findOne({_id});

    // res.status(200).json(
    //     data
    // )

};