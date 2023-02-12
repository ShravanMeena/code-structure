import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import {useTheme} from '@react-navigation/native';

// ui - components
import ComponentWithError from './ComponentWithError';
import ErrorFallback from './ErrorFallback';
import {Button} from '../ui';

// styles
import {FONT_SIZE_16, FONT_SIZE_20} from '../styles/typography';

const ErrorBoundaryTest = () => {
  const [isErrorComponentVisible, setIsErrorComponentVisible] =
    React.useState(false);

  const {colors} = useTheme();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <Button onPress={() => setIsErrorComponentVisible(true)}>
          Throw error
        </Button>
        {isErrorComponentVisible && <ComponentWithError />}
      </View>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 8,
    textAlign: 'center',
  },
  title: {
    fontSize: FONT_SIZE_16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    fontSize: FONT_SIZE_20,
  },
});

export default ErrorBoundaryTest;
