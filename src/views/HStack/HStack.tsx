import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useLifecycle } from '../../hooks/useLifecycle';
import { WithChildren, Modifiers } from '../../utils/modifiers';
import { Alignments, VerticalAlignment } from '../../utils/alignments';
import { getBorder } from '../../utils/border';
import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getShadow } from '../../utils/shadow';
import { getCornerRadius } from '../../utils/cornerRadius';

type HStackProps = Modifiers &
  WithChildren & {
    spacing?: number;
    alignment?: VerticalAlignment;
  };

export const HStack = ({
  spacing,
  alignment = 'center',
  children,
  padding,
  cornerRadius,
  shadow,
  backgroundColor,
  border,
  opacity,
  frame,
  zIndex,
  style,
  onAppear,
  onDisappear,
}: HStackProps) => {
  useLifecycle(onAppear, onDisappear);
  return (
    <View
      style={[
        styles.hStack,
        {
          alignItems: Alignments.vertical[alignment],
          backgroundColor,
          opacity,
          zIndex,
          ...getCornerRadius(cornerRadius),
          ...getShadow(shadow),
          ...getPadding(padding),
          ...getFrame(frame),
          ...getBorder(border),
        },
        style,
      ]}
    >
      {spacing && spacing !== 0
        ? React.Children.map(children, (child) => (
            <>
              <View style={{ width: spacing }} />
              {child}
              <View style={{ width: spacing }} />
            </>
          ))
        : children}
    </View>
  );
};

const styles = StyleSheet.create({
  hStack: {
    flexDirection: 'row',
  },
});