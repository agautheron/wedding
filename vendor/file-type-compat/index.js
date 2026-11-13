'use strict';

// gatsby-core-utils appelle `FileType.fromFile()` (API de file-type v16, en
// CommonJS). Les versions corrigées de file-type (>= 21.3.1, alerte Dependabot
// #849) renomment ces fonctions et ne sont publiées qu'en ESM. Ce module
// garde l'ancienne API et délègue à file-type 21 via un import dynamique.

let esm;
const load = () => {
  esm = esm || import('file-type-esm');
  return esm;
};

module.exports = {
  fromFile: async path => (await load()).fileTypeFromFile(path),
  fromBuffer: async buffer => (await load()).fileTypeFromBuffer(buffer),
  fromStream: async stream => (await load()).fileTypeFromStream(stream),
};
