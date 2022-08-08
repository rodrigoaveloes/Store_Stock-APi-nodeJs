import {Request, Response} from 'express';
import { Product } from '../models/product';

    
    export const createProduct =  async (req: Request, res: Response) => {
       let {name, description, price, image, color, category} = req.body

        let newProduct = await Product.create({name, description, price, image, color, category})
        res.status(201);
        res.json({id: newProduct.id, name, description, price, image, color, category});
    };


    export const allProducts = async (req: Request, res: Response) => {

        let products = await Product.findAll()
        console.log(products)
        res.json(products);
    }
    
    export const getProduct = async (req: Request, res: Response) => {
        let {id} =  req.params
        let product = await Product.findByPk(id)
        if(product) {
            res.json({product})
        } else{
            res.json({error: "Produto não encontrado"})
        }
    }

    export const updateProduct = async (req: Request, res: Response) => {
        let {id} = req.params
        let {name, description, price, image, color, category} = req.body
         let product = await Product.findByPk(id)
         if(product){
            product.name = name,
            product.description = description,
            product.price = price,
            product.image = image,
            product.color = color,
            product.category = category,
            

            await product.save()
            res.json({product})
            

         }else{
            res.json({error: "Produto não encontrado"})
         }
    }

    export const deleteProduct = async (req: Request, res: Response) => {
        let {id} = req.params;
        await Product.destroy({where: {id: id}})
        res.json({})
        

    }