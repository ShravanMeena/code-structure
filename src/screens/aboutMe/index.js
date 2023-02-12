import {useNavigation} from '@react-navigation/native';
import React from 'react';

// ui - components
import {Center, Container, Heading, Description, Base, Button} from '../../ui';

// styles
import {Colors} from '../../styles';
import {SCALE_18} from '../../styles/spacing';

export default function AboutMe() {
  const {goBack} = useNavigation();
  const backHandler = () => {
    goBack();
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
            startup, made it from scratch to now having 1 million+ users.
          </Description>
        </Center>
      </Container>
    </Base>
  );
}
