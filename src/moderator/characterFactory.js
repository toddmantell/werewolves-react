import * as constants from './constants';

export function characterFactory(characterName) {
    switch (characterName) {
        case 'wildchild':
            return {name: characterName, night: constants.FIRST_NIGHT_ONLY, order: 20};
        case 'cupid': 
            return {name: characterName, night: constants.FIRST_NIGHT_ONLY, order: 30};
        case 'threebrothers':
            return {name: characterName, night: constants.FIRST_NIGHT_ONLY, order: 50};
        case 'angel':
            return {name: characterName, night: constants.FIRST_NIGHT_ONLY, order: 150};
        case 'werewolf':
            return {name: characterName, night: constants.EVERY_NIGHT, order: 100};
        case 'psychicsisters':
            return {name: characterName, night: constants.AFTER_FIRST_EVERY_NIGHT, order: 60};
        case 'defender':
            return {name: characterName, night: constants.AFTER_FIRST_EVERY_NIGHT, order: 10};
        case 'witch':
            return {name: characterName, night: constants.EVERY_NIGHT, order: 160};
        case 'bigbadwolf':
            return {name: characterName, night: constants.EVERY_NIGHT, order: 110};
        case 'gypsyitem':
            return {name: characterName, night: constants.AFTER_FIRST_EVERY_NIGHT, order: 80};
        case 'direwolf':
            return {name: characterName, night: constants.EVERY_OTHER_NIGHT, order: 120};
        case 'whitewolf':
            return {name: characterName, night: constants.EVERY_OTHER_NIGHT, order: 130};
        case 'dracula':
            return {name: characterName, night: constants.EVERY_OTHER_NIGHT, order: 70};
        case 'collector':
            return {name: characterName, night: constants.DEPENDENT, order: -999};
        case 'vigilante':
            return {name: characterName, night: constants.AFTER_FIRST_EVERY_NIGHT, order: 170};
        case 'knight':
            return {name: characterName, night: constants.KNIGHT, order: -999};
        case 'resuscitated':
            return {};
        default:
            return false;
    }
}