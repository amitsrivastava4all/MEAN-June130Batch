app.factory("myfactory",()=>{
	var object={
		taskArray:[],
		id:1,
		addTask(name,desc){
			var task=new Task(this.id,name,desc);
			this.taskArray.push(task);
		this.id++;
		},
		markRecords(){
			return this.taskArray.filter((taskObject)=>{
				return taskObject.markfordeletion ;
			}).length;
		},
		unmarkRecords(){
			return this.taskArray.filter((taskObject)=>{
				return taskObject.markfordeletion==false ;
			}).length;
		}
	}
	return object;
})
