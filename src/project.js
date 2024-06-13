// module for project that (can) hold todos //

function createProject (name,...todoArray){

    let name = name;
    
    function getName(){
        return name;
    }
    
    function setName(newName){
        name = newName;
    }

    return {
        name,
        ...todoArray,
        getName,
        setName,
    }
}