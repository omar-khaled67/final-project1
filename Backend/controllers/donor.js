const Donor=require("../models/Donor");

//create Donor
const createDonor= async (req,res)=>{
    try{
        const newDonor=Donor(req.body);
        const donor=await newDonor.save();
        res.status(201).json(donor);
    }catch(error){
        res.status(500).json(error);
    }
};

//get all donors
const getAlldonor=async(req,res)=>{
    try{
        const donors=await Donor.find().sort({createdAt:-1});
        res.status(200).json(donors);
    }catch(error){
        res.status(500).json(error);
    }
};

//update donors
const updateDonor=async(req,res)=>{
    try{
        const updateDonor=await Donor.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },
            {new:true}
        );
        res.status(201).json(updateDonor);
    }catch(error){
        res.status(500).json(error);
    }
};

//get one donor
const getOneDonor=async(req,res)=>{
    try{
        const donor = await Donor.findById(req.params.id);
        res.status(200).json(donor);
    }catch(error){
        res.status(500).json(error);
    }
};

//delete donor
const deleteDonor=async(req,res)=>{
    try{
        await Donor.findByIdAndDelete(req.params.id);
        res.status(201).json("Donor has been deleted");
    }catch(error){
        res.status(500).json(error);
    }
};

//stats 
const getDonorStats=async(req,res)=>{
    try{
        const stats = await Donor.aggregate([
            {
                $group: {
                    _id: "$bloodgroups",
                    count: { $sum: 1 },
                }
            }
        ]);
        res.status(200).json(stats);
    }catch(error){
        res.status(500).json(error);
    }
};

module.exports = {createDonor,getAlldonor,updateDonor,getOneDonor,deleteDonor,getDonorStats};