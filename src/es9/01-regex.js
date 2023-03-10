const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec("2023-01-16");
console.table(matchers);

/*  ┌─────────┬──────────────┐
    │ (index) │    Values    │
    ├─────────┼──────────────┤
    │    0    │ '2023-01-16' │
    │    1    │    '2023'    │
    │    2    │     '01'     │
    │    3    │     '16'     │
    │  index  │      0       │
    │  input  │ '2023-01-16' │
    │ groups  │  undefined   │
    └─────────┴──────────────┘ */