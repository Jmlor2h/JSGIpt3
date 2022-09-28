function exercise(x){
    function whatExercise(){
        return `Todays Exercise: ${x}`
    }
    return whatExercise;
    }

    let run = exercise('Running')
    console.log(run())
    let swim = exercise('Swimming')
    console.log(swim())



