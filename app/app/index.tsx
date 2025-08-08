import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from "../components"

const textes = [
  "Bienvenue sur SmartClass",
  "Optimisez le confort scolaire",
  "Analyse des données IoT",
  "Planification intelligente",
  "Confort et écologie réunis"
];

const colorList = [
  "#ae1515",
  "rgba(103,100,156,0.6)",
  "#9c647f",
  "rgba(156,100,139,0.59)",
  "#4da814"
];

export default function TexteAnime() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [bgIndex, setBgIndex] = useState(0);
  const [phase, setPhase] = useState<'delete' | 'write'>('write');

  useEffect(() => {
    let timeout: number;
    const currentText = textes[textIndex];

    if (phase === 'write') {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => setPhase('delete'), 2000);
      }
    }
    else if (phase === 'delete') {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, 50);
      } else {
        setBgIndex((prev) => (prev + 1) % colorList.length);
        setTextIndex((prev) => (prev + 1) % textes.length);
        setPhase('write');
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, phase, textIndex]);

  return (
      <View style={[styles.container, { backgroundColor: colorList[bgIndex] }]}>
        <Text style={styles.text}>{displayedText}.</Text>
        {/*<View style={styles.bottomContainer}>*/}
        {/*    <Button>test</Button>*/}
        {/*</View>*/}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '900',
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  }
});
