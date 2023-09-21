import applyWrapFormat from './applyWrapFormat';
import applyWrapFormatNewLines from './applyWrapFormatNewLines';
import applyListFormat from './applyListFormat';
import applyWebLinkFormat from './applyWebLinkFormat';
import applyOrderList from 'react-native-markdown-editor/lib/src/applyOrderList';

export default [
  { key: 'B', title: 'B', wrapper: '**', onPress: applyWrapFormat, style: { fontWeight: 'bold' } },
  { key: 'I', title: 'I', wrapper: '*', onPress: applyWrapFormat, style: { fontStyle: 'italic' } },
  {
    key: 'U',
    title: 'U',
    wrapper: '__',
    onPress: applyWrapFormat,
    style: { textDecorationLine: 'underline' },
  },
  {
    key: 'S',
    title: 'S',
    wrapper: '~~',
    onPress: applyWrapFormat,
    style: { textDecorationLine: 'line-through' },
  },
  { key: 'L', title: 'L', prefix: '-', onPress: applyListFormat },
];
