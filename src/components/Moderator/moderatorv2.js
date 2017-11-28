export default class Moderator {
    constructor() {
        //Utilities:    
        String.prototype.capitalizeFirstLetter = function () {
            return this.charAt(0).toUpperCase() + this.slice(1);
        };
    }

    options = [];
    character = {};
    character2 = {}    
    
    //"globals"
    night = {image: '', order: {first: character, second: character2}};

    orderNight() {
        if (options.includes('seer')) night.first = character;
    }
    
    //document.getElementById('generate').addEventListener('click', generateForm);
    
    generateForm() {       
        clearForm([nightOne, nightTwo, nightThree, nightFour]);
        
        generateObject('wolfhound');
        generateObject('wildchild');
        generateObject('cupid');
        generateObject('threebrothers');       
        generateObject('psychicsisters');
        generateObject('gypsy');
        generateObject('defender');
        generateObject('dracula');
        generateObject('werewolf');
        generateObject('bigbadwolf');
        generateObject('whitewolf');
        generateObject('angel');
        generateObject('witch');
        generateObject('vigilante');
        generateObject('collector');
        
        addToGameFlow(firstNight, nightOne);
        addToGameFlow(secondNight, nightTwo);
        addToGameFlow(thirdNight, nightThree);
        addToGameFlow(fourthNight, nightFour);        
    }
    
    clearForm(nights) {
        //set the arrays back to empty
        firstNight = [];
        secondNight = [];
        thirdNight = [];
        fourthNight = [];
        
        //remove all items from the innerHTML of the nights
        for (var i = 0; i < nights.length; i += 1) {
            while (nights[i].hasChildNodes()) {
                nights[i].removeChild(nights[i].firstChild);
            }
        }
    }   

    //Object parameter pattern: pass in an object that has the properties we need, also prevents passing in bad data
    generateObject(elementName) {
        
        var elementObject = {};
        elementObject.element = document.getElementById(elementName + '-checkbox');
        var checkedValue = elementObject.element.checked;
        
        if (checkedValue) { 
                elementObject.newListItem = elementName + 'item';
                elementObject.textToDisplay = elementName.capitalizeFirstLetter();
                addToNight(elementObject);
        }
    }
    
    //adds the individual role to a night and makes sure the ordering is correct
    addToNight(elementObject) {
        //implement ordering logic:
        //First Night Only: Cupid, Lovers, Angel, Three Brothers
        //First Night Order: Cupid, Lovers, Three Brothers, Sisters, Dracula, Vampires, Werewolves, Big Bad
        //Every Other Night: White Wolf, Wolf Hunter (if exists)
        //Every Night: Defender, Dracula, Vampires, Werwolves, Big Bad (until one wolf killed), Witch, Gypsy, Psychic Sisters, Collector, Vigilante
        //Witch is always after the werewolves, Dracula always before werewolves
        
    }
    
    

    addToGameFlow(elementArray, night) {
        if (elementArray.length > 0)
        {
            for (var i = 0; i < elementArray.length; i += 1) {
                night.innerHTML += '<li id="'+elementArray[i]+'item">' + '<strong>' + elementArray[i] +'</strong>'+'</li>';
            }
        }
    }
}