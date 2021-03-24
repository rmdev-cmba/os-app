import { ObjectID } from 'bson';
import { connectToDatabase } from '../../database/mongodb';


export default async (req, res) => {
    //console.log('api/[id] chamado')
    const id = req.query.id

   // let id = "603d96192ddebf55d7979517"
    // aqui pode acessar o banco de dados
    const { db } = await connectToDatabase();

    let _id = new ObjectID(id)

    const data = await db.collection('user').findOne({_id});

    res.status(200).json(
        data
    )

}