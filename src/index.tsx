/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import createReactNativeComponentClass from 'react-native/Libraries/Renderer/shims/createReactNativeComponentClass';
import { createViewConfig } from 'react-native/Libraries/NativeComponent/ViewConfig';
import { Text, Platform } from 'react-native';

const textViewConfig = {
  validAttributes: {
    isHighlighted: true,
    isPressable: true,
    numberOfLines: true,
    ellipsizeMode: true,
    allowFontScaling: true,
    dynamicTypeRamp: true,
    maxFontSizeMultiplier: true,
    disabled: true,
    selectable: true,
    selectionColor: true,
    adjustsFontSizeToFit: true,
    minimumFontScale: true,
    textBreakStrategy: true,
    onTextLayout: true,
    onInlineViewLayout: true,
    dataDetectorType: true,
    android_hyphenationFrequency: true,
    lineBreakStrategyIOS: true,
  },
  directEventTypes: {
    topTextLayout: {
      registrationName: 'onTextLayout',
    },
    topInlineViewLayout: {
      registrationName: 'onInlineViewLayout',
    },
  },
  uiViewClassName: 'RCTTextImproved',
};

const NativeTextImproved = createReactNativeComponentClass(
  'RCTTextImproved',
  () => createViewConfig(textViewConfig)
);

export const TextImproved = (props: any) => {
  const TextComponent =
    Platform.OS == 'ios' ? (
      <Text {...props} />
    ) : (
      <NativeTextImproved {...props} />
    );
  return TextComponent;
};
