// OOP function for the HIR details which takes three parameters ,name ,picture, his/her feedback and a function to create HIR objects.

function details() {
    hir = {};
    hir.name = '';
    hir.pic = '';
    hir.feedback = '';
    hir.create = create;
    return hir;
}

// create is a function to create an object for each HIR.

var create = function(name,pic,feedback) {
    this.name = name;
    this.pic = pic;
    this.feedback = feedback;
}

// array of HIR names .

var hirName = ['Ahmad','Besslan',"Fatima",'joza','Sahar','Tal','tamara','Zainab','sarah','kelsey'] ;


// creating an object for each HIR using create function to keep his details.

var Ahmad = details();
Ahmad.create('Ahmad','ahmad_pic.png','Ahmad_Abu _Aqlain.PNG');
var Besslan = details();
Besslan.create('Besslan','besslan_pic.png','besslan.png');
var Fatima = details();
Fatima.create('Fatima','fatema_pic.png','fatima.png');
var joza = details();
joza.create('joza','JOZa_pic.png','JOZa.png');
var Sahar = details();
Sahar.create('Sahar','sahar_pic.png','sahar.png');
var Tal = details();
Tal.create('Tal','tal_pic.png','tal.png');
var tamara = details();
tamara.create('tamara','tamara_pic.png','tamara.png');
var Zainab = details();
Zainab.create('Zainab','Zainab_pic.png','zainab.png');
var sarah = details();
sarah.create('sarah','sarah_pic.png','sarah.png');
var kelsey = details();
kelsey.create('kelsey','kelsey_pic.png','kelsey.png');


// creating an object for each HIR using create function to keep his details.

detailsArray = [Ahmad,Besslan,Fatima,joza,Sahar,Tal,tamara,Zainab,sarah,kelsey];



// this function is using recursion to run through the array "detailsArray" every five seconds.

 curIndex = 0;
        imgDuration = 5000;

    function slideShow() {
        document.getElementById('h1').innerHTML = detailsArray[curIndex].name;
        document.getElementById('pic').src = detailsArray[curIndex].pic;
        document.getElementById('feedback').src = detailsArray[curIndex].feedback;
        curIndex++;
        if (curIndex == detailsArray.length) { curIndex = 0; }
        setTimeout("slideShow()", imgDuration);
    }

    slideShow();

