import classNames from "classnames";
import "./Content.scss";

interface Props extends React.ComponentPropsWithoutRef<"div"> {}

export default function Content({ className, ...props }: Props) {
	return <div className={classNames("content", className)} {...props} />;
}
