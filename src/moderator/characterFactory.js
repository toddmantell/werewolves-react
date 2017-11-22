import * as constants from './constants';

export function characterFactory(characterName) {
    switch (characterName) {
        case 'wildchild':
        case 'wolfhound':
        case 'cupid': 
        case 'threebrothers':
        case 'angel':
            return {name: characterName, night: constants.FIRST_NIGHT_ONLY};
        case 'werewolf':
        case 'psychicsisters':
        case 'witch':
        case 'bigbadwolf':
            return {name: characterName, night: constants.EVERY_NIGHT};
        case 'whitewolfitem':
        case 'dracula':
            return {name: characterName, night: constants.EVERY_OTHER_NIGHT};
        // case 'gypsyitem':
        //     secondNight.push(elementObject.textToDisplay);
        //     thirdNight.push(elementObject.textToDisplay);
        //     fourthNight.push(elementObject.textToDisplay);
        //     break;
        // case 'defenderitem':
        //     secondNight.push(elementObject.textToDisplay);
        //     thirdNight.push(elementObject.textToDisplay);
        //     fourthNight.push(elementObject.textToDisplay);
        //     break;              
        // case 'vigilanteitem':
        //     secondNight.push(elementObject.textToDisplay);
        //     thirdNight.push(elementObject.textToDisplay);
        //     fourthNight.push(elementObject.textToDisplay);
        //     break;
        // case 'collectoritem':
        //     secondNight.push(elementObject.textToDisplay + ' (as it applies)');
        //     thirdNight.push(elementObject.textToDisplay + ' (as it applies)');
        //     fourthNight.push(elementObject.textToDisplay + ' (as it applies)');
        //     break;
        default:
            return false;
    }
}