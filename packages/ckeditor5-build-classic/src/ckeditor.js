/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import ImageTextAlternative from '@ckeditor/ckeditor5-image/src/imagetextalternative';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';

export default class ClassicEditor extends ClassicEditorBase {}

console.log('Unieditor v6 inited.');

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Essentials,
  Autoformat,
  Bold,
  Italic,
  BlockQuote,
  Heading,
  Image,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  ImageResize,
  ImageInsert,
  ImageTextAlternative,
  ImageCaption,
  AutoImage,
  LinkImage,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  GeneralHtmlSupport,
  SourceEditing
];

// Editor configuration.
ClassicEditor.defaultConfig = {
  toolbar: {
  items: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'blockQuote',
      '|',
      'insertImage',
      'mediaEmbed',
      '|',
      'undo',
      'redo',
      '|',
      'sourceEditing'
  ],
  },
  image: {
  styles: ['full', 'alignLeft', 'alignCenter', 'alignRight'],
  resizeUnit: "%",
  resizeOptions: [
      {
		name: 'resizeImage:original',
		icon: 'original',
		value: null
      },
      {
		name: 'resizeImage:15',
		icon: 'small',
		value: '15',
      },
      {
		name: 'resizeImage:20',
		icon: 'medium',
		value: '20',
      },
      {
		name: 'resizeImage:50',
		icon: 'large',
		value: '50',
      },
  ],

  // You need to configure the image toolbar, too, so it shows the new style
  // buttons as well as the resize buttons.
  toolbar: [
      'imageStyle:block',
      'imageStyle:alignLeft',
      'imageStyle:alignRight',
      '|',
      'resizeImage',
      '|',
	  'imageTextAlternative',
	  'toggleImageCaption',
      'linkImage',
  ],
  },
  htmlSupport: {
  allow: [
    {
      name: 'audio',
      attributes: true,
      classes: true,
      styles: true
    },
    {
      name: 'div',
      attributes: true,
      classes: true,
      styles: true
    },
    {
      name: 'video',
      attributes: true,
      classes: true,
      styles: true
    }
  ]},
  mediaEmbed: {
  removeProviders: [ 'googleMaps', 'flickr', 'facebook' ]
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en',
};
