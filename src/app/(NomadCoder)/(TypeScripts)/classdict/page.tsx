// 타입스크립트의 클래스를 이용하여 Dict (사전. dictionary) 클래스를 만드세요. Dict 클래스는 아래와 같은 메소드들을 갖고 있어야 합니다.

// add: 단어를 추가함.
// get: 단어의 정의를 리턴함.
// delete: 단어를 삭제함.
// update: 단어를 업데이트 함.
// showAll: 사전 단어를 모두 보여줌.
// count: 사전 단어들의 총 갯수를 리턴함.
// upsert 단어를 업데이트 함. 존재하지 않을시. 이를 추가함. (update + insert = upsert)
// exists: 해당 단어가 사전에 존재하는지 여부를 알려줌.
// bulkAdd: 다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
// bulkDelete: 다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]
type Words = {
  [key: string]: string;
};

abstract class Dicted {
  protected words: Words;
  protected lenth: number;
  constructor() {
    this.words = {};
    this.lenth = 0;
  }
  abstract add(word: Word): boolean;
  abstract get(word: string): string;
  abstract delete(word: string): boolean;
  abstract update(word: Word): boolean;
  abstract showAll(): void;
  abstract count(): number;
  abstract upsert(word: string, definition: string): boolean;
  abstract exists(word: string): boolean;
  abstract bulkAdd(word: Word[]): boolean;
}

class Dict extends Dicted {
  constructor() {
    super();
  }
  add(word: Word): boolean {
    if (word.def === "") {
      return false;
    }
    if (this.words[word.term] === undefined || this.words[word.term] === "") {
      this.words[word.term] = word.def;
      this.lenth += 1;
      return true;
    }
    return false;
  }
  get(word: string): string {
    if (this.words[word] !== undefined || this.words[word] !== "") {
      return this.words[word];
    }
    return "input_error";
  }
  delete(word: string): boolean {
    if (!this.lenth) {
      return false;
    }
    if (this.words[word] !== undefined || this.words[word] !== "") {
      this.words[word] = "";
      this.lenth = -1;
      return true;
    }
    return false;
  }
  update(word: Word): boolean {
    if (this.words[word.term] === undefined || this.words[word.term] === "") {
      this.words[word.term] = word.def;
      return true;
    }
    return false;
  }
  showAll(): void {
    console.log(this.words);
  }
  count(): number {
    return this.lenth;
  }
  upsert(str: string, definition: string): boolean {
    if (this.words[str] === undefined || this.words[str] === "") {
      this.words[str] = definition;
      this.lenth += 1;
      return true;
    } else {
      this.words[str] = definition;
      return true;
    }
  }
  exists(word: string): boolean {
    if (this.words[word] !== undefined || this.words[word] !== "") {
      return true;
    } else return false;
  }
  bulkAdd(word2: Word[]): boolean {
    for (let i = 0; i < word2.length; i++) {
      if (
        this.words[word2[i].term] === undefined ||
        this.words[word2[i].term] === ""
      ) {
        this.words[word2[i].term] = word2[i].def;
        this.lenth += 1;
        return true;
      } else {
        this.words[word2[i].term] = word2[i].def;
        return true;
      }
    }

    return false;
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

// add: 단어를 추가함.
const dict = new Dict();
const kimchi = new Word("kimchi", "한국의 음식");
if (dict.add(kimchi)) {
  console.log(dict);
}

// get: 단어의 정의를 리턴함.
console.log(dict.get("kimchi"));
console.log(dict.get("ggakduki"));

// delete: 단어를 삭제함.
const kochujang = new Word("kochujang", "한국의 장");
if (dict.add(kochujang)) {
  console.log(dict);
}
console.log(dict.delete("kochujang"));
console.log(dict);

// update: 단어를 업데이트 함.
const kochujangkuk = new Word("kochujang", "한국의 고추장 국");
dict.update(kochujangkuk);

// showAll: 사전 단어를 모두 보여줌.
dict.showAll();

// count: 사전 단어들의 총 갯수를 리턴함.
console.log(dict.count);

// upsert 단어를 업데이트 함. 존재하지 않을시. 이를 추가함. (update + insert = upsert)
dict.upsert("donjang", "한국의 된장");
console.log(dict);

// exists: 해당 단어가 사전에 존재하는지 여부를 알려줌.
console.log(dict.exists("donjang"));

// bulkAdd: 다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
const ssamjang = new Word("ssamjang", "한국의 쌈장");
const sonjang = new Word("ssamjang", "한국의 손장");
const kim = new Word("ssamjang", "한국의 김");
const muk = new Word("ssamjang", "한국의 묵");

dict.bulkAdd([ssamjang, sonjang, kim, muk]);
console.log(dict);

// bulkDelete: 다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]
dict.upsert("ssamjang", "한국의 쌈장");

export default function classdict() {
  return (
    <>
      <div></div>
    </>
  );
}
