function details(){
	std={};
	std.name='';
	std.pic='';
	std.feedback='';
	std.create=create;
	return std;
}

var create=function(name,pic,feedback){
this.name=name;
this.pic=pic;
this.feedback=feedback;

}


var stdName=['Abubaker_Saeed', 'Akram_A_mosaqi', 'Amjad_Hasnawi','Ashraf_Hasan' , 'ashraf_jebril', 'Batool_lissa',
' Dalia_Khammash', 'Esraa_Zaitoun', 'Firas_alkafaween', 'Ghadeer_alkhataybeh', 'Ghazi_Majali',
 'Hamza_Eleimat', 'hamza_sawalka', 'Haya_freij' ,'Issa_Anagreh', 'Mahmoud', 'Mahmoud_eid', 'Maram_Dorea', 'Mohammad_Rawashdeh',
  'Mohammad_omar', 'Mohannad_Al_Musa', 'Qusay_Albawareed', 'Radwan_Abdoh' , 'Walaa_Alshobaki', 'Waleed_Assaf', 
  'walid_dalabeah', 'Yahye_Family', 'Yazeed_Hammad', 'Zaid_Radad']

var Abubaker_Saeed= details();
Abubaker_Saeed.create('Abubaker Saeed','1.jpg','Abu_baker.PNG');
var Akram_A_mosaqi= details();
Akram_A_mosaqi.create('Akram Al-mosaqi','2.jpg','Akram_kamil.png');
var Amjad_Hasnawi= details();
Amjad_Hasnawi.create('Amjad Hasnawi','3.jpg','Amjad_hisnawi.png');
var Ashraf_Hasan= details();
Ashraf_Hasan.create('Ashraf Hasan','4.jpg','Ashraf_Hasan.png');
var ashraf_jebril= details();
ashraf_jebril.create('Ashraf Jebril','5.jpg','Ashraf_jebril.png');
var Batool_lissa= details();
Batool_lissa.create('Batool Alissa','6.jpg','Batool.png');
var Dalia_Khammash= details();
Dalia_Khammash.create('Dalia Khammash','7.jpg','Dalia.png');
var Esraa_Zaitoun= details();
Esraa_Zaitoun.create('Esraa Zaitoun','8.jpg','Essra.png');
var Firas_alkafaween= details();
Firas_alkafaween.create('Firas alkafaween','8.jpg','Firas_kafaween.png');
var Ghadeer_alkhataybeh= details();
Ghadeer_alkhataybeh.create('Ghadeer alkhataybeh','8.jpg','ghadeer.png');
var Ghazi_Majali = details();
Ghazi_Majali.create('Ghazi Majali','8.jpg','ghazi.png');
var Hamza_Eleimat= details();
Hamza_Eleimat.create('Hamza Eleimat','8.jpg','hamza_eleimat.png');
var hamza_sawalka= details();
hamza_sawalka.create('hamza_sawalka','8.jpg','hamza_sawlka.png');
var Haya_freij= details();
Haya_freij.create('Haya freij','8.jpg','Haya.png');
var Issa_Anagreh= details();
Issa_Anagreh.create('Issa Anagreh','8.jpg','Issa.png');
var Mahmoud= details();
Mahmoud.create('Mahmoud Khudairi','8.jpg','mahmoud.png');
var mahmoud_zaid= details();
mahmoud_zaid.create('Mahmoud zaid','8.jpg','mahmoud_zaid.png');
var Maram_Dorea= details();
Maram_Dorea.create('Maram Dorea','8.jpg','maram.png');
var Mohammad_Rawashdeh= details();
Mohammad_Rawashdeh.create('Mohammad Rawashdeh','8.jpg','Mohammad_Al_Rawashdeh.png');
var Mohammad_omar= details();
Mohammad_omar.create('Mohammad omar','8.jpg','mohammadd_omar.png');
var Mohannad_Al_Musa= details();
Mohannad_Al_Musa.create('Mohannad Al Musa','8.jpg','mohannad_Bahaa.png');
var Qusay_Albawareed= details();
Qusay_Albawareed.create('Qusay Albawareed','8.jpg','qusay.png');
var Radwan_Abdoh= details();
Radwan_Abdoh.create('Radwan_Abdoh','8.jpg','radwan.png');
var Walaa_Alshobaki= details();
Walaa_Alshobaki.create('Walaa_Alshobaki','8.jpg','walaa.png');
var Waleed_Assaf= details();
Waleed_Assaf.create('Waleed_Assaf','8.jpg','waleed_assaf.png');
var walid_dalabeah= details();
walid_dalabeah.create('walid_dalabeah','8.jpg','walid_khalid.png');
var Yahye_Family= details();
Yahye_Family.create('Yahye_Family','8.jpg','Yahye_Farah.png');
var Yazeed_Hammad= details();
Yazeed_Hammad.create('Yazeed_Hammad','8.jpg','yazeed.png');
var Zaid_Radad= details();
Zaid_Radad.create('Zaid_Radad','8.jpg','zaid.png');


detailsArray=[Abubaker_Saeed,Akram_A_mosaqi,Amjad_Hasnawi,Ashraf_Hasan ,ashraf_jebril,Batool_lissa,
Dalia_Khammash,Esraa_Zaitoun,Firas_alkafaween,Ghadeer_alkhataybeh,Ghazi_Majali,Hamza_Eleimat,hamza_sawalka,Haya_freij,Issa_Anagreh,Mahmoud,mahmoud_zaid,Maram_Dorea,Mohammad_Rawashdeh,
Mohammad_omar,Mohannad_Al_Musa,Qusay_Albawareed,Radwan_Abdoh,Walaa_Alshobaki,Waleed_Assaf,walid_dalabeah,Yahye_Family,Yazeed_Hammad,Zaid_Radad];

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