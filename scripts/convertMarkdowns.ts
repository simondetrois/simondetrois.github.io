import { exec, execSync } from 'child_process';
import * as fs from 'fs';

const DIR_MD: string = "./public/markdowns";
const DIR_HTML: string = "./app/generated";

const createEmptyGeneratedDirIfNotExists = () => {
  if (fs.existsSync(DIR_HTML)) fs.rmSync(DIR_HTML, {recursive:true, force:true})
    fs.mkdirSync(DIR_HTML)
}

const createHtmlFile = (path: string, name: string) => {
  const htmlFilename = name.replace("md", "html") 
  const htmlFileContent = execSync(`npx markdown ${DIR_MD}/${path}/${name}`,  { encoding: 'utf-8' })
  fs.mkdirSync(`${DIR_HTML}/${path}`, {recursive: true})
  fs.writeFileSync(`${DIR_HTML}/${path}/${htmlFilename}`, htmlFileContent)
}

const convertMarkdownsToHtmlAndSave = () => {
  const files = fs.readdirSync(DIR_MD, { withFileTypes: true, recursive:  true });
  
  files.forEach(file => {
    if (file.isFile()){
      const path = file.parentPath.split("/").slice(2,file.parentPath.length-1 ).join()
      createHtmlFile(path, file.name)
      }
    }
  )
}

(async () => {
  createEmptyGeneratedDirIfNotExists()
  convertMarkdownsToHtmlAndSave()
})()

