import * as dotenv from "dotenv";
import * as readline from "readline";

dotenv.config();

const tokenGit = process.env['GIT_TOKEN'];
const addString = process.env['CONCAT'];

console.log("Les deux var ensemble :", tokenGit, addString);
console.log("Type de tokenGit : ", typeof(tokenGit))

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface Project {

    nameProject: string,
    urlProject: string,
    typeProject: string,
    get(): string

};

function setProject(nameP: void, urlP: void, typeP: void) {

    let project = {

        nameProject: nameP,
        urlProject: urlP,
        typeProject: typeP,
        get: function(){
            return "ProjectName :" + this.nameProject + "\nURLProject :" + this.urlProject + "\nTypeProject :" + this.typeProject;
        }
    }
    return project;
};

function getProject(project: Project){
    return project.get();
}

class setChoices {

    public getProjectName() {
        const answer = rl.question("Name of the Project >>> ", function(inputNameProject) {
            //console.log(inputNameProject);
            rl.close();
        }); 
        return answer;
    }

    public getProjectURL() {
        const answer = rl.question("URL of the Project >>> ", function(inputNameProject) {
            //console.log(inputNameProject);
            rl.close();
        }); 
        return answer;
    }

    public getProjectType() {
        const answer = rl.question("Type of the Project >>> ", function(inputNameProject) {
            //console.log(inputNameProject);
            rl.close();
        }); 
        return answer;
    }

}

function main(){

    const getProjectData =  new setChoices();

    const projectName = getProjectData.getProjectName();
    const projectURL = getProjectData.getProjectURL();
    const projectType = getProjectData.getProjectType();

    getProject(setProject(projectName, projectURL, projectType));

}