import * as constants from './constants';

export default function(characterName) {
  switch (elementObject.newListItem){
    case 'wildchild' || 'wolfhound' || 'cupid' || 'threebrothers' || 'angel':
        return {name: characterName, night: constants.FIRST_NIGHT_ONLY};
    case 'psychicsisters' || 'witch' || 'bigbadwolf' || 'werewolf':
        return {name: characterName, night: constants.EVERY_NIGHT};
    case 'whitewolfitem' || 'dracula':
        return {name: characterName, night: constants.EVERY_OTHER_NIGHT};
    case 'gypsyitem':
        secondNight.push(elementObject.textToDisplay);
        thirdNight.push(elementObject.textToDisplay);
        fourthNight.push(elementObject.textToDisplay);
        break;
    case 'defenderitem':
        secondNight.push(elementObject.textToDisplay);
        thirdNight.push(elementObject.textToDisplay);
        fourthNight.push(elementObject.textToDisplay);
        break;              
    case 'vigilanteitem':
        secondNight.push(elementObject.textToDisplay);
        thirdNight.push(elementObject.textToDisplay);
        fourthNight.push(elementObject.textToDisplay);
        break;
    case 'collectoritem':
        secondNight.push(elementObject.textToDisplay + ' (as it applies)');
        thirdNight.push(elementObject.textToDisplay + ' (as it applies)');
        fourthNight.push(elementObject.textToDisplay + ' (as it applies)');
        break;
}
}