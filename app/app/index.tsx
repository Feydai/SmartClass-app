import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from "../components";
import { Link } from "expo-router"

const slides = [
  { message: "Bienvenue sur SmartClass", bgColor: "#CCDBDC", textColor: "#00332e" },
  { message: "Optimisez le confort scolaire", bgColor: "#649C96", textColor: "#102d2a" },
  { message: "Analyse des données IoT", bgColor: "#006D65", textColor: "#e8f7f5" },
  { message: "Planification intelligente", bgColor: "#1E3633", textColor: "#d6ebe8" },
  { message: "Confort et écologie réunis", bgColor: "#6c9b8f", textColor: "#122a23" },
];

export default function TexteAnime() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [phase, setPhase] = useState<'delete' | 'write'>('write');

  useEffect(() => {
    let timeout: number;
    const currentSlide = slides[slideIndex];

    if (phase === 'write') {
      if (displayedText.length < currentSlide.message.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentSlide.message.slice(0, displayedText.length + 1));
        }, 20);
      } else {
        timeout = setTimeout(() => setPhase('delete'), 2000);
      }
    } else if (phase === 'delete') {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentSlide.message.slice(0, displayedText.length - 1));
        }, 30);
      } else {
        setSlideIndex((prev) => (prev + 1) % slides.length);
        setPhase('write');
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, phase, slideIndex]);

  return (
      <View style={[styles.container, { backgroundColor: slides[slideIndex].bgColor }]}>
        <Text style={[styles.text, { color: slides[slideIndex].textColor }]}>
          {displayedText}.
        </Text>
        <View style={styles.bottomContainer}>
          <Button link={"/(auth)/login"} customStyle={{ width: "90%" }}>Se connecter</Button>
          <TouchableOpacity onPress={() => alert("Contactez votre administrateur pour créer un compte")}>
            <Text style={styles.contactText}>Pas de compte ? Contactez l’administrateur</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  bottomContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "white",
    height: "15%",
    width: "100%",
    paddingVertical: 16,
  },
  contactText: {
    marginTop: 12,
    fontSize: 14,
    color: "#666",
    textDecorationLine: "underline",
  }
});
