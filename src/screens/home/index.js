import {FlatList, StyleSheet, Pressable, ActivityIndicator} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';

// selectors and actions
import {useDispatch, useSelector} from 'react-redux';

// ui - components
import {
  Header,
  GifImage,
  ErrorBoundaryTest,
  SearchInput,
  Categories,
} from '../../components';

import {
  Base,
  Button,
  Center,
  Container,
  Heading,
  Loader,
  Description,
} from '../../ui';

// helper
import {handlerActions, keyGenerator} from '../../utils/helper';
import {getFilteredGiphyAction} from '../../redux/actions/giphyAction';

// styles
import {BORDER_RADIUS_4, SCALE_10} from '../../styles/spacing';
import {FLEX_COLUMN_ALIGN_CENTER} from '../../styles/typography';
import {Colors} from '../../styles';

function MyGif({item}) {
  const [play, setPlay] = useState(false);
  const playAndPauseHandler = () => {
    setPlay(!play);
  };

  return (
    <Pressable onPress={playAndPauseHandler} style={styles.item}>
      <GifImage
        uri={
          item.gif ? item?.gif.images?.original.url : item?.images?.original.url
        }
      />
    </Pressable>
  );
}

export default function HomeScreen() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  // destructuring
  const {
    typeOfGif,
    lastQueryFromStore,
    loading,
    isListEnd,
    moreLoading,
    pageNumberFromStore,
    data,
  } = useSelector(state => state.giphyReducer);

  const requestAPI = _pg => {
    dispatch(getFilteredGiphyAction({page: _pg}));
  };

  useEffect(() => {
    if (page === 1) {
      requestAPI(page);
    }
  }, []);

  const fetchMoreData = () => {
    if (!isListEnd && !moreLoading) {
      setPage(page + 1);
      handlerActions(
        dispatch,
        typeOfGif,
        pageNumberFromStore,
        lastQueryFromStore,
        getFilteredGiphyAction,
      );
    }
  };

  const renderFooter = () => (
    <Center props_styles={styles.footer}>
      {moreLoading && <ActivityIndicator />}
      {isListEnd && (
        <>
          <ErrorBoundaryTest />
          <Heading>No more GIPHY at the moment</Heading>
          <Description>this is description</Description>
        </>
      )}
    </Center>
  );

  const renderEmpty = () => (
    <Center props_styles={styles.footer}>
      <Heading>No Data at the moment</Heading>
      <Button
        text_style={{
          color: Colors.PRIMARY,
        }}
        onPress={() => requestAPI()}>
        Refresh
      </Button>
    </Center>
  );

  const renderItem = ({item}) => <MyGif item={item} />;
  const memoizedValue = useMemo(() => renderItem, [data]);

  return (
    <Base>
      {/* top header for toggle theme and logo */}
      <Header />
      {/* text input for searching GIF */}
      <SearchInput />
      {/* Lsit of Categories  */}
      <Categories />
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <FlatList
            removeClippedSubviews
            initialNumToRender={4}
            showsVerticalScrollIndicator={false}
            // eslint-disable-next-line react-native/no-inline-styles
            contentContainerStyle={{flexGrow: 1}}
            data={data}
            renderItem={memoizedValue}
            ListFooterComponent={renderFooter}
            ListEmptyComponent={renderEmpty}
            onEndReachedThreshold={0.2}
            onEndReached={fetchMoreData}
            keyExtractor={keyGenerator}
          />
        )}
      </Container>
    </Base>
  );
}

const styles = StyleSheet.create({
  item: {
    borderRadius: BORDER_RADIUS_4,
    marginVertical: SCALE_10,
    backgroundColor: Colors.GRAY_MEDIUM,
  },

  footer: {
    height: 500,
    ...FLEX_COLUMN_ALIGN_CENTER,
  },
});
