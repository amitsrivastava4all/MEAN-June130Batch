//function Task(id,name,desc,active="Y"){
//	this.id=id;
//	this.name=name;
//	this.desc=desc;
//	this.active=active;
//}
//ECMA NEW SYNTAX
class Task{
	constructor(id,name,desc,active="Y"){
		this.id=id;
		this.name=name;
		this.desc=desc;
		this.active=active;
		this.markfordeletion=false;
		this.markforedit=false;

	}
	toggle(){
		this.markfordeletion=!this.markfordeletion;
	}
}
	
