import React from 'react';
import PropTypes from 'prop-types';
import { fontSizeBasedOnCharacterLength } from 'utils/text';
import createMarkup from 'utils/createMarkup';
import TYPE from 'enums/type.enums';
import RACE from 'enums/race.enums';
import RARITY from 'enums/rarity.enums';

export default function Card({
  artist,
  attack,
  cardClass,
  collectible,
  cost,
  elite,
  entourage,
  flavor,
  goldenImageSrc,
  health,
  hideStats,
  howToEarn,
  howToEarnGolden,
  id,
  imageSrc,
  inspiration,
  isGolden,
  mechanics,
  name,
  playRequirements,
  race,
  rarity,
  set,
  sounds,
  spellDamage,
  spellType,
  targetingArrowText,
  text,
  type
}) {
  const { attackSound, deathSound, dropSound } = sounds;
  const metaAttributes = [
    { name: 'artist', content: artist },
    { name: 'attack', content: attack },
    { name: 'cardClass', content: cardClass },
    { name: 'collectible', content: collectible.toString() },
    { name: 'cost', content: cost },
    { name: 'elite', content: elite.toString() },
    { name: 'entourage', content: entourage },
    { name: 'flavor', content: flavor },
    { name: 'health', content: health },
    { name: 'hideStats', content: hideStats.toString() },
    { name: 'howToEarn', content: howToEarn },
    { name: 'howToEarnGolden', content: howToEarnGolden },
    { name: 'id', content: id },
    { name: 'images.normal', content: imageSrc },
    { name: 'images.golden', content: goldenImageSrc },
    { name: 'mechanics', content: JSON.stringify(mechanics) },
    { name: 'name', content: name },
    { name: 'playRequirements', content: JSON.stringify(playRequirements) },
    { name: 'race', content: race },
    { name: 'rarity', content: rarity },
    { name: 'set', content: set },
    { name: 'sounds.attackSound', content: attackSound },
    { name: 'sounds.deathSound', content: deathSound },
    { name: 'sounds.dropSound', content: dropSound },
    { name: 'spellDamage', content: spellDamage },
    { name: 'spellType', content: spellType },
    { name: 'targetingText', content: targetingArrowText },
    { name: 'text', content: text },
    { name: 'type', content: type }
  ];

  const IS_MINION = type === TYPE[1] ? true : false;
  const IS_SPELL = type === TYPE[3] ? true : false;
  const IS_WEAPON = type === TYPE[4] ? true : false;

  const cardImage = {
    backgroundImage: isGolden ? `url(${goldenImageSrc})` : `url(${imageSrc})`
  };

  const fontSize = {
    fontSize: `${fontSizeBasedOnCharacterLength(name)}em`
  };

  function cardName(hasName = name, ins = inspiration) {
    if (hasName && hasName !== 'CARD NAME') return hasName;
    else if (ins) return ins;
    else return 'Unknown';
  }

  return (
    <div
      className={[
        'card__v3',
        IS_MINION ? '--is-minion' : '',
        IS_SPELL ? '--is-spell' : '',
        IS_WEAPON ? '--is-weapon' : ''
      ].join(' ')}
    >
      <div className={'card__cost'}>
        <div className={'text__value'}>{cost}</div>
      </div>

      <div className={'card__image__wrapper'}>
        <div className={'card__image'} style={cardImage} />
      </div>

      <div className={'card__name'}>
        <div className={'text__value'} style={fontSize}>
          {cardName(name, inspiration)}
        </div>
      </div>
      <div className={'card__text'}>
        <p
          className={'text__value'}
          dangerouslySetInnerHTML={createMarkup(text)}
        />
      </div>

      {IS_MINION ? (
        race !== RACE[0] ? (
          <div className={'card__type'}>
            <div>{race}</div>
          </div>
        ) : (
          <div className={'card__type'}>
            <div>{type}</div>
          </div>
        )
      ) : (
        <div className={'card__type'}>
          <div>{type}</div>
        </div>
      )}

      {(IS_MINION || IS_WEAPON) && (
        <React.Fragment>
          <div className={'card__attack'} data-value={attack}>
            <div className={'text__value'}>{attack}</div>
            <img
              alt=""
              className={`card__attack__badge`}
              src={`assets/TCG_vol09_front-assets/ic_sword.png`}
            />
          </div>
          <div className={'card__health'} data-value={health}>
            <div className={'text__value'}>{health}</div>
            <img
              alt=""
              className={`card__health__badge`}
              src={`assets/TCG_vol09_front-assets/ic_shield.png`}
            />
          </div>
        </React.Fragment>
      )}

      <img
        alt=""
        className={`card__rarity__gem`}
        src={`assets/Gem_Rarity_${rarity}.png`}
      />

      <div className={`card__type__image__wrapper`}>
        <img
          alt=""
          className={`card__type__image`}
          src={`assets/card-assets/Card_Type--${type}.png`}
        />
        <img
          alt=""
          className={`card__type__image__badge`}
          src={`assets/card-assets/Card_Type_Board.png`}
        />
      </div>

      {isGolden ? (
        <img
          alt=""
          className={`card__base__image`}
          src={`assets/images/TCG_vol09_front--GOLDEN.png`}
        />
      ) : (
        <img
          alt=""
          className={`card__base__image`}
          src={`assets/images/TCG_vol09_front--${rarity}.png`}
        />
      )}

      {metaAttributes.map((attr, index) => {
        const { name, content } = attr;
        return content ? (
          <meta key={index} name={name} content={content.toString()} />
        ) : null;
      })}
    </div>
  );
}

Card.propTypes = {
  artist: PropTypes.string,
  attack: PropTypes.number,
  cardClass: PropTypes.string,
  collectible: PropTypes.bool,
  cost: PropTypes.number,
  elite: PropTypes.bool,
  entourage: PropTypes.array,
  goldenImageSrc: PropTypes.string,
  flavor: PropTypes.string,
  health: PropTypes.number,
  hideStats: PropTypes.bool,
  howToEarn: PropTypes.string,
  howToEarnGolden: PropTypes.string,
  id: PropTypes.string,
  imageSrc: PropTypes.string,
  inspiration: PropTypes.string,
  isGolden: PropTypes.bool,
  mechanics: PropTypes.array,
  name: PropTypes.string,
  playRequirements: PropTypes.array,
  race: PropTypes.string,
  rarity: PropTypes.string,
  set: PropTypes.string,
  sounds: PropTypes.shape({
    attackSound: PropTypes.string,
    deathSound: PropTypes.string,
    dropSound: PropTypes.string
  }),
  spellDamage: PropTypes.number,
  spellType: PropTypes.string,
  targetingArrowText: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string
};

Card.defaultProps = {
  // card object props
  artist: '',
  attack: 0,
  cardClass: '',
  collectible: true,
  cost: 0,
  elite: false,
  entourage: [],
  flavor: null,
  goldenImageSrc: null,
  health: 1,
  hideStats: false,
  howToEarn: null,
  howToEarnGolden: null,
  id: null,
  imageSrc: 'assets/images/card-image-placeholder.jpg',
  inspiration: null,
  mechanics: [],
  name: '',
  playRequirements: [],
  race: '',
  rarity: '',
  set: '',
  sounds: {
    attackSound: null,
    deathSound: null,
    dropSound: null
  },
  spellDamage: 0,
  targetingArrowText: null,
  text: '',
  type: null,

  // incoming transformative props
  isGolden: false
};
