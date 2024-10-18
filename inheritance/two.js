class parent{
    constructor(){
        console.log("Hiiiiiii");
        
    }

}
class child extends parent{
    constructor(){
        super();
        console.log("Byeeee");
        
    }

}
new child();