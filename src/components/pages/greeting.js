import "./css/greeting.css";

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
        <article>Namaste</article>
      </div>
        <div onClick={ScrollSectionDown}class="down-arrow"></div>
    </div>
  );
};
