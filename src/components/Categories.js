import {View, FlatList, Pressable, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';

import {
  getFilteredGiphyAction,
  getGiphyCategoriesActon,
  selectFilterTypeAction,
} from '../redux/actions/giphyAction';

// ui - components
import Heading from '../ui/heading';

// helper
import {Capitalize, keyGenerator} from '../utils/helper';

// styles
import {Colors} from '../styles';

function Category({item}) {
  const dispatch = useDispatch();

  // theme colors
  const {colors} = useTheme();

  const valuesFromReducer = useSelector(
    state => state.giphyReducer?.valuesFromReducer,
  );

  var replaced = item.name?.split(' ')?.join('');
  let category = replaced?.split('&')?.join('-');

  // active tab conditions
  let activeTab = valuesFromReducer?.includes(category);

  const categoryViaFetchData = () => {
    dispatch(selectFilterTypeAction('category'));

    dispatch(
      getFilteredGiphyAction({
        type: 'category',
        values: {category},
        page: 1,
      }),
    );
  };

  return (
    <Pressable
      style={[
        styles.categoryTabs,
        {
          backgroundColor: activeTab ? Colors.PRIMARY : colors.SECONDARY,
        },
      ]}
      onPress={categoryViaFetchData}>
      <Heading
        props_styles={{
          color: activeTab ? Colors.WHITE : colors.text,
        }}>
        {Capitalize(item.name)}
      </Heading>
    </Pressable>
  );
}

export default function Categories() {
  const dispatch = useDispatch();

  const categoriesData = useSelector(
    state => state.giphyReducer.categoriesData,
  );

  useEffect(() => {
    dispatch(getGiphyCategoriesActon());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        removeClippedSubviews
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categoriesData}
        renderItem={({item}) => <Category item={item} />}
        keyExtractor={keyGenerator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  categoryTabs: {
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 4,
  },
});
