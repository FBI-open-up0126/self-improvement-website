import classNames from "classnames";
import "./Button.scss";

export type Variation = "primary";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
    variation?: Variation;
}

function Button({ className, variation, ...props }: Props) {
    return (
        <button
            className={classNames(
                "btn",
                { [`btn-${variation}`]: variation },
                className
            )}
            {...props}
        />
    );
}

export default Button;
