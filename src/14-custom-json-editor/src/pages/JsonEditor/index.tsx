import JSONEditor, { ParseError, SchemaValidationError } from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';
import './index.less';

const jsonData = {
  type: 'params-validation',
  mode: 'json-schema',
  rule: {
    $schema: 'http://json-schema.org/draft-04/schema#',
    type: 'object',
    properties: {
      cmd: {
        type: 'integer',
        const: 1,
      },
      data: {
        type: 'object',
        properties: {
          state: {
            type: 'integer',
            enum: [2, 3],
          },
        },
        required: ['state'],
      },
    },
    required: ['cmd', 'data'],
  },
};

import React, { Component } from 'react';

export default class JsonEditor extends Component {
  private container: HTMLDivElement | null = null;
  private jsonEditor: any;

  componentDidMount(): void {
    this.jsonEditor = new JSONEditor(this.container as HTMLDivElement, {
      mode: 'code',
      onChangeText: this.changeJson,
      onError: this.onError,
      onValidationError: this.onValidationError,
    });
    this.jsonEditor.set(jsonData);
  }

  private changeJson(json: any): void {
    console.log(json);
  }

  private onError(error: Error) {
    console.log('error', error);
  }

  private onValidationError(
    errors: readonly (SchemaValidationError | ParseError)[],
  ): void {
    console.log('errors', errors);
  }

  render() {
    return (
      <div
        className="jsoneditor-react-container"
        ref={(elem) => (this.container = elem)}
      />
    );
  }
}
