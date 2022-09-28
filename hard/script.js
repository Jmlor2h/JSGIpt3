var getName = function(type){
        const pii = {
        name: 'John Brown',
        ssn: '123-45-678',
        na:'',
        }
    

    if (type === 'publicaccess')
       return function(){
        return pii.name;
       }
        else 
        return function(){
            return undefined;
        }
        
       }

       var grabName = getName('publicaccess')

       console.log(grabName()) // returns only the name
       console.log(getName('publicaccess')) // returns Function (anonymous)
       console.log(getName()) // returns Function (anonymous)
      
