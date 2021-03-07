var database;
var firstName, lastName, age, phoneNumber, address;
var state = "login";
var login, signin, dashboard, bsa, calendar, data;
function setup() {
  database = firebase.database();
  login = new Login();
  signin = new Signin();
  data = new Database();
  createCanvas(windowWidth,windowHeight);
  console.log(width, height);

}

function draw() {
  background("white");

  if(state==="login"){
    login.display();
    signin.hide();
  }
 

  if(state==="signin"){
    signin.display();
    login.hide();
  }




  text("x:" +mouseX,mouseX,mouseY);
  text("y:" +mouseY,mouseX+30,mouseY);  
  drawSprites();
}