import React from 'react';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity, StyleSheet} from 'react-native';

// third parties
import {useDispatch, useSelector} from 'react-redux';

// actions
import {
  getFilteredGiphyAction,
  selectFilterTypeAction,
} from '@redux/actions/giphyAction';

// ui - components
import {Heading} from '@ui';

// helper
import {Capitalize} from '@utils/helper';

// styles
import {Colors} from '@styles';
import {BORDER_RADIUS_4, SCALE_10, SCALE_8} from '@styles/spacing';

export default function Category({item}) {
  // theme colors
  const {colors} = useTheme();

  const dispatch = useDispatch();

  const {lastQueryFromStore} = useSelector(state => state.giphyReducer);

  /*
    for example a category name food & drink , but in giphy category api we need to send food & drink to food-drink .

    So what i did just below
    1. create a replaced  var and  " " remove by  ""
    2. in  category varibale we replace`&` with `-`
  */
  let replaced = item.name?.split(' ')?.join('');
  let category = replaced?.split('&')?.join('-');

  // active button show in categories condition
  let activeTab = lastQueryFromStore?.includes(category);

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
    <TouchableOpacity
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryTabs: {
    borderWidth: 1,
    paddingVertical: SCALE_8,
    paddingHorizontal: SCALE_10,
    marginRight: SCALE_10,
    borderRadius: BORDER_RADIUS_4,
  },
});
