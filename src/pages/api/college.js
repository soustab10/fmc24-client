import datas from "./clg"
export default function handler(req, res) {
    if(req.method !== "POST"){
      
    // }
    // const domain=req.body;
    // res.status(200).json({ name: "emailCollegeMap[domain]" })
    // const domain = req.body.email
    // console.log(req.body)
    // const domain = req.body
    // console.log(domain)
    //want to extract after @ symbol
    // const email = req.body.email
    // const domain = email.split("@")[1]
    const x = req.body.email;
    const domain=  x.slice(x.indexOf('@') + 1);


    console.log(domain);
    const emailCollegeMap = {};

    datas.forEach((item) => {
        item.domains.map((e) => {
            emailCollegeMap[e] = item.name;
        })
    });
    // const emailToLookup = "iitbhu.ac.in";
    // console.log(emailCollegeMap[emailToLookup]);
    res.status(200).json({ college: emailCollegeMap[domain] })
}
}
