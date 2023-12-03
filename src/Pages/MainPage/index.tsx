import BgVideo from "../../Components/BgVideo";
import Button from "../../Components/Button";
import Content from "../../Components/Content";
import "./index.scss";
import selfImproveVideo from "assets/videos/self-improve-general.mp4";

function MainPage() {
	return (
		<main className="main-page">
			<section className="section-intro">
				<BgVideo autoPlay muted loop>
					<source src={selfImproveVideo}></source>
				</BgVideo>
				<Content>
					<h1>A Place for You to Become Better</h1>
					<p>
						Daily motivational quote, todo list to help you become
						more focused, hundreds of articles for self improvement,
						this website has everything for you to become a better
						self.
					</p>
					<Button variation="primary">Get started</Button>
				</Content>
			</section>
		</main>
	);
}

export default MainPage;
