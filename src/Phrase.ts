var SortedSet = require("collections/sorted-set");

export class Phrase {

  private _phrase: string;

  constructor(texte: string) {
    this._phrase = texte;
  }

  unique(): string[] {
    return this.unique_str(this._phrase);
  }

  intersection(phraseToIntersect: string): string[] {
    let words1: string[] = this.unique();
    let words2: string[] = this.unique_str(phraseToIntersect);
    return words1.filter(value => words2.includes(value))
  }

  private unique_str(phrase: string): string[] {

    let words = phrase.replace(/[\.\/]|’./gm, ' ')
      .replace(/\s{2,}/gm, ' ')
      .trim()
      .split(' ');

    return new SortedSet(words).toArray();
  }
}
