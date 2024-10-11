import Employee from '../../../models/employee'; //  ../ - IT REPRESENTS UPPER FOLDER
import sequelize from '../../../db'; //  ../ - IT REPRESENTS UPPER FOLDER

export default async function handler(req, res) { //handler IS USED TO HANDLING API REQUEST
    if (req.method === 'POST') { //CHECKING THE METHOD MATCHES
        console.log('Received data:', req.body);
        const { name, email, contact } = req.body; // T CREATES THREE VARIABLES FROM THE REQUEST BODY AND STORES

        if (!name || !email || typeof contact !== 'number') { //THROWS ERROR IF ANY VALUE IS NOT PRESENT
            return res.status(400).json({ error: 'All fields required..!' });
        }
        
        try {

            console.log('INSIDE CREATE:', req.body);
            const newEmployee = await Employee.create({ name, email, contact }); // USED TO CREATE VALUES INTO TABLE WITH THE HELP OF EMPLOYEE MODEL
            res.status(201).json({ employee: newEmployee }); // RETURNS IF SUCCESS
        } catch (error) {
            console.error('Error creating employee:', error);
            res.status(500).json({ 'Error creating employee:': error });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
