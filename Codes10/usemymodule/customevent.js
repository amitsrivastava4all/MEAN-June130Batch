const ev = require("events");
// Create an eventEmitter object 
var eventEmitter = new ev.EventEmitter();

function dbConnectionOpen(){
	console.log("Connection Created...");
}
// Bind event and even handler as follows 
//openDoor();
eventEmitter.on('open', dbConnectionOpen);

// Fire an event 
eventEmitter.emit('open');
const fs = require("fs");
fs.readFile("/Volumes/AmitPassPort/SummerBatches-May/AdvJava9to11June/CollectionDay2.mov",function(err,content){
	if(content){
	console.log("Done....");
	}
	else{
		console.log("error");
	}
});
var s = 100;
var t = 200;
console.log("Sum is "+(s+t));