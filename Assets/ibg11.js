

var circle : GameObject; 
var Hiz  =ibg3.hiz;
 var secondf : float;
 var second : int;
var minScale :float=7.0f;
var maxScale:float=20.0f;
public static var l : int=60;

function Start () {
   second=0;
  secondf=4.0f;
  Hiz  =ibg3.hiz;




 	circle = GameObject.Find("circle3");

    //generateCoordinates();

  

}


function Update () {  

    Debug.Log(l);
     second +=1;
     secondf+=Time.deltaTime;



    	 if(secondf>15.0f){
    
    	 l=l-((l*10)/100);
    	 secondf=0f;
    
          }
    if( second>=l){
 
   //generateCoordinates(); 
   var clone : GameObject;
            clone = Instantiate(circle);
  
    if(circle.transform.position.y < -7.388 && ibg3.livesNumber > 0 ){  

                 
        ibg3.livesNumber =ibg3.livesNumber- 1;
    
   
       
    }
    else if(circle.transform.position.y < -7.388 && ibg3.livesNumber == 0){
        Destroy(GameObject.Find("circle"));
  
        gameOver();    
    }
    else{    
        circle.transform.position.y -= Hiz;
     
    }


    }
   if(second>=l){
   second=0;
   }
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
	
	/*circle.transform.position.x = generateX();
    circle.transform.position.y = generateY();
    circle.transform.localScale=Vector3.one * Random.Range(minScale, maxScale);
    circle.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0),Random.Range(0.0,1.0));
    */

  

}

function generateCoordinates1(){
	
	/*circle.transform.position.x = generateX();
    circle.transform.position.y = generateY();
    circle.transform.localScale=Vector3.one * Random.Range(minScale, maxScale);
    circle.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0),Random.Range(0.0,1.0));

    */
}


function OnMouseDown(){

 generateCoordinates1();
 ibg3.scoreNumber += 1;

}




