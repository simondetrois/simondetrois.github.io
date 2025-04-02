import { exec, execSync } from 'child_process';
import * as fs from 'fs';

const DIR_MD: string = "./public/mds";
const DIR_HTML: string = "./app/generated";

const getCurrentHash = () => {
  const outputArray = execSync('npm run md:hash',  { encoding: 'utf-8' }).split("\n")
  return outputArray[outputArray.length-2]
}

const latestMarkdownsAlreadyExist = () => getCurrentHash() === fs.readFileSync("scripts/hash").toString()

const createEmptyGeneratedDirIfNotExists = () => {
  if (fs.existsSync(DIR_HTML)) fs.rmSync(DIR_HTML, {recursive:true, force:true})
    fs.mkdirSync(DIR_HTML)

}

(async () =>{
  if (latestMarkdownsAlreadyExist()){
    console.log("[INFO] Markdown files haven't changed")
    return
  } else {
    createEmptyGeneratedDirIfNotExists()
  }
 
  const files = fs.readdirSync(DIR_MD, { withFileTypes: true, recursive:  true });
  files.forEach(file => {
    console.log(file.isFile() + " => " + file.name)
    
  
  }) 
})()

