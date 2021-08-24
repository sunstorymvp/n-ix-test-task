import Document from 'next/document';

import DocumentRoot from './component';

class DocumentRootContainer extends Document {
  render() {
    return (
      <DocumentRoot />
    );
  }
}

export default DocumentRootContainer;
