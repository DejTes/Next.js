import  {getDogs, updateDog, destroyDog} from '@/utils/actions';

export default async function handler (req, res)  {
     try {

        // get the url param
        const id = req.query.id;

        // SHOW route
         if (req.method === 'GET') res.json(getDogs()[id]);

         // update route
         if (req.method === 'PUT') res.json(updateDog(req.body, id));

         //Delete route

         if (req.method === 'DELETE') res,json(destroyDog(id));

         if (![ 'GET', 'PUT', 'DELETE' ].includes(req.method)) res.status(404).json({error: `${req.method} method not allowed`});
    
        } catch (error) {
            res.status(400).json({error});
        }
     }

