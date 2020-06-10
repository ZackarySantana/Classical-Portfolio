export const scrollToHome = () => {
	let element = document.getElementById("introduction-section");
	if (element) element.scrollIntoView();
}

export const scrollToResume = () => {
	let element = document.getElementById("resume-section");
	if (element) element.scrollIntoView();
}

export const scrollToProjects = () => {
	let element = document.getElementById("projects-section");
	if (element) element.scrollIntoView();
}

export const scrollToContactMe = () => {
	let element = document.getElementById("contact-me-section");
	if (element) element.scrollIntoView();
}

export const openGithub = () => {
	window.open("https://github.com/ZackarySantana/", "_blank");
}

export const openLinkedIn = () => {
	window.open("https://www.linkedin.com/in/zackary-santana-47a01b1a6", "_blank");
}
