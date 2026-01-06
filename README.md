### Steps At A Glance
1. Create a simple folder in the explorer
2. Run "npm init -y"
3. Remove "type": "commonjs" from package.json
4. Add this line in package.json     "dev" : "tsx watch ./src/server.ts",
5. Run "npm install typescript express"
6. Add to Dev Dependency . Run "npm install -D tsx @types/express"
7. To get the config file for ts Run "tsc --init"

8. In the tsconfig.json file : Uncomment the rootDir and Outdir lines.
9. Replace "module": "nodenext",
    "target": "esnext",
    "types": [], with "module": "esnext",
    "target": "esnext",
    "moduleResolution": "bundler",
    "types": ["node"],


10. Comment Other Outputs Section
11. Make this like : "verbatimModuleSyntax": false, 
Or, Comment this line as it was.

12. Add this body parser : 
```bash
app.use(express.json());
```
13. Create a folder named "src" and make a new file named "server.ts"
14. Create this root route
```bash
app.get("/", (req :Request , res: Response)=>{
    res.status(200).json({
        message: "This is the root route",
        path: req.path,
    })
})
```

15. Basic Server.ts file should look like this: 
```bash
import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.listen(5000, ()=>{
    console.log(`Server is running on port 5000`);
})
```