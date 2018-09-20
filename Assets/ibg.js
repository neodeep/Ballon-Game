

var circle : GameObject; 
//var clone : GameObject;
//var circle2 : GameObject; 
//var scoreNumber : int;       
//var livesNumber : int;        
//var scoreText : GameObject;
//var livesText : GameObject;
var Hiz  =ibg3.hiz;
 var secondf : float;
 var second : int;
var minScale :float=7.0f;
var maxScale:float=20.0f;
public static var l : int=60;

function Start () {
   second=0;
  secondf=0f;
  Hiz  =ibg3.hiz;



    second=0;
 	circle = GameObject.Find("circle");
 	//circle2 = GameObject.Find("circle2");
   /// scoreText = GameObject.Find("SayıTablosu");
    //livesText = GameObject.Find("KalanCan");
   
      
    //Initialize the values of walking speed
    //Hiz = 0.01;
  //  livesNumber = 10;
   // scoreNumber = 0;

    //Initialize the GUI components
    //livesText.GetComponent(UI.Text).text = " "+livesNumber;
  // scoreText.GetComponent(UI.Text).text = "Score: " + scoreNumber;

    //Place the ant in a random position on start of the game
  //  circle.transform.position.x = generateX();
   // circle.transform.position.y = generateY();
    generateCoordinates();

    // circle2.transform.position.x = generateX();
    //circle2.transform.position.y = generateY();

}


function Update () {  

    Debug.Log(l);
     second +=1;
     secondf+=Time.deltaTime;



    	 if(secondf>15.0f){
    	 // Debug.Log("second "+ (second));
    	 l=l-((l*10)/100);
    	 secondf=0f;
    
          }
    if( second>=l){
 
   generateCoordinates(); 
     
  
    if(circle.transform.position.y < -7.388 && ibg3.livesNumber > 0 ){  

                 
        ibg3.livesNumber =ibg3.livesNumber- 1;
       // livesText.GetComponent(UI.Text).text = " " + livesNumber;
       // generateCoordinates(); 
       
    }
    else if(circle.transform.position.y < -7.388 && ibg3.livesNumber == 0){
        Destroy(GameObject.Find("circle"));
       // Destroy(GameObject.Find("circle2"));
        gameOver();    
    }
    else{    
        circle.transform.position.y -= Hiz;
        //circle2.transform.position.y -= Hiz;
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



	circle.transform.position.x = generateX();
    circle.transform.position.y = generateY();
    circle.transform.localScale=Vector3.one * Random.Range(minScale, maxScale);
    circle.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0),Random.Range(0.0,1.0));
    //circle2.transform.position.x = generateX();
    //circle2.transform.position.y = generateY();

}


/*function InstantiateRandomScale()
{
    clone = Instantiate(circle);
    clone.transform.position.x = generateX();
    clone.transform.position.y = generateY();
    clone.transform.localScale=Vector3.one * Random.Range(minScale, maxScale);
    clone.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0),Random.Range(0.0,1.0));
    return clone;
}
*/


function generateCoordinates1(){



	circle.transform.position.x = generateX();
   

}

function OnMouseDown(){

    //Place the ant at another point

      //Instantiate (circle);
 
   
   

    //Destroy(GameObject.Find("circle"));
      generateCoordinates1();
      //You clicked it!
	 ibg3.scoreNumber += 1;

	//Update the score display
	//scoreText.GetComponent(UI.Text).text = "Score: " + scoreNumber;
   
    //Increase the walking speed by 0.01
    //Hiz += 0.01;
}




