import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</div>

						<div className="subtitle contact-subtitle">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit sapien, fermentum eu varius ut, auctor eu justo. Curabitur et luctus sem. Vivamus tellus sapien, porta ut neque molestie, convallis porta lorem. Donec commodo, arcu id iaculis iaculis, magna lorem gravida enim, ornare condimentum arcu justo ut lectus. In hac habitasse platea dictumst. Ut accumsan ultricies facilisis. Sed accumsan velit nec mi fringilla dapibus. Nulla eleifend sapien in luctus sodales.{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							. Vivamus tellus sapien, porta ut neque molestie, convallis porta lorem. Donec commodo, arcu id iaculis iaculis, magna lorem gravida enim, ornare condimentum arcu justo ut lectus. In hac habitasse platea dictumst. Ut accumsan ultricies facilisis. Sed accumsan velit nec mi fringilla dapibus. Nulla eleifend sapien in luctus sodales!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
