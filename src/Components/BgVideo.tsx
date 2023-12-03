import classNames from "classnames";
import "./BgVideo.scss";

interface Props extends React.ComponentPropsWithoutRef<"video"> {}

export default function BgVideo({ className, ...props }: Props) {
	return (
		<div className="bg-video">
			<video
				className={classNames("bg-video__content", className)}
				{...props}
			/>
		</div>
	);
}
