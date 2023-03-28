import {getConnection} from "../database/database";

const getLanguages = async (req,res)=>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM languages");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }

};

const getLanguage = async (req,res)=>{
    try{
        const {id} =req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM languages WHERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }

};

const addLanguages = async (req,res)=>{
    try{
        const {name, programmers} = req.body;

        if(name===undefined || programmers=== undefined){
            res.status(400).json({message: "Bad request. Please fill all the fields."})
        }

        const languages = {name, programmers}
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO languages SET ?", languages);
        res.json({message: "Language added"});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }

};

const updateLanguage = async (req,res)=>{
    try{
        const {id} =req.params
        const {name, programmers} = req.body;
        if(id===undefined || name===undefined || programmers=== undefined){
            res.status(400).json({message: "Bad request. Please fill all the fields."})
        }
        
        const language = {id,name, programmers}
        const connection = await getConnection();
        const result = await connection.query("UPDATE languages SET ? WHERE id = ?", [language, id]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }

};

const deleteLanguage = async (req,res)=>{
    try{
        const {id} =req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM languages WHERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }

};


export const methods = {
    getLanguages,
    getLanguage,
    addLanguages,
    updateLanguage,
    deleteLanguage
};
