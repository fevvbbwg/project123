import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IngredientCard from './IngredientCard';

export default function CategorySection({ title, ingredients }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.ingredientGrid}>
        {ingredients.map((item, index) => (
          <IngredientCard key={index} name={item.name} dDay={item.dDay} image={item.image} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    paddingBottom: 5,
  },
  ingredientGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});
