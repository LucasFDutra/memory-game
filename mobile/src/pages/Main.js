import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Image, TouchableOpacity,
} from 'react-native';

import Angle from '../assets/angle.png';
import Cross from '../assets/cross.png';
import Hyperbole from '../assets/hyperbole.png';
import InfinitySimble from '../assets/infinity.png';
import Pi from '../assets/pi.png';
import Plus from '../assets/plus.png';
import Sigma from '../assets/sigma.png';
import Ui from '../assets/ui.png';

const Main = () => {
  const [figures, setFigures] = useState(null);
  const [clicked, setClicked] = useState(null);

  useEffect(() => {
    const arrayFigures = [Angle, Cross, Hyperbole, InfinitySimble, Pi, Plus, Sigma, Ui];
    let arrayFiguresZeros = [];
    let arrayFiguresCliked = [];

    for (let i = 0; i < 2 * arrayFigures.length; i++) {
      arrayFiguresZeros = [...arrayFiguresZeros, 0];
      arrayFiguresCliked = [...arrayFiguresCliked, false];
    }

    let position1 = 0;
    let position2 = 0;

    for (let i = 0; i < arrayFigures.length; i++) {
      position1 = parseInt((arrayFigures.length - 1) * Math.random());
      while (arrayFiguresZeros[position1] !== 0) {
        position1 += 1;
        if (position1 >= arrayFiguresZeros.length) {
          position1 = 0;
        }
      }
      arrayFiguresZeros[position1] = arrayFigures[i];

      position2 = parseInt((arrayFigures.length - 1) * Math.random());
      while (arrayFiguresZeros[position2] !== 0) {
        position2 += 1;
        if (position2 >= arrayFiguresZeros.length) {
          position2 = 0;
        }
      }
      arrayFiguresZeros[position2] = arrayFigures[i];
    }

    setFigures(arrayFiguresZeros);
    setClicked(arrayFiguresCliked);
  }, []);

  const pressCard = (index) => {
    const arrayFiguresCliked = [...clicked];
    console.log(arrayFiguresCliked);
    arrayFiguresCliked[index] = !arrayFiguresCliked[index];
    setClicked(arrayFiguresCliked);
  };

  if (!figures) {
    return null;
  }

  return (
    <View style={styles.view}>
      {
        figures.map((figure, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => pressCard(index)}>
            {
              clicked[index] && (
                <Image style={styles.cardImage} source={figure} />
              )
            }
          </TouchableOpacity>
        ))
      }
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#373a4b',
    padding: 20,
  },
  card: {
    margin: 10,
    width: 70,
    height: 90,
    backgroundColor: '#008ABC',
    borderWidth: 2,
    borderColor: '#282a36',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    margin: 0,
    width: 38,
    height: 38,
  },
});

export default Main;
