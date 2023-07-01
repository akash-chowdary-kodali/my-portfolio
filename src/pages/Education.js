import "./css/edu.css"

export const Edu= () => {
    return(
        <div className="edubody">
        <p className="headingS">Education</p>
        <section className="timeline-section">
          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2020 - 2024</div>
              <div className="timeline-content">
                <h3>
                  GITAM Deemed to be university
                  <br />
                  <sub>Visakhapatnam, India</sub>
                </h3>
                <p>Computer Science and Engineering</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2018 - 2020</div>
              <div className="timeline-content">
                <h3>
                  Narayana Junior college <sub>Vijayawada, India</sub>
                </h3>
                <p>+1 & +2</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2018</div>
              <div className="timeline-content">
                <h3>
                  veeramachaneni siddhartha public school{" "}
                  <sub>Vijayawada, India</sub>
                </h3>
                <p>10th Standard</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}