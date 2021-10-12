const User=require('../models/User')

insertUser=(req,res)=>{
    const body=req.body


const u=new User(body) 

u.save().then(() => {
    return res.status(200).json({
        success: true,
        
        message: 'Registration success!',
    })
})
.catch(error => {
    return res.status(404).json({
        error,
        message: ' Fail to registration!',
    })
})

}

getUser = async (req, res) => {
    await User.find({}, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!user.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

   module.exports ={insertUser , getUser }


    

