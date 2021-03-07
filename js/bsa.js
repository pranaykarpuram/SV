class BSA{
    constructor(){
        this.height = createInput("");
        this.weight = createInput("");
        this.title = createElement('h1');
        this.title1 = createElement('h3');
        this.title2 = createElement('h3');
        this.bsa = createElement('h1');
        this.enter = createButton('Enter');
    }

    display(){
        this.title.html("BSA CALCULATOR");
        this.title.position(width/2-50, 0);

        this.title1.html("Enter Height(in cm): ");
        this.title1.position(width/2,height/2-150);
        this.height.position(width/2,height/2-100);

        this.title2.html("Enter Weight(in kg): ");
        this.title2.position(width/2,height/2);
        this.weight.position(width/2, height/2+100);

        this.enter.position(width/2,height*3/4);



        this.enter.mousePressed(()=>{
            this.height.hide();
            this.weight.hide();
            this.title1.hide();
            this.title2.hide();
            height = this.height.value();
            weight = this.weight.value();
            bsa = ((height*weight)/3600)^1/2
            this.bsa.html("Your Body Surface Area is: "+ bsa);
            this.bsa.position(width/2, height/2);



        });





    }

}