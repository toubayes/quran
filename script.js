class Radio_Dz {
    constructor() {
        // getn  height
this.heightRectangle = document.querySelector(".rectangle");
        this.heightRectangle.style.height = screen.height + "px";
        //   get width
    
        var heightcontrols = document.querySelector(".controls");
        
        heightcontrols.style.height = screen.height + "px";
        // variable
        this.name_song=document.querySelector(".name");
        this.song=document.querySelector(".head-title");
        this.next=document.querySelector(".nextimg");
         this.play=document.querySelector(".playimg");
        this.back=document.querySelector(".backimg");
        this.audiosource= document.querySelector(".source");
        this.isplayed;
        this.nameaudio=[];
        this.audiovalue=[];
        this.counter=0;

        // image selection
        this.image=document.querySelector(".logoimg");

        // select volume  size + speed 
        var volume=document.querySelector(".size-volume");
     
        this.speed=document.querySelector(".speed-volume");

        // select buutos color 
        this.btn1=document.querySelector(".grreen");
        this.btn2=document.querySelector(".blue");
        this.btn3=document.querySelector(".red");
         this.btn4=document.querySelector(".yellow");
        this.btn5=document.querySelector(".black");
        this.btn6= document.querySelector(".silver");

        // change event 
        this.speed.addEventListener("change",()=>{
             this.audiosource.playbackRate = this.speed.value / 100;
        });
           this.audiosource.volume=50/100;
        volume.addEventListener("change",()=>{
            console.log(this.audio_file.volume = volume.value / 100 );
        });

        // click event 
        this.play.addEventListener("click",() =>{
            this.play_pause_music();
        });
        this.next.addEventListener("click",() =>{
         if (this.counter < this.nameaudio.length - 1) {
                ++this.counter;
                this.isplayed =false;
            }else{
                this.counter = 0;
            }
            this.betweenmusic();
       
        });
        this.back.addEventListener("click",() =>{
            if (this.counter >0 ) {
                --this.counter;
                this.isplayed =false;
            }else{
                this.counter=this.nameaudio.length - 1
            }
            this.betweenmusic();
       
        });

        // click event color 
        this.btn1.addEventListener("click",()=>{
            this.get_color_methode("grreen");
        });
        this.btn2.addEventListener("click",()=>{
            this.get_color_methode("blue");
        });
        this.btn3.addEventListener("click",()=>{
            this.get_color_methode("red");
        });
        this.btn4.addEventListener("click",()=>{
            this.get_color_methode("yellow");
        });
        this.btn6.addEventListener("click",()=>{
            this.get_color_methode("silver");
        });
        this.btn5.addEventListener("click",()=>{
            this.get_color_methode("black");
        });
      
        // list of music  name 
        this.nameaudio[0]="sourat-al-nas"; 
        this.nameaudio[1]="sourat-al-falaq";
        this.nameaudio[2]="sourat-al-ikhlas";
        this.nameaudio[3]="sourat-al-massad";
        this.nameaudio[4]="sourat-al-nasr";
        this.nameaudio[5]="sourat-al-kafiroun";
        this.nameaudio[6]="sourat-al-kawther";
        this.nameaudio[7]="sourat-al-ma oun";
        this.nameaudio[8]="sourat-al-qurayech";
    
        // list of music audio 
        this.audiovalue[0]="audio/sourat-al-nas.mp3";
        this.audiovalue[1]="audio/sourat-al-falq.mp3";
        this.audiovalue[2]="audio/sourat_el_ikhlas.mp3";
        this.audiovalue[3]="audio/sourat-al-massad.mp3";
        this.audiovalue[4]="audio/sourat-al-nasr.mp3";
        this.audiovalue[5]="audio/sourat-al-kafiron.mp3";
        this.audiovalue[6]="audio/sourat-al-kawther.mp3";
        this.audiovalue[7]="audio/sourat-al-ma on.mp3";
        this.audiovalue[8]="audio/sourat-qurayech.mp3";
  
        this.song.innerHTML="el Quraan el karim";
    }
    // move between music methodes 
    betweenmusic(){
        this.audiosource.src=this.audiovalue[this.counter];
        this.name_song.innerHTML=this.nameaudio[this.counter];
        this.play_pause_music();
    }
    // play pause music methodes
    play_pause_music(){
        if(this.isplayed ==false){
            this.audiosource.play();
            this.play.src="img/pause.png";
            this.image.classList.add("start-animation");
            this.isplayed=true;
        }else{
            this.audiosource.pause();
            this.play.src="img/play.png";
            this.image.classList.remove("start-animation");
            this.isplayed=false;
        }
    }
    // get color method 
    get_color_methode(color){
        switch (color) {
            case "grreen":
                this.heightRectangle.style.background ="#009688"; 
                console.log("its grren color");         
             break;
             case "blue":
                this.heightRectangle.style.background="#ff5353" ; 
                console.log("its blue color");         
             break;
             case "red":
                this.heightRectangle.style.background="#967000" ; 
                console.log("its red color");         
             break;
             case "yellow":
                this.heightRectangle.style.background="#009688" ; 
                console.log("its yellow color");         
             break;
             case "silver":
                this.heightRectangle.style.background="#222a4c";
                this.name_song.style.color="white";
                this.song.style.color="white";
                console.log("its silver color");         
             break;
             case "black":
                this.heightRectangle.style.background="#212020" ; 
                this.name_song.style.color="white";
                this.song.style.color="white";
                console.log("its black color");         
             break;
            default:
                
        }
     
    }
}
onload = new Radio_Dz();