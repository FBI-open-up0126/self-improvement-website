export type Variation = "primary";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
    variation?: Variation;
}

function Button({ ...props }: Props) {
    return <button {...props} />;
}

export default Button;
