class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.exercise = function(){
            console.log('Running is fun');
        }
        this.fetchJob = function(){
            console.log(`${name} is a ${job}`)
        }
    }
}
var Rbt = new Person('Robert', '24', 'Builder')
    Rbt.exercise()
    Rbt.fetchJob()

    class Programmer extends Person {
        constructor(name, age, job, languages, busy) {
            super(name, age, job,)
            this.languages = languages;
            this.busy = true;
            this.completeTask = function() {
                this.busy = false;
                console.log(name, 'completes task, is he busy?:', this.busy)
            }
            this.acceptNewTask = function() {
                this.busy = true;
                console.log(name, 'accepts task', this.busy)
            }
            this.offerNewTask = function() {
                if (this.busy === true) {
                    console.log(this.name, ' cannot accept any new tasks')
                } else if (this.busy === false) {
                    console.log(this.name, ' is ready for a new task')
                } else {
                    console.log('N/A')
                }
            }
            this.learnLanguage = function(x) {
                this.languages.push(x)
            }
            this.listLanguages = function() {
                console.log(name, 'knows the following languages', this.languages)
            }
        }
    }

    var Rbt = new Programmer('Robert', '24', 'Builder', ['English', 'Spanish'], false )
    Rbt.exercise()
    Rbt.completeTask()
    Rbt.acceptNewTask()
    Rbt.completeTask()
    Rbt.offerNewTask()
    Rbt.listLanguages()
    Rbt.learnLanguage('French')
    Rbt.listLanguages()
    Rbt.fetchJob()

    var Ptr = new Programmer('Peter', '30', 'Senior Web Dev', ['HTML', 'CSS', 'JAVASCRIPT'], true)
    Ptr.exercise()
    Ptr.completeTask()
    Ptr.acceptNewTask()
    Ptr.completeTask()
    Ptr.offerNewTask()
    Ptr.acceptNewTask()
    Ptr.offerNewTask()
    Ptr.listLanguages()
    Ptr.learnLanguage('Node.js')
    Ptr.learnLanguage('React.js')
    Ptr.listLanguages()
    Ptr.fetchJob()
