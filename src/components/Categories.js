import {View, FlatList, Pressable, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';

// actions
import {
  getFilteredGiphyAction,
  getGiphyCategoriesActon,
  selectFilterTypeAction,
} from '../redux/actions/giphyAction';

// ui - components
import {Heading} from '../ui';

// helper
import {Capitalize, keyGenerator} from '../utils/helper';

// styles
import {Colors} from '../styles';
// import {SCALE_10, SCALE_8} from 'src/styles/spacing';

function Category({item}) {
  // theme colors
  const {colors} = useTheme();

  const dispatch = useDispatch();

  const {lastQueryFromStore} = useSelector(state => state.giphyReducer);

  /*
    for example a category name food & dring , but in giphy category api we need to send food & drink to food-drink .

    So what i did just below
    1. create a replaced and space " " remove by empty ""
    2. in  category varibale we replace & with - so the final value is somehting somthing-somethin
    3. we done our workk
  */
  let replaced = item.name?.split(' ')?.join('');
  let category = replaced?.split('&')?.join('-');

  // active button show in categories condition
  let activeTab = lastQueryFromStore?.includes(category);

  const categoryViaFetchData = () => {
    //here we set that now time to call categiry api
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

  const {categoriesData} = useSelector(state => state.giphyReducer);

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
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 4,
  },
});
