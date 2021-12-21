import { EditorElementsWithAlignment } from './editor-elements-with-alignment/editor-elements-with-alignment';

import { EditorElementsHeading as HeadingComponent } from './editor-elements-heading/editor-elements-heading';
export const EditorElementsHeading = EditorElementsWithAlignment(HeadingComponent);

export type { EditorElementsImageProps } from './editor-elements-image/editor-elements-image';
export { EditorElementsImage } from './editor-elements-image/editor-elements-image';

export type { EditorElementsLinkProps } from './editor-elements-link/editor-elements-link';
import { EditorElementsLink as LinkComponent } from './editor-elements-link/editor-elements-link';
export const EditorElementsLink = EditorElementsWithAlignment(LinkComponent);

export {
  EditorElementsOrderedList,
  EditorElementsUnorderedList,
  EditorElementsListItem,
} from './editor-elements-list/editor-elements-list';

export { EditorElementsSeparator } from './editor-elements-separator/editor-elements-separator';

export {
  EditorElementsTable,
  EditorElementsTableCell,
  EditorElementsTableRow,
} from './editor-elements-table/editor-elements-table';

import { EditorElementsText as TextComponent } from './editor-elements-text/editor-elements-text';
export const EditorElementsText = EditorElementsWithAlignment(TextComponent);

export { EditorElementsQuote } from './editor-elements-quote/editor-elements-quote';
