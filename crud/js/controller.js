app.controller("myctrl",($scope,myfactory)=>{
	$scope.countAll = 0;
	var taskId =0;
	$scope.disableButtons = false;
	$scope.selected = false;
	$scope.addRecord=()=>{
		//console.log("name "+$scope.name+" description "+$scope.desc);
	myfactory.addTask($scope.name,$scope.desc);
		console.log(myfactory.taskArray);
		$scope.tasks=myfactory.taskArray;		
		updateCount();
	}
	$scope.showMarking=(task)=>{
		task.toggle();
		updateCount();
		task.markforedit= false ;
	}
	$scope.edit=(task)=>{
		$scope.name = task.name;
		$scope.desc = task.desc;
		taskId= task.id;
		task.markforedit= !task.markforedit ;
		task.markfordeletion = false;
		$scope.disableButtons = true;
	}
	function updateCount(){
	$scope.countAll=myfactory.taskArray.length;
	$scope.countMarkOnly = myfactory.markRecords();	
	$scope.countUnMark = myfactory.unmarkRecords();	
	}

})