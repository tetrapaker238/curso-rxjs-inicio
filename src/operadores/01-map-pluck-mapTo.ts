import { fromEvent, map, mapTo, pluck, range } from "rxjs";

// range(1, 5)
//   .pipe(map<number, string>((value) => (value * 10).toString()))
//   .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyupCode$ = keyup$.pipe(map((event) => event.code));

const keyupPluck$ = keyup$.pipe(pluck("target", "baseURI"));

const keyupMapTo$ = keyup$.pipe(mapTo(1));

keyup$.subscribe(console.log);
keyupCode$.subscribe((code) => console.log("map", code));
keyupPluck$.subscribe((code) => console.log("pluck", code));
keyupMapTo$.subscribe((code) => console.log("mapTo", code));
