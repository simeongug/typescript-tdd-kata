import {Phrase} from './Phrase';

export class MockPhrase extends Phrase {
  constructor(phrase: string){
    super(phrase);
  }

  intersection(phrase: string ): string[] {
    return ["data", "the", "to", "way"]
  }
  duplicate(): Phrase {
    return new Question(lasjkfkljsalf);
  }
}