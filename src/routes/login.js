import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("login");
});

router.post("/", (req, res) => {
    const { name } = req.body;
    console.log(name);
    req.session.name = name;
    res.redirect("/");
});


export default router;