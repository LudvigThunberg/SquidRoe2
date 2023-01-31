import { DataBase } from '../models/databaseModels';
import { Firebase } from '../services/firebaseServices';

export const db: DataBase = new Firebase();
