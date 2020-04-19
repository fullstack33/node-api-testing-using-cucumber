const router = require("express").Router();
const User = require('../model/user');

router
  .route("/")
  .get(async (req, res) => {
    const data = await User.find({})
    res.send(data);
  })
  .post((req, res) => {
    user = new User({
        name: req.body.name,
        email: req.body.email
    })

    user.save()
    res.json(user)
  });

router
    .route('/:id')
    .get(async (req, res) => {
        let id = req.params.id;
        let singleUser = await User.find({_id: id});
        res.json(singleUser)
    })
    .put(async (req, res)=> {
        let user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});

        res.send(user)
    })
    .delete(async (req, res) => {
        await User.findByIdAndDelete(req.params.id);
        res.send({message: "Deleted"})
    })


module.exports = router;
