const renderManager = function (){

    const logTitle = function({title}){
        console.log(title)
    }

    return {logTitle};
}();

export {renderManager};