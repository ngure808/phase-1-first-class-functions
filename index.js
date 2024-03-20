function receivesAFunction(callback){
    console.log(callback());
}
receivesAFunction(function (){return "got it"});

function returnsANamedFunction(){
    return (function calling(){
        console.log("it's all good")
    })
}

function returnsAnAnonymousFunction(){
    return (function(){
        console.log("not bad")
    })
}