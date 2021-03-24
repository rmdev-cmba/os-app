// Ref: 

import { connectToDatabase } from '../../database/mongodb';


export default async (req, res) => {
    // aqui pode acessar o banco de dados
    const {db} = await connectToDatabase();
    const data = await db.collection('user').find().toArray();

    res.status(200).json(
     data
    )

  }