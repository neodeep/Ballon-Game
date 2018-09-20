

var circle : GameObject; 
var clone : GameObject;
var clone2 : GameObject;
//var tempCard:GameObject;
var Hiz  =ibg3.hiz;
 var secondf : float;
 var secondt : float;
 var  isCreated:boolean=false;
var minScale :float=7.0f;
var maxScale:float=13.0f;
var start:boolean=true;

var oldSecond: int;
var  nextActionTime:float = 0.0f;
var  period :float= 0.5f;
var cn;

function Start () {
// GameObject[] CardClones = new GameObject[52];
 
  
  Hiz  =ibg3.hiz;
   //generateCoordinates();

   if( ibg3.livesNumber > 0){
     
  
   InvokeRepeating("generateCoordinates", ibg3.l, 10000.0f);
 

    
     // secondf=0;
  }
 
    
 	circle = GameObject.Find("circle");

  // generateCoordinates();

  

}





function Update () {  

   
    // second +=1;
    start=true;


    // secondf+=Time.deltaTime;




    	/* if(secondf>15.0f){
    
    	 l=l-((l*10)/100);
    	 secondf=0f;
    
          }*/


        
      // if (second != oldSecond) {

      
     // Debug.Log("ibg  " +second + "  " + oldSecond);
      //  oldSecond = second;

  /*if (Time.time > nextActionTime ) {
        nextActionTime = Time.time+period;

        
 
    if( ibg3.livesNumber > 0){
     
   generateCoordinates(); 

 

    
     // secondf=0;
  }

  }
   /*if(circle.transform.position.y < -7.388 && ibg3.livesNumber == 0){
        Destroy(GameObject.Find("circle"));
 
        gameOver();    
    }
    */


       
  
    


  
     
}






function gameOver(){	
	Application.LoadLevel("GameOver");
}


function generateX(){
    var x = Random.Range(-7.2,7.2);
    return x;
   
}

//Generates random y
function generateY(){
    var y = Random.Range(-1.0,7.0);
    return y;
}

function generateCoordinates(){


//var clone : GameObject;
 //GameObject newCard = Instantiate (Cards [i], new Vector3 (xVal, yVal, zVal), transform.rotation)
 if(start){
    clone =Instantiate(circle);
     isCreated=true;
	clone.transform.position.x = generateX();
    clone.transform.position.y = generateY();

    clone.transform.localScale=Vector3.one * Random.Range(minScale, maxScale);
    clone.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0),Random.Range(0.0,1.0));

   ibg3.livesNumber =ibg3.livesNumber- 1;
   start =false;
  }else {
  clone2 =Instantiate(circle);
     isCreated=true;
	clone2.transform.position.x = generateX();
    clone2.transform.position.y = generateY();

    clone2.transform.localScale=Vector3.one * Random.Range(minScale, maxScale);
    clone2.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0),Random.Range(0.0,1.0));

   ibg3.livesNumber =ibg3.livesNumber- 1;
    start =true;
    }


    }


function generateCoordinates1(){
   
  
   //GetComponent.enabled = ! GetComponent.enabled;
  // GetComponent.transform.enabled=false;


    //GetComponent.
   //GetComponent.<Renderer>().enabled=false;
  
   
  /* GameObject tempCard = CardClone[handOne];
 CardClone[handOne] = null;
 Destroy(tempCard);
   */
   // Destroy(clone.gameObject);


 //  if(GetComponent.<Renderer>().gameObject==circle.GetComponent.<Renderer>()){
    GetComponent.<Renderer>().enabled=false;
           Destroy(GetComponent.<Renderer>().gameObject,0.71235648); 
      
        // }
            
}






function OnMouseDown(){


 
             // Destroy(GetComponent.<Renderer>().gameObject,ibg3.l-0.7);   

generateCoordinates1();
         

               
  if(ibg3.livesNumber!=0){

 ibg3.scoreNumber += 1;
 }

 if(ibg3.livesNumber<10&&ibg3.livesNumber!=0){
 ibg3.livesNumber =ibg3.livesNumber+1;
 }

}




