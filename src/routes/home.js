import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    if(req.session.name){
        res.render("home", { name: req.session.name });
    }else{
    res.redirect("/login");
    }
});



export default router;