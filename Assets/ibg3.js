


 public static var scoreNumber : int=0;       
 public static var livesNumber : int=10;  
 public static var hiz=0.01;      
var scoreText : GameObject;
var livesText : GameObject;
public static var second : float;
public static var l : float=1.0f;




function Start () {
 second=0f;
 
 	

    scoreText = GameObject.Find("SayıTablosu");
    livesText = GameObject.Find("KalanCan");

      
  



    livesText.GetComponent(UI.Text).text = " "+livesNumber;
    scoreText.GetComponent(UI.Text).text = "Score: " + scoreNumber;


   


}


function Update () {  
 second+=Time.deltaTime;
// Debug.Log("second "+ (second));
 
    	scoreText.GetComponent(UI.Text).text = "Score: " + scoreNumber;
    	 livesText.GetComponent(UI.Text).text = " " + livesNumber;


    	 if(second>15.0f){
    
    	 l=l-((l*10)/100);
    	 second=0f;
     Debug.Log("llllll"+ l);
          }
    	
  
  }


  function loadGame(){
    Application.LoadLevel("Game");
}

function loadMenu(){
    Application.LoadLevel("Menu");
}

function quit(){
    Application.Quit();
}