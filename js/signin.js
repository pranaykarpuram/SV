class Signin{
    constructor(){
        this.ph = createElement("h2");
        this.phI = createInput("");
        this.firstName = createElement("h2");
        this.nameI = createInput("");
        this.lastName = createElement("h2");
        this.lastnameI = createInput("");
        this.dob = createElement("h2");
        this.dobI = createInput("DD/MM/YYYY");
        this.enter = createButton("Enter");
        this.username = createElement("h2");
        this.usernameI = createInput("");
        this.password = createElement("h2");
        this.passwordI = createInput("");
    }
    display(){
        this.ph.show();
        this.phI.show();
        this.firstName.show();
        this.nameI.show();
        this.lastName.show();
        this.lastnameI.show();
        this.dob.show();
        this.dobI.show();
        this.enter.show();
        this.username.show();
        this.usernameI.show();
        this.password.show();
        this.passwordI.show();

        this.ph.html("Enter Phone No. :");
        this.ph.position(width/2,height*400/1250);
        this.phI.position(width/2,height*450/1250);
        data.number = this.phI.value();

        this.firstName.html("Enter First Name: ");
        this.firstName.position(width/2, height*500/1250);
        this.nameI.position(width/2, height*550/1250);
        var nameI = this.nameI.value();

        this.lastName.html("Enter Last Name: ");
        this.lastName.position(width/2, height*600/1250);
        this.lastnameI.position(width/2, height*650/1250);
        var nameII = this.lastnameI.value();
        data.name = nameI+nameII;      

        this.dob.html("Enter Date of Birth");
        this.dob.position(width/2, height*700/1250);
        this.dobI.position(width/2, height*750/1250);
        data.dob = this.dobI.value();

        this.username.html("Enter username: ");
        this.username.position(width/2, height*800/1250);
        this.usernameI.position(width/2, height*850/1250);
        data.username = this.usernameI.value();

        this.password.html("Enter password: ");
        this.password.position(width/2, height*900/1250);
        this.passwordI.position(width/2, height*950/1250);
        
        this.enter.position(width/2, height*1000/1250);

        this.enter.mousePressed(()=>{
            state = "login";
            data.update();
        });

        
    }
    hide(){
        this.ph.hide();
        this.phI.hide();
        this.firstName.hide();
        this.nameI.hide();
        this.lastName.hide();
        this.lastnameI.hide();
        this.dob.hide();
        this.dobI.hide();
        this.enter.hide();
        this.username.hide();
        this.usernameI.hide();
        this.password.hide();
        this.passwordI.hide();
    }
}