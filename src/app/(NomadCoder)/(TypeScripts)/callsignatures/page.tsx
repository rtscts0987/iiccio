// last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
// prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.
// mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
// count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
// findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
// slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다. 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 이때 세번째 매개변수는 필수 매개변수가 아닙니다.

// last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.

type Last = {
  <T>(arr: T[]): T;
};

const last: Last = (arr) => {
  return arr[arr.length - 1];
};
const a = last([1, 2, 3, 4, 5]);

// prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.
type Prepend = {
  <T>(arr: T[], item: T): T[];
};
const prepend: Prepend = (arr, item) => {
  let temp: any[] = [];
  temp.push(item);
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr.pop());
  }
  return temp;
};
const b = prepend([1, 2, 3, 4, 5], 5);

// mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
type Mix = {
  <T>(arr1: T[], arr2: T[]): T[];
};
const mix: Mix = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return [-1];
  }
  let arr: any[] = [];
  for (let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i]);
    arr.push(arr2[i]);
  }
  return arr;
};
const c = mix([1, 2, 3, 4, 5], [11, 12, 13, 14, 15]);

// count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
type Count = {
  <T>(arr: T[]): number;
};
const count: Count = (arr) => {
  let count: number;
  return arr.length;
};
const d = count([1, 2, 3, 4, 5, 6, 7]);

// findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후
// 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
type FindIndex = {
  <T>(arr: T[], item: number): number | null;
};
const findIndex: FindIndex = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (item == arr.pop()) {
      return item;
    }
  }
  return null;
};
const e1 = findIndex([1, 2, 3, 4, 5], 4); // 4
const e2 = findIndex([1, 2, 3, 4, 5], 9); // null

// slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다.
//첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 이때 세번째 매개변수는 필수 매개변수가 아닙니다.
type Slice = {
  <T>(arr: T[], startIndex: number, endIndex: number): T[];
};
const slice: Slice = (arr, startIndex, endIndex) => {
  let data: any[] = [];
  let temp: any[] = [];
  if (startIndex > endIndex) {
    return [-1];
  }
  if (arr.length < startIndex) {
    return [-1];
  }
  for (let i = 0; i < endIndex; i++) {
    if (i < startIndex) {
      temp.push(arr.pop());
      continue;
    }
    data.push(arr.pop());
  }
  return data;
};
const f1 = slice([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 5);
const f2 = slice([1, 2, 3, 4, 5, 6, 7, 8, 9], 5, 2);
const f3 = slice([1, 2, 3, 4, 5, 6, 7, 8, 9], 20, 21);

export default function Callsigntures() {
  return (
    <>
      <div className="text-center">
        <p>last([1, 2, 3, 4, 5]) : {a}</p>
        <p>prepend([1, 2, 3, 4, 5], 5) : [{b.toString()}]</p>
        <p>mix([1, 2, 3, 4, 5], [11, 12, 13, 14, 15]) : [{c.toString()}]</p>
        <p>count([1, 2, 3, 4, 5, 6, 7]) : {d}</p>
        <p>findIndex([1, 2, 3, 4, 5], 4) : {e1}</p>
        <p>findIndex([1, 2, 3, 4, 5], 9) : {e2 ? e2.toString() : "NULL"}</p>
        <p>slice([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 5) : [{f1.toString()}]</p>
        <p>slice([1, 2, 3, 4, 5, 6, 7, 8, 9], 5, 2) : {f2}</p>
        <p>slice([1, 2, 3, 4, 5, 6, 7, 8, 9], 20, 21) : {f3}</p>
      </div>
    </>
  );
}
