var SortedSet = require("collections/sorted-set");

export class Phrase {
  private phrase: string

  constructor(phrase: string) {
    this.phrase = phrase
  }

  unique(): string[] {
    return this.extract_unique_words(this.phrase);
  }

  intersection(texte: string): string[] {
    let array1: string[] = this.unique();
    let array2: string[] = this.extract_unique_words(texte);

    return array1.filter(value => array2.includes(value))
  }


  private extract_unique_words(texte: string): string[] {
    var ponctuation = /[,\.;]/gm;
    
    console.log('$'+texte.replace(ponctuation, '')+'$')
    let words_array: string[] = texte.replace(re, ' ').replace(/\s\s+/gm, ' ').split(' ');
    let words = new SortedSet(words_array);
    return Array.from(words);
  }
}

