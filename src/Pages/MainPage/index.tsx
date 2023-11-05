import Button from "../../Components/Button";
import "./index.scss";

function MainPage() {
    return (
        <main className="main-page">
            <section className="section-intro">
                <h1>A Place for You to Become Better</h1>
                <p>
                    Daily motivational quote, todo list to help you become more
                    focused, hundreds of articles for self improvement, this
                    website has everything for you to become a better self.
                </p>
                <Button>Get Started</Button>
            </section>
        </main>
    );
}

export default MainPage;
