import { main } from "./main";

main()
    .then(out => {
        console.log("Result", out);
        process.exit(0);
    })
    .catch((err: Error) => {
        console.error("Error", err);
        process.exit(1);
    });
