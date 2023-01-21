import { connect } from 'mongoose';
import { MONGODB_URI } from './config';

(
    async () => {
        try {
            const db = await connect(MONGODB_URI);
            console.log("Connected to", db.connection.name, db.connection.host);
        } catch (e) {
            console.error(e);
        }
    }
)();
