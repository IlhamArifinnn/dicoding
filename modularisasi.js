/**
 * TODO:
 * 1. Impor fungsi unique dari utils.mjs secara default
 * 2. Impor fungsi splitString dari utils.mjs secara named
 *
 * Catatan.
 * Jangan ubah kode apa pun yang sudah tersedia sebelumnya
 */

import { unique } from "./utils.mjs";
import { splitString } from "./utils";

const string = "saippuakivikauppias";
const array = splitString(string);
const uniqueArray = unique(array);

console.log(string);
console.log(array);
console.log(uniqueArray);
