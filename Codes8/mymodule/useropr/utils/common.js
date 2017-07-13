var validationObject = {
 isBlank:(str)=>{
	return str.trim().length>0?false:true;
}
}
module.exports =validationObject; 