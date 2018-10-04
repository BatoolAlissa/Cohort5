function details(){
	hir={};
	hir.name='';
	hir.pic='';
	hir.feedback='';
	hir.create=create;
	return hir;
}

var create=function(name,pic,feedback){
this.name=name;
this.pic=pic;
this.feedback=feedback;

}


var hirName=['Ahmad','Besslan',"Fatima",'joza','Sahar','Tal','tamara','Zainab','sarah','kelsey']

var Ahmad= details();
Ahmad.create('Ahmad','1.jpg','Ahmad_Abu _Aqlain.PNG');
var Besslan= details();
Besslan.create('Besslan','2.jpg','besslan.png');
var Fatima= details();
Fatima.create('Fatima','3.jpg','fatima.png');
var joza= details();
joza.create('joza','4.jpg','JOZa.png');
var Sahar= details();
Sahar.create('Sahar','5.jpg','sahar.png');
var Tal= details();
Tal.create('Tal','6.jpg','tal.png');
var tamara= details();
tamara.create('tamara','7.jpg','tamara.png');
var Zainab= details();
Zainab.create('Zainab','8.jpg','zainab.png');
var sarah= details();
sarah.create('sarah','8.jpg','sarah.png');
var kelsey= details();
kelsey.create('kelsey','8.jpg','kelsey.png');


detailsArray=[Ahmad,Besslan,Fatima,joza,Sahar,Tal,tamara,Zainab,sarah,kelsey];

 curIndex = 0;
        imgDuration = 5000;

    function slideShow() {
        document.getElementById('h1').innerHTML=detailsArray[curIndex].name;
        document.getElementById('pic').src = detailsArray[curIndex].pic;
        document.getElementById('feedback').src = detailsArray[curIndex].feedback;
        curIndex++;
        if (curIndex == detailsArray.length) { curIndex = 0; }
        setTimeout("slideShow()", imgDuration);
    }
    slideShow();

// function next() {
// 	var name='';
// 	count++;
// 	for (var i=0; i<hirName.length; i++) {
// 		if(i==count){
// 			console.log(hirName[i] )
// 			name=hirName[i];
     		
//     	}
// 	}
	
// 	//console.log(name)
// 	getdetailse(name);

// }

// function getdetailse(name) {
// 	var nameT='';
// 	var picT='';
// 	var feedbackT='';
// 	for (var i =0; i <detailsArray.length; i++) {
// 		if (detailsArray[i].name===name) {
// 			nameT=detailsArray[i].name;
// 			picT=detailsArray[i].pic;
// 			feedbackT=detailsArray[i].feedback;
// 		}
// 	}
// 	show(nameT,picT,feedbackT);
// }

// function show(name,pic,feedback) {
// 	$('#h1').text(name);
// 	$('#pic').attr('src',pic);
// 	$('#feedback').attr('src',feedback);
	
// }