import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function NotablePage2() {
  const data1 = [
    { year: "2020", cases: "128,531", overall: "-", delhi: "-", an: "-", nagaland: "-" },
    { year: "2021", cases: "149,404", overall: "-", delhi: "-", an: "-", nagaland: "-" },
    { year: "2022", cases: "162,449", overall: "36.6", delhi: "134.9", an: "130.0", nagaland: "4.3" },
  ];

  const data2 = [
    { year: "Rape", cases: "Sec. 376 IPC", overall: "93,878", delhi: "99,437", nagaland: "21.1" },
    { year: "Kidnapping and Abduction of Children", cases: "Sec. 363 IPC", overall: "74,284", delhi: "76,069", nagaland: "16.7" },
    { year: "Missing Children Deemed as Kidnapped", cases: "Sec. 363 IPC", overall: "33,053", delhi: "33,650", nagaland: "7.4" },
    { year: "Kidnapping and Abduction of Minor Girls to compel her for marriage", cases: "Sec. 366 IPC", overall: "13,641", delhi: "13,981", nagaland: "3.1" },
    { year: "Exposure and Abandonment", cases: "Sec. 317 IPC", overall: "54,685", delhi: "55,961", nagaland: "12.3" },
  ];

  const styles = {
    accordionHeader: {
      background: "#ffc107",
      color: "#0a2c5f",
      padding: "15px 20px",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "7px",
    },
    subaccordionHeader: {
      color: "#fff",
      background: "#0a2c5f",
      padding: "15px 20px",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "7px",
    },
    th: {
      border: "1px solid #ddd",
      padding: "8px",
      backgroundColor: "#ffc107",
      textAlign: "left",
    },
    td: {
      border: "1px solid #ddd",
      padding: "8px",
      textAlign: "left",
    },
  };

  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5">
          <div className="row">
            <div className="col-12 px-lg-4">
              <h4 className="fw-bold mt-3 bluetxt yellowclr" style={styles.accordionHeader}>
                Crime in India Statistics, National Crime Records Bureau, 2022
              </h4>
              <p className="aboutpara">
                Study conducted by: National Crime Records Bureau, 2022
              </p>

              <h4 className="fw-bold mt-3 bluetxt yellowclr" style={styles.subaccordionHeader}>
                Crimes against children (Overall)
              </h4>

              <div className="main mt-4 aboutpara">
                <p>
                  <span className="fw-bold">
                    1. Overall Crime Trends Against Children (States &amp; UTs):
                  </span>{" "}
                  Crimes against children in all parts of India have been on a steady rise for the last three years. UTs such as Delhi and A&amp;N Islands recorded crime rates exceeding the national average, while Nagaland recorded the lowest rate.
                </p>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                        {["Year", "Cases of Crimes Against Children", "Overall Crime Rate (per lakh child population, 2022)", "Delhi Crime Rate (2022)", "A&N Islands Crime Rate (2022)", "Nagaland Crime Rate (2022)"].map((header, idx) => (
                          <th key={idx} style={{ ...styles.th, minWidth: "150px" }}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data1.map((row, i) => (
                        <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#ffffff" }}>
                          <td style={styles.td}>{row.year}</td>
                          <td style={styles.td}>{row.cases}</td>
                          <td style={styles.td}>{row.overall}</td>
                          <td style={styles.td}>{row.delhi}</td>
                          <td style={styles.td}>{row.an}</td>
                          <td style={styles.td}>{row.nagaland}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="main mt-4 aboutpara">
                <p>
                  <span className="fw-bold">2. Prevalent IPC (Indian Penal Code) Crimes against Children:</span>{" "}
                  Several IPC categories stand out due to their high incidence and number of victims. Numbers also indicate significant vulnerability among very young children.
                </p>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                        {["Crime", "Section", "Incidences", "Victims", "Rate (per lakh child population)"].map((header, idx) => (
                          <th key={idx} style={{ ...styles.th, minWidth: "180px" }}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data2.map((row, i) => (
                        <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#ffffff" }}>
                          <td style={styles.td}>{row.year}</td>
                          <td style={styles.td}>{row.cases}</td>
                          <td style={styles.td}>{row.overall}</td>
                          <td style={styles.td}>{row.delhi}</td>
                          <td style={styles.td}>{row.nagaland}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default NotablePage2;
