import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View({
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const Text = styled.Text({
  backgroundColor: 'yellow',
});

const Button = styled.Button({
  backgroundColor: 'yellow',
});

interface LifeCountProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const LifeCount = (props: LifeCountProps) => {
  return (
    <Container>
      <Button title="+" onPress={props.onIncrement} />
      <Text>{props.value}</Text>
      <Button title="-" onPress={props.onDecrement} />
    </Container>
  );
};

export default LifeCount;
