import startDb from "./db";
import startApi from "./api";

(async () => {
	await startDb();
	await startApi();
})();
