function check(){
	var r = confirm("Are you sure you have completed the test?");
	if(r==true){
	var rlen = document.querySelectorAll('.r[type="checkbox"]:checked').length;
	var ilen = document.querySelectorAll('.i[type="checkbox"]:checked').length;
	var alen = document.querySelectorAll('.a[type="checkbox"]:checked').length;
	var slen = document.querySelectorAll('.s[type="checkbox"]:checked').length;
	var elen = document.querySelectorAll('.e[type="checkbox"]:checked').length;
	var clen = document.querySelectorAll('.c[type="checkbox"]:checked').length;
	
	var codes = {};
	codes["R"] = rlen;
	codes["I"] = ilen;
	codes["A"] = alen;
	codes["S"] = slen;
	codes["E"] = elen;
	codes["C"] = clen;

	var sortable = [];
	for(var code in codes)
		sortable.push([code, codes[code]]);
	sortable.sort(function(a,b){return a[1]-b[1]});
	//in Ascending order- [["R",0],["I",4],...]   .

	/*Above Algo. 
	From  http://stackoverflow.com/questions/1069666/sorting-javascript-object-by-property-value
		var maxSpeed = {car:300, bike:60, motorbike:200, airplane:1000,
		    helicopter:400, rocket:8*60*60}
		var sortable = [];
		for (var vehicle in maxSpeed)
		      sortable.push([vehicle, maxSpeed[vehicle]])
		sortable.sort(function(a, b) {return a[1] - b[1]})
		//[["bike", 60], ["motorbike", 200], ["car", 300],
		//["helicopter", 400], ["airplane", 1000], ["rocket", 28800]]
	*/
	var categs = {"R":"Realistic", "I":"Investigative", "A":"Artistic", "S":"Social", 
	"E":"Enterprising", "C":"Conventional"};

	alert("Your Interest Profile is: "+sortable[5][0]+" "+sortable[4][0]+" "+sortable[3][0]
		+"\n\n"+"Group(Score): \n\n"+
		categs[sortable[5][0]]+"("+sortable[5][1]+"),\n"+categs[sortable[4][0]]+"("+sortable[4][1]+"),\n"+categs[sortable[3][0]]+"("+sortable[3][1]+")\n\n");


	}else{
		return r;	//which would be 'false'
	}
}
function resetForm(){
	document.getElementById("mainForm").reset();
}