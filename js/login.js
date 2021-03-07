class Login{
    constructor(){
      this.user = createElement('h2');
      this.username = createInput('');  
      this.password = createElement('h2');
      this.pass = createInput('');
      this.signin = createElement("h2");
      this.register = createButton("Register");
      this.enter = createButton("Enter");
    }
    display(){
        this.user.show();
        this.username.show();
        this.password.show();
        this.pass.show();
        this.signin.show();
        this.register.show();
        this.enter.show();



        this.user.html("Username: ");
        this.user.position(width*55/128,height*2/5);
        this.username.position(width*55/128, height*56/125);

        this.password.html("Password: ");
        this.password.position(width*55/128, height*63/125);
        this.pass.position(width*55/128, height*14/25);

        this.signin.html("Don't have an account? Register below.");
        this.signin.position(width*35/128,height*31/50);
        this.register.position(width*55/128, height*86/125);
        this.enter.position(width*55/128,height*3/5);

        this.register.mousePressed(()=>{
            state = "signin";
        });
        this.enter.mousePressed(()=>{
            state = "dashboard";
        });
        
    }
    hide(){
        this.user.hide();
        this.username.hide();
        this.password.hide();
        this.pass.hide();
        this.signin.hide();
        this.register.hide();
        this.enter.hide();
    }
}