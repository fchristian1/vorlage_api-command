import startDb from "./db";
import startApi from "./api";

(() => {
  startDb();
  startApi();
})();
