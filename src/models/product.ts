import { sequelize } from "../instances/mysql";
import {Model, DataTypes} from 'sequelize';


export interface ProductInstance extends Model{
    id: number;
    name: string;
    price: string;
    description: string;
    image: string; 
    color: string;
    category: string;    
}

export const Product = sequelize.define<ProductInstance>('products', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    color: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },


},{
        tableName: 'product',
        timestamps: false
    }
);