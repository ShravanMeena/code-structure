import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Linking, StyleSheet} from 'react-native';

// contants
import {Config} from '@config';

// ui - components
import {Center, Container, Heading, Description, Base, Button} from '@ui';

// styles
import {Colors} from '@styles';
import {SCALE_18} from '@styles/spacing';
import {SCALE_12, SCALE_8} from '@styles/spacing';

export default function AboutMe() {
  const {goBack} = useNavigation();
  const backHandler = () => {
    goBack();
  };

  const openPortfolio = () => {
    Linking.openURL(Config.PORTFOLIO_LINK);
  };

  return (
    <Base>
      <Button
        props_styles={{
          marginVertical: SCALE_18,
        }}
        text_style={{
          color: Colors.PRIMARY,
        }}
        onPress={backHandler}>
        GO BACK
      </Button>
      <Container>
        <Center>
          <Heading>Shravan Meena</Heading>

          <Description>
            I've been coding for 4 years with making full stack Projects from
            scratch level to industry level. Have experienced founder journey as
            CTO of Saas startup. Currently working with a Gaming platform
            startup, made it from scratch to now having 1.5 million+ users.
          </Description>

          <Button
            onPress={openPortfolio}
            text_style={{
              color: Colors.WHITE,
            }}
            props_styles={styles.btnPortfolio}>
            MY PORTFOLIO
          </Button>
        </Center>
      </Container>
    </Base>
  );
}

const styles = StyleSheet.create({
  btnPortfolio: {
    borderWidth: SCALE_8,
    borderColor: Colors.WARNING,
    backgroundColor: Colors.ALERT,
    paddingHorizontal: SCALE_12,
    paddingVertical: SCALE_8,
    marginVertical: SCALE_18 * 3,
  },
});
