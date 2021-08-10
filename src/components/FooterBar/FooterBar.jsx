import React from "react";

// Styles
import "./FooterBar.style.css";

export default function FooterBar() {
	return (
		<>
			<div className="footerBar">
				<span>16 of 32 products</span>
				<img src="/assets/icons/arrow-right.svg" alt="Arrow right icon" />
			</div>
			<div className="footerBar-separator"></div>
		</>
	);
}
