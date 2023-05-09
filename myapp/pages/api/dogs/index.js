import {getDogs, createDog} from '@/utils/actions';

export default async function handler(req, res) {
    try {
        // Index route
        if (req.method === 'GET') res.json(await getDogs());

        // Create route
        if (req.method === 'POST')
            res.json
                (await createDog(req.body) ? await getDogs() : {error: 'Dog not created'});
    

    // Anything else
    if (![ 'GET', 'POST' ].includes(req.method)) res.status(404).json({error: `${req.method} method not allowed`});
    
} catch (error) {
    res.status(400).json({error});
}
}
