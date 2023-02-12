import {
  View,
  FlatList,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';

// selectors and actions
import {useDispatch, useSelector} from 'react-redux';

// ui - components
import {
  Header,
  Categories,
  GifImage,
  ErrorBoundaryTest,
  SearchInput,
} from '../../components';
import {Button, Center, Container, Heading, Loader} from '../../ui';

// helper
import {handlerActions, keyGenerator} from '../../utils/helper';
import {getFilteredGiphyAction} from '../../redux/actions/giphyAction';

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

  // destruturing
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
        </>
      )}
    </Center>
  );

  const renderEmpty = () => (
    <Center>
      <Heading>No Data at the moment</Heading>
      <Button onPress={() => requestAPI()}>Refresh</Button>
    </Center>
  );

  return (
    <View style={styles.container}>
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
            showsVerticalScrollIndicator={false}
            // eslint-disable-next-line react-native/no-inline-styles
            contentContainerStyle={{flexGrow: 1}}
            data={data}
            renderItem={({item}) => <MyGif item={item} />}
            ListFooterComponent={renderFooter}
            ListEmptyComponent={renderEmpty}
            onEndReachedThreshold={0.2}
            onEndReached={fetchMoreData}
            keyExtractor={keyGenerator}
          />
        )}
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderRadius: 4,
    marginVertical: 10,
    backgroundColor: 'gray',
  },
  footer: {
    height: 300,
    display: 'flex',
    alignItems: 'center',
  },
});
