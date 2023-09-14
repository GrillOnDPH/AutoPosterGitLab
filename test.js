"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var readline = require("readline");
dotenv.config();
var tokenGit = process.env['GIT_TOKEN'];
var addString = process.env['CONCAT'];
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function setChoices() {
    rl.question("Name of the Project >>> ", function (inputNameProject) {
        console.log(inputNameProject);
        rl.close();
    });
}
console.log("Les deux var ensemble :", tokenGit, addString);
console.log("Type de tokenGit : ", typeof (tokenGit));
;
function setProject(nameP, urlP, typeP) {
    var project = {
        nameProject: nameP,
        urlProject: urlP,
        typeProject: typeP,
        get: function () {
            return "ProjectName :" + this.nameProject + "\nURLProject :" + this.urlProject + "\nTypeProject :" + this.typeProject;
        }
    };
}
;
function getProject(project) {
    return project.get();
}
setChoices();
