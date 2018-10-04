

// OOP function for the students details which takes three parameters ,name ,picture, his/her feedback and a function to create students objects.
function details() {
  std = {};
  std.name = '';
  std.pic = '';
  std.feedback = '';
  std.create = create;
  return std;
}

// create is a function to create an object for each student.

var create = function(name, pic, feedback) {
this.name = name;
this.pic = pic;
this.feedback = feedback;

}

// array of students names .
var stdName = ['Abubaker_Saeed', 'Akram_A_mosaqi', 'Amjad_Hasnawi','Ashraf_Hasan' , 'ashraf_jebril', 'Batool_lissa',
' Dalia_Khammash', 'Esraa_Zaitoun', 'Firas_alkafaween', 'Ghadeer_alkhataybeh', 'Ghazi_Majali',  'Hamza_Eleimat',
  'hamza_sawalka', 'Haya_freij' ,'Issa_Anagreh', 'Mahmoud', 'Mahmoud_eid', 'Maram_Dorea',   'Mohammad_Rawashdeh',
  'Mohammad_omar', 'Mohannad_Al_Musa', 'Qusay_Albawareed', 'Radwan_Abdoh' , 'Walaa_Alshobaki', 'Waleed_Assaf', 
  'walid_dalabeah', 'Yahye_Family', 'Yazeed_Hammad', 'Zaid_Radad']

// creating an object for each student using create function to keep his details.

var Abubaker_Saeed = details();
Abubaker_Saeed.create('Abubaker Saeed','1.png','Abu_baker.PNG');

var Akram_A_mosaqi = details();
Akram_A_mosaqi.create('Akram Al-mosaqi','2.png','Akram_kamil.png');

var Amjad_Hasnawi = details();
Amjad_Hasnawi.create('Amjad Hasnawi','3.png','Amjad_hisnawi.png');

var Ashraf_Hasan = details();
Ashraf_Hasan.create('Ashraf Hasan','4.png','Ashraf_Hasan.png');

var ashraf_jebril = details();
ashraf_jebril.create('Ashraf Jebril','5.png','Ashraf_jebril.png');

var Batool_lissa = details();
Batool_lissa.create('Batool Alissa','6.jpg','Batool.png');

var Dalia_Khammash = details();
Dalia_Khammash.create('Dalia Khammash','7.jpg','Dalia.png');

var Esraa_Zaitoun = details();
Esraa_Zaitoun.create('Esraa Zaitoun','8.jpg','Essra.png');

var Firas_alkafaween = details();
Firas_alkafaween.create('Firas alkafaween','9.png','Firas_kafaween.png');

var Ghadeer_alkhataybeh = details();
Ghadeer_alkhataybeh.create('Ghadeer alkhataybeh','10.jpg','ghadeer.png');

var Ghazi_Majali = details();
Ghazi_Majali.create('Ghazi Majali','11.png','ghazi.png');

var Hamza_Eleimat = details();
Hamza_Eleimat.create('Hamza Eleimat','12.jpg','hamza_eleimat.png');

var hamza_sawalka = details();
hamza_sawalka.create('hamza_sawalka','13.png','hamza_sawlka.png');

var Haya_freij = details();
Haya_freij.create('Haya freij','14.png','Haya.png');

var Issa_Anagreh = details();
Issa_Anagreh.create('Issa Anagreh','15.jpg','Issa.png');

var Mahmoud= details();
Mahmoud.create('Mahmoud Khudairi','16.jpg','mahmoud.png');

var mahmoud_zaid= details();
mahmoud_zaid.create('Mahmoud zaid','17.png','mahmoud_zaid.png'); 

var Maram_Dorea = details();
Maram_Dorea.create('Maram Dorea','18.png','maram.png');

var Mohammad_Rawashdeh = details();
Mohammad_Rawashdeh.create('Mohammad Rawashdeh','19.png','Mohammad_Al_Rawashdah.png');

var Mohammad_omar = details();
Mohammad_omar.create('Mohammad omar','20.png','mohammadd_omar.png');

var Mohannad_Al_Musa = details();
Mohannad_Al_Musa.create('Mohannad Al Musa','21.png','mohannad_Bahaa.png');

var Qusay_Albawareed = details();
Qusay_Albawareed.create('Qusay Albawareed','22.png','qusay.png');

var Radwan_Abdoh = details();
Radwan_Abdoh.create('Radwan_Abdoh','23.png','radwan.png');

var Walaa_Alshobaki = details();
Walaa_Alshobaki.create('Walaa_Alshobaki','24.png','wala.png');

var Waleed_Assaf = details();
Waleed_Assaf.create('Waleed_Assaf','25.png','waleed_assaf.png');

var walid_dalabeah = details();
walid_dalabeah.create('walid_dalabeah','26.jpg','walid_khalid.png');

var Yahye_Family = details();
Yahye_Family.create('Yahye_Family','27.png','Yahye_Farah.png');

var Yazeed_Hammad = details();
Yazeed_Hammad.create('Yazeed_Hammad','Yazeed_Hammad_pic.jpg','yazeed.png');

var Zaid_Radad = details();
Zaid_Radad.create('Zaid_Radad','28.png','zaid.png');

// this is ana array of objects for all the students full details.
detailsArray = [Abubaker_Saeed, Akram_A_mosaqi, Amjad_Hasnawi, Ashraf_Hasan, ashraf_jebril, Batool_lissa,
Dalia_Khammash, Esraa_Zaitoun, Firas_alkafaween, Ghadeer_alkhataybeh, Ghazi_Majali, Hamza_Eleimat, hamza_sawalka,
Haya_freij, Issa_Anagreh, Mahmoud, mahmoud_zaid, Maram_Dorea ,Mohammad_Rawashdeh, Mohammad_omar,Mohannad_Al_Musa,
Qusay_Albawareed, Radwan_Abdoh, Walaa_Alshobaki, Waleed_Assaf, walid_dalabeah, Yahye_Family, Yazeed_Hammad, Zaid_Radad];


// this function is using recursion to run through the array "detailsArray" every five seconds.
 curIndex = 0;
        imgDuration = 5000;


    function slideShow() {
        document.getElementById('h1').innerHTML = detailsArray[curIndex].name; //
        document.getElementById('pic').src = detailsArray[curIndex].pic;
        document.getElementById('feedback').src = detailsArray[curIndex].feedback;
        curIndex++;
        if (curIndex == detailsArray.length) { curIndex = 0; }
        setTimeout("slideShow()", imgDuration);
    }
    slideShow();

