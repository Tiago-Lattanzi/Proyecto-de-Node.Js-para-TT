import jwt from 'jsonwebtoken';

// Usuario simulado para cumplir la consigna sin necesidad de base de datos extra
const MOCK_USER = {
    email: 'admin@tienda.com',
    password: 'password123'
};

export const login = (req, res) => {
    const { email, password } = req.body;

    // Verificamos si las credenciales coinciden
    if (email === MOCK_USER.email && password === MOCK_USER.password) {
        // Genera el token usando el secreto de .env
        const token = jwt.sign(
            { email: MOCK_USER.email, role: 'admin' }, 
            process.env.JWT_SECRET, 
            { expiresIn: '2h' } // El token caduca en 2 horas
        );
        return res.status(200).json({ token: `Bearer ${token}` });
    }

    // Si fallan las credenciales, devolvemos error 401 (Unauthorized)
    return res.status(401).json({ error: 'Credenciales inválidas (401)' }); 
};