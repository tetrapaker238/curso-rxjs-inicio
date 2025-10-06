import { asyncScheduler, of, range, scheduled } from "rxjs";

// const src$ = range(1, 5, asyncScheduler); Deprecado el constructor

console.log("inicio");
// src$.subscribe(console.log);
scheduled(range(1, 5), asyncScheduler).subscribe(console.log);
console.log("fin");
