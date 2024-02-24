import React from 'react';
import { HStack, List, Rectangle, Spacer, Text } from 'swiftui-react-native';

export const FilterSection = () => {
  return (
    <List style={{ flex: 1 }}>
      <HStack>
        <Text>Blur</Text>
        <Spacer />
        <Rectangle fill="mint" blur={5} />
      </HStack>
      <HStack>
        <Text>Contrast</Text>
        <Spacer />
        <Rectangle fill="red" contrast={0.7} />
      </HStack>
      <HStack>
        <Text>Saturation</Text>
        <Spacer />
        <Rectangle fill="green" saturation={1} />
      </HStack>
      <HStack>
        <Text>Grayscale</Text>
        <Spacer />
        <Rectangle fill="accentColor" grayscale={0.7} />
      </HStack>
      <HStack>
        <Text>Brightness</Text>
        <Spacer />
        <Rectangle fill="red" brightness={0.3} />
      </HStack>
      <HStack>
        <Text>Blend Mode</Text>
        <Spacer />
        <Rectangle fill="accentColor" blendMode="difference" />
      </HStack>
    </List>
  );
};
