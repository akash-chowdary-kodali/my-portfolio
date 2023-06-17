import "./greeting.css";

export function ScrollSectionDown() {
  const scrollSection = document.getElementById("afternav");
  scrollSection.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}

export const Greeting = () => {
  return (
    <div className="center-greeting">
      <div className="greeting-msg">
        <article>Hello</article>
      </div>
        <div onClick={ScrollSectionDown}className="down-arrow"></div>
    </div>
  );
};
