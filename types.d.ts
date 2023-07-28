import { JsonProperty, Serializable } from 'ts-jackson';

@Serializable()
export class CardClass {
  @JsonProperty('cardId')
  cardId: any;
  @JsonProperty('name')
  cardName: any;
  @JsonProperty('cardSet')
  cardSet: any;
  @JsonProperty('type')
  type: any;
  @JsonProperty('rarity')
  rarity: any;
  @JsonProperty('attack')
  attack: any;
  @JsonProperty('health')
  health: any;
  @JsonProperty('text')
  text: any;
  @JsonProperty('race')
  race: any;
  @JsonProperty('playerClass')
  playerClass: any;
  @JsonProperty('img')
  img?: any;
  @JsonProperty('mechanics')
  mechanics?: string[];
}
