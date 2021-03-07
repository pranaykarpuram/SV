class Database{
    constructor(){
        this.name = null;
        this.number = null;
        this.dob = null;
        this.username = null;
        this.password = null;
        this.bsa = null;
        this.wbc = null;
        this.hgb = null;
        this.platelet = null;
    }

    update(){
        var username = "Patients/username: "+this.username;
        database.ref(username).set({
            PhNo: this.number,
            name: this.name,
            dob: this.dob
        });
    }




}