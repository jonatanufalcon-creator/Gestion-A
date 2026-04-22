import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User'; // Adjust the path according to your project structure

const authMiddleware = (roles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized access. Token not found.' });
        }

        try {
            const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.id); // Assuming you have a User model to find the user

            if (!user) {
                return res.status(404).json({ message: 'User not found.' });
            }

            // Check roles
            if (roles.length && !roles.includes(user.role)) {
                return res.status(403).json({ message: 'Forbidden. You do not have the right permissions.' });
            }

            req.user = user; // Attach user to the request object
            next();

        } catch (error) {
            return res.status(401).json({ message: 'Unauthorized access. Invalid token.' });
        }
    };
};

export default authMiddleware;