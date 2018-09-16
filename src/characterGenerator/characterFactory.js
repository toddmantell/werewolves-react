import {CHARACTERS, NIGHTS} from "../constants"

export function characterFactory(characterName) {
  switch (characterName) {
    case CHARACTERS.WILDCHILD:
      return {
        name: characterName,
        night: NIGHTS.FIRST_NIGHT_ONLY,
        order: 20
      }
    case CHARACTERS.CUPID:
      return {
        name: characterName,
        night: NIGHTS.FIRST_NIGHT_ONLY,
        order: 30
      }
    case CHARACTERS.THREE_BROTHERS:
      return {
        name: characterName,
        night: NIGHTS.FIRST_NIGHT_ONLY,
        order: 50
      }
    case CHARACTERS.ANGEL:
      return {
        name: characterName,
        night: NIGHTS.FIRST_NIGHT_ONLY,
        order: 150
      }
    case CHARACTERS.WEREWOLF:
      return { name: characterName, night: NIGHTS.EVERY_NIGHT, order: 100 }
    case CHARACTERS.PSYCHIC_SISTERS:
      return {
        name: characterName,
        night: NIGHTS.AFTER_FIRST_EVERY_NIGHT,
        order: 60
      }
    case CHARACTERS.DEFENDER:
      return {
        name: characterName,
        night: NIGHTS.AFTER_FIRST_EVERY_NIGHT,
        order: 10
      }
    case CHARACTERS.WITCH:
      return { name: characterName, night: NIGHTS.EVERY_NIGHT, order: 160 }
    case CHARACTERS.BIG_BAD_WOLF:
      return { name: characterName, night: NIGHTS.EVERY_NIGHT, order: 110 }
    case CHARACTERS.GYPSY:
      return {
        name: characterName,
        night: NIGHTS.AFTER_FIRST_EVERY_NIGHT,
        order: 80
      }
    case CHARACTERS.DIRE_WOLF:
      return {
        name: characterName,
        night: NIGHTS.EVERY_OTHER_NIGHT,
        order: 120
      }
    case CHARACTERS.WHITE_WOLF:
      return {
        name: characterName,
        night: NIGHTS.EVERY_OTHER_NIGHT,
        order: 130
      }
    case CHARACTERS.DRACULA:
      return {
        name: characterName,
        night: NIGHTS.EVERY_OTHER_NIGHT,
        order: 70
      }
    case CHARACTERS.COLLECTOR:
      return { name: characterName, night: NIGHTS.DEPENDENT, order: -999 }
    case CHARACTERS.VIGILANTE:
      return {
        name: characterName,
        night: NIGHTS.AFTER_FIRST_EVERY_NIGHT,
        order: 170
      }
    case CHARACTERS.KNIGHT:
      return { name: characterName, night: NIGHTS.KNIGHT, order: -999 }
    case "resuscitated":
      return {}
    default:
      return false
  }
}
