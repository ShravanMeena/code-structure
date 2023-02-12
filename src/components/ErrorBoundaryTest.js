import * as React from 'react';
import {StyleSheet} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';

// ui - components
import {Button, Center} from '@ui';
import ComponentWithError from './ComponentWithError';
import ErrorFallback from './ErrorFallback';

// styles
import {Colors} from '@styles';
import {SCALE_8} from '@styles/spacing';

const ErrorBoundaryTest = () => {
  const [isErrorComponentVisible, setIsErrorComponentVisible] =
    React.useState(false);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Center props_styles={styles.container}>
        <Button
          text_style={{
            color: Colors.WHITE,
          }}
          onPress={() => setIsErrorComponentVisible(true)}>
          PRESS here to check crash handling
        </Button>
        {isErrorComponentVisible && <ComponentWithError />}
      </Center>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SCALE_8,
    backgroundColor: Colors.WARNING,
  },
});

export default ErrorBoundaryTest;
