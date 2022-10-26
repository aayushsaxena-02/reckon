const express = require('express');
const User = require('../model/userSchema');
const Job = require('../model/jobSchema');
const Company = require('../model/companySchema');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
router.use(cookieParser());


router.post('/login',async (req,res) => {

    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:"Invalid credentials"});
        }

        const userLogin = await User.findOne({email:email});

        const token = await userLogin.generateAuthToken();

        res.cookie("jwtoken",token),{
            expires: new Date(Date.now() + 258920000),
            httpOnly:true
        };

        // if(userLogin){
        //     const isMatched = await bcrypt.compare(password,userLogin.password);

        //     if(!isMatched){
        //         return res.status(400).json({error:"invalid"});
        //     }else{
        //         res.json("successfull");
        //     }
        // }else{
        //     return res.status(400).json({error:"invalid"});
        // }

        if(!userLogin){
            res.json({error:"wrong credentials"});
        }else{
            if(password == userLogin.password){
                res.json("logged in");
            }else{
                res.json("wrong credentials");
            }
        }


    }catch(err) {
        console.log(err);
    }
    
});




router.post('/register',(req,res) => {
    
    const {name,email,phone,specialization,password,cpassword} = req.body;
    
    if(!name || !email || !phone || !specialization || !password || !cpassword){
        return res.status(422).json({error:"fill data correctly"});
    }

    User.findOne({email:email})
        .then((userExist) => {
            if(userExist){
                return res.status(422).json("user exist");
            }

            const user = new User({
                name:name,
                email:email,
                phone:phone,
                specialization:specialization,
                password:password,
                cpassword:cpassword
            });

            user.save().then(() => {
                res.status(201).json({message:"user registered successfully"});
            }).catch((err) => {
                res.status(500).json({message:"user registeration failed"});
            })

        }).catch((err) => { console.log(err)});

    

});

router.get('/profile',authenticate,(req,res) => {
    res.send(req.rootUser);
});

router.post('/apply',async(req,res) => {
    try{
        const {name,companyName,resume} = req.body;
        

        if(!name || !companyName || !resume){
            return res.status(422).json({error:"Fill data"});
        }

        const job = new Job({
            name:name,
            companyName:companyName,
            resume:resume
        });        

        job.save().then(() => {
            res.status(201).json({message:"Application Successfull"});
        }).catch((err) => {
            res.status(500).json({message:"Application failed"});
        })

    }catch (err){
        console.log(err);
    }
});

router.get('/apply',authenticate,(req,res) => {
    res.send(req.rootUser);
});

router.get('/admin',(req,res) => {
    Job.find({},function (err,jobs){
        if(err){
            console.log(err);
        }else{
            res.send(jobs);
        }
    });
});

router.get('/postJob',(req,res) => {
    Company.find({},function (err,companies){
        if(err){
            console.log(err);
        }else{
            res.send(companies);
        }
    });
});

router.post('/postJob',(req,res) => {

    try{
        const {companyName,work,location,salary} = req.body;

        if(!companyName || !work || !location || !salary){
            return res.status(400).json({error:"Fill data"});
        }

        const company = new Company({
            companyName:companyName,
            work:work,
            location:location,
            salary:salary
        });        

        company.save().then(() => {
            res.status(201).json({message:"Company registered"});
        }).catch((err) => {
            res.status(500).json({message:"registration failed"});
        })        

    }catch (err){
        console.log("hi");
    }
   
});

router.post('/admin/login',async (req,res) => {

    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:"Invalid credentials"});
        }

        if(email === "admin" && password === "123"){
            return res.json({message:"user login successfully"});
        }else{
            return res.status(400).json({error:"Invalid credentials"});
        }


    }catch(err) {
        console.log(err);
    }
    
});

router.get('/logout',(req,res) => {
   res.clearCookie('jwtoken',{path:'/'});
   res.status(200).send('user logout'); 
});

module.exports = router;