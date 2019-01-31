/**

NOTES: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
https://stackoverflow.com/questions/19544452/remove-last-item-from-array
*/

var skynetProcesses = {

    randomize_task: function(array) {


        //SHUFFLE THE ARRAY
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;

    },



    peta_pop: function(arr) {

        //var arr = [1,0,2,23,4,5,4232,333];

        for (let a = 0; arr.length > 5; a++) {
            // gimme five elements of an array, start from the last element 
            arr.splice(-1, 1);
        }

        //return a resolved promise 

        //return a rejected promise
        return arr;

    },

    tasks: {

        robot_tasks: [{
            description: 'do the dishes',
            eta: 1000,
        }, {
            description: 'sweep the house',
            eta: 3000,
        }, {
            description: 'do the laundry',
            eta: 10000,
        }, {
            description: 'take out the recycling',
            eta: 4000,
        }, {
            description: 'make a sammich',
            eta: 7000,
        }, {
            description: 'mow the lawn',
            eta: 20000,
        }, {
            description: 'rake the leaves',
            eta: 18000,
        }, {
            description: 'give the dog a bath',
            eta: 14500,
        }, {
            description: 'bake some cookies',
            eta: 8000,
        }, {
            description: 'wash the car',
            eta: 20000,
        }, ]
    },

    main_skynet_operation: function() {

        try {

            //initilize empty array, to start with a new unshuffled array
            let arr = [];
            //set values for arr
            arr = skynetProcesses.tasks.robot_tasks;
            //shuffle the tasks
            let a = skynetProcesses.randomize_task(arr);

            //select only 5 tasks for robot 
            let b = skynetProcesses.peta_pop(a);

            return b;


        } catch (error) {
            console.log(error);

        }


    }
}

module.exports.main_skynet_operation = skynetProcesses.main_skynet_operation;