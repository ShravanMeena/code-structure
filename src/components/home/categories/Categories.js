import {View, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useMemo} from 'react';

// third parties
import {useDispatch, useSelector} from 'react-redux';

// actions
import {getGiphyCategoriesActon} from '@redux/actions/giphyAction';

// ui - components
import Category from './Category';

// helper
import {keyGenerator} from '@utils/helper';

// styles
import {SCALE_10} from '@styles/spacing';

export default function Categories() {
  const dispatch = useDispatch();

  const {categoriesData} = useSelector(state => state.giphyReducer);

  useEffect(() => {
    dispatch(getGiphyCategoriesActon());
  }, []);

  const renderItem = ({item}) => <Category item={item} />;
  const memoizedValue = useMemo(() => renderItem, [categoriesData]);

  return (
    <View style={styles.container}>
      <FlatList
        removeClippedSubviews
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categoriesData}
        renderItem={memoizedValue}
        keyExtractor={keyGenerator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: SCALE_10,
    paddingHorizontal: SCALE_10,
  },
});
