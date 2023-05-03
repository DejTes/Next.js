import {getDogs, createDog, updateDog, destroyDog} from '@/utils/actions';

export default async function handler(req, res) {
    try {
        // Index route
        if (req.method === 'GET') res.json(getDogs());

        // Create route
        if (req.method === 'POST') res.json(createDog(req.body) ? getDogs() : {error: 'Dog not created'});
    

    // Anything else
    if (![ 'GET', 'POST' ].includes(req.method)) res.status(404).json({error: `${req.method} method not allowed`});
    
} catch (error) {
    res.status(400).json({error});
}
}
