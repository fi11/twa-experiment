import { Example } from "cookbook";
import { Button } from "./Button";

const Main = () => {
    return (
        <Example>
            <Button label={"Click me"} />
        </Example>
    );
};

const Secondary = () => {
    return (
        <Example>
            <Button label={"Send"} />
        </Example>
    );
};

export default {
    Main,
    Secondary,
};
