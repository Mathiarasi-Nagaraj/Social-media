const userModel = require('../Models/userModel');
const bcrypt = require('bcrypt');
//update user
const update = async (req, res, next) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hashSync(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err)
            }
        }
        try {
            const user = await userModel.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
            res.status(200).json("user updateuser");
        } catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(500).json("you cannot update others account")
    }
}
const deleteOne = async (req, res, next) => {
    if (req.body.userId === req.params.id) {

        try {
            await userModel.findByIdAndDelete(req.params.id)
            res.status(200).json("user deleted");
        } catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(500).json("you cannot delete others account")
    }
}
const showAll = async (req, res, next) => {
    try {
        const users = await userModel.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(err)
    }
}
const showOne = async (req, res, next) => {
    const userId=req.query.userId;
    const username=req.query.username;
    console.log(username);
    try {
        const user = userId?await userModel.findById(userId): await userModel.findOne({username:username})
        const { password, updatedAt, __v, ...other } = user._doc
        res.status(200).json(other);
    } catch (err) {
        res.status(500).json(err)
    }

}
const follow = async (req, res, next) => {
    if (req.body.userId !== req.params.id) {

        try {
            const tofollow = await userModel.findById(req.params.id);
 
            const currentuser = await userModel.findById(req.body.userId);
            console.log(req.body.userId, " ", req.params.id," ",currentuser)
            if (!tofollow.followers.includes(req.body.userId)) {
                console.log(req.body.userId, " ", req.params.id)
                await tofollow.updateOne({ $push: { followers: req.body.userId } })
                await currentuser.updateOne({ $push: { followings: req.params.id } })
                res.status(200).json("followed");
            }
            else {
                console.log(req.body.userId, " ", req.params.id)
                res.status(403).json("already following");
            }
        } catch (err) {
            console.log(req.body.userId, " ", req.params.id)
            return res.status(500).json(err)
        }


    }
    else {
        res.status(500).json("you cannot follow your account")
    }
}
const unfollow = async (req, res, next) => {
    if (req.body.userId !== req.params.id) {

        try {
            const tounfollow = await userModel.findById(req.params.id);


            const currentuser = await userModel.findById(req.body.userId);
            console.log(currentuser)
            if (tounfollow.followers.includes(req.body.userId)) {
                await tounfollow.updateOne({ $pull: { followers: req.body.userId } })
                await currentuser.updateOne({ $pull: { followings: req.params.id } })
                res.status(200).json("unfollowed");
            }
            else {
                res.status(403).json("already unfollowing");
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json(err)
        }


    }
    else {
        res.status(500).json("you cannot unfollow your account")
    }
}
module.exports = { update, showAll, deleteOne, showOne, follow, unfollow }