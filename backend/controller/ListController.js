import List from '../models/List.js'

export const getList=async(req,res)=>{
    try{
        const lists=await List.find()
        res.send(lists);
    }
    catch(error){
        res.status(500).send('Server Error');
    }
}
export const saveList = async (req, res) => {
    try {
        const { text } = req.body;
        const newList = await List.create({ text });
        res.status(201).send(newList);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
export const updateList=async(req,res)=>{
    const {_id,text}=req.body
    List.findByIdAndUpdate(_id,{text}).then(()=>
      res.send("Updated"))
    .catch(error=>
      res.status(404).send("List not found")
    )
}
export const deleteList=async(req,res)=>{
    const {_id}=req.body
    List.findByIdAndDelete(_id).then(()=>
        res.send("Deleted"))
    .catch(error=>
        res.status(404).send("List not found"))
        }
