import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import image from "../assets/Images/notableimage.png";

function NotablePage2() {
  const data1 = [
    {
      year: "2020",
      cases: "128,531",
      overall: "-",
      delhi: "-",
      an: "-",
      nagaland: "-",
    },
    {
      year: "2021",
      cases: "149,404",
      overall: "-",
      delhi: "-",
      an: "-",
      nagaland: "-",
    },
    {
      year: "2022",
      cases: "162,449",
      overall: "36.6",
      delhi: "134.9",
      an: "130.0",
      nagaland: "4.3",
    },
  ];

  const data2 = [
    {
      year: "Rape",
      cases: "Sec. 376 IPC",
      overall: "93,878",
      delhi: "99,437",
      nagaland: "21.1",
    },
    {
      year: "Kidnapping and Abduction of Children",
      cases: "Sec. 363 IPC",
      overall: "74,284",
      delhi: "76,069",
      nagaland: "16.7",
    },
    {
      year: "Missing Children Deemed as Kidnapped",
      cases: "Sec. 363 IPC",
      overall: "33,053",
      delhi: "33,650",
      nagaland: "7.4",
    },
    {
      year: "Kidnapping and Abduction of Minor Girls to compel her for marriage",
      cases: "Sec. 366 IPC",
      overall: "13,641",
      delhi: "13,981",
      nagaland: "3.1",
    },
    {
      year: "Exposure and Abandonment",
      cases: "Sec. 317 IPC",
      overall: "54,685",
      delhi: "55,961",
      nagaland: "12.3",
    },
  ];
  const data3 = [
    {
      Law: "POCSO Act",
      Incidents: "20,753 (of which 20,494 are u/Ss. 4 & 6)",
      Victims: "21,167 (of which 20,902 are u/Ss. 4 & 6)",
    },

    { Law: "Other SLL crimes", Incidents: "68,571", Victims: "70,810" },

    {
      Law: "Child Labour (Prohibition & Regulation) Act",
      Incidents: "1,360",
      Victims: "1,384",
    },

    {
      Law: "Cyber Crimes/Information Technology Act",
      Incidents:
        "172 (of which 157 are Publishing/Transmitting sexually explicit material)",
      Victims:
        "218 (of which 203 are Publishing/Transmitting sexually explicit material)",
    },
  ];
  const data4 = [
    { Law: "Pending Cases (Previous Year)", Number: "484,657" },
    { Law: "New Cases Sent for Trial", Number: "103,557" },
    { Law: "Total Cases for Trial", Number: "588,214" },
    { Law: "Cases Disposed", Number: "46,414" },
    { Law: "Pending Cases (End of Year)", Number: "541,800" },
  ];
  const data5 = [
    {
      Crime: "Total crimes against children",
      Conviction: "33.6",
      Trial: "92.1",
    },
    { Crime: "POCSO Act cases	31.7	89.2", Conviction: "	31.7	", Trial: "89.2" },
  ];
  const data6 = [
    {
      Age: "Below 6 years",
      Girls: "806",
      Boys: "37",
      Transgender: "0",
      Victims: "843",
    },
    {
      Age: "6 to 12 years",
      Girls: "3,100",
      Boys: "118",
      Transgender: "0",
      Victims: "3,218",
    },
    {
      Age: "12 to 16 years",
      Girls: "14,601",
      Boys: "199",
      Transgender: "0",
      Victims: "14,800",
    },
    {
      Age: "16 to 18 years",
      Girls: "19,523",
      Boys: "60",
      Transgender: "0",
      Victims: "19,583",
    },
    {
      Age: "Total Child Victims",
      Girls: "38,030",
      Boys: "414",
      Transgender: "0",
      Victims: "38,444",
    },
  ];

  const data7 = [
    {
      Relationship:
        "Friends/Online-Friends or Live in Partners on Pretext of Marriage",
      Number: "19,765",
    },
    {
      Relationship: "Friends/Neighbors/Employer or Other Known Persons",
      Number: "13,641",
    },
    { Relationship: "Family Members", Number: "3,276" },
    { Relationship: "Unknown or Not Identified", Number: "1,225" },
  ];
  const data8 = [
    { Area: "Metropolitan Cities", Number: "20,550", Charge: "46.9%" },
    { Area: "Delhi", Number: "7,400", Charge: "32.7%" },
    { Area: "Patna", Number: "127", Charge: "100%" },
  ];

  const data9 = [
    {
      Crime: "Rape",
      Incidents: "13,178",
      Total: "14,384",
      Delhi: "5,668",
      Victims: "6,428",
    },
    {
      Crime: "Exposure and Abandonment",
      Incidents: "11,112",
      Total: "11,681",
      Delhi: "5,314",
      Victims: "5,579",
    },
    {
      Crime: "Kidnapping and Abduction of Children",
      Incidents: "11,567",
      Total: "12,145",
      Delhi: "5,323",
      Victims: "5,590",
    },
    {
      Crime: "Missing Children Deemed as Kidnapped",
      Incidents: "6,489",
      Total: "6,760",
      Delhi: "2,660",
      Victims: "2,785",
    },
    {
      Crime: "Assault on Women with Intent to Outrage her Modesty",
      Incidents: "3,956",
      Total: "4,040",
      Delhi: "0",
      Victims: "0",
    },
  ];
  const data10 = [
    {
      Crime: "POCSO Act",
      Incidents: "2,237 (of which 2,193 are u/Ss. 4 & 6)",
      Victims: "2,263 (of which 2,219 are u/Ss. 4 & 6)",
    },
    {
      Crime: "Cyber Crimes / Information Technology Act",
      Incidents: "27",
      Victims: "33",
    },
    {
      Crime: "Child Labour (Prohibition & Regulation) Act",
      Incidents: "238",
      Victims: "251",
    },
  ];
  const data11 = [
    {
      Police: "Cases Pending from Previous Year",
      Number: "20,962",
    },
    {
      Police: "Cases Reported During Year",
      Number: "20,550",
    },
    {
      Police: "Total Cases for Investigation",
      Number: "41,672",
    },
    {
      Police: "Cases Disposed",
      Number: "18,362",
    },
    {
      Police: "Cases Pending at Year End",
      Number: "23,298",
    },
  ];
  const data12 = [
    {
      Crime: "Overall",
      Chargesheeting: "46.9",
      Pendency: "55.9",
    },
    {
      Crime: "POCSO Act cases",
      Chargesheeting: "95.2",
      Pendency: "42.0",
    },
  ];
  const data13 = [
    {
      Court: "Pending Cases from Previous Year",
      Number: "61,502",
    },
    {
      Court: "New Cases Sent for Trial",
      Number: "8,618",
    },
    {
      Court: "Total Cases for Trial in 2022",
      Number: "70,120",
    },
    {
      Court: "Cases Disposed",
      Number: "3,589",
    },
    {
      Court: "Cases Remaining Pending at Year End",
      Number: "66,531",
    },
  ];
  const data15 = [
    {
      Processing: "Charge-sheeted",
      Male: "1,215",
      Female: "17",
    },
    {
      Processing: "Convicted",
      Male: "2,496",
      Female: "56",
    },
    {
      Processing: "Discharged",
      Male: "11,247",
      Female: "449",
    },
    {
      Processing: "Acquitted",
      Male: "10,218",
      Female: "351",
    },
  ];
  const data16 = [
    {
      Year: "2020",
      Cases: "12,852",
    },
    {
      Year: "2021",
      Cases: "15,362",
    },
    {
      Year: "2022",
      Cases: "17,505",
    },
  ];
  const data17 = [
    {
      area: "Overall",
      rate: "1.8",
    },
    {
    area: "Uttar Pradesh",
    rate: "853.3",
  },
  {
    area: "Maharashtra",
    rate: "361.1",
  },
  {
    area: "West Bengal",
    rate: "300.0",
  },
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
              <h4
                className="fw-bold mt-3 bluetxt yellowclr"
                style={styles.accordionHeader}
              >
                Crime in India Statistics, National Crime Records Bureau, 2022
              </h4>
              <p className="aboutpara">
                Study conducted by: National Crime Records Bureau, 2022
              </p>

              <h4
                className="fw-bold mt-3 bluetxt yellowclr"
                style={styles.subaccordionHeader}
              >
                Crimes against children (Overall)
              </h4>

              <div className="main mt-4 aboutpara">
                <p>
                  <span className="fw-bold">
                    1. Overall Crime Trends Against Children (States &amp; UTs):
                  </span>{" "}
                  Crimes against children in all parts of India have been on a
                  steady rise for the last three years. UTs such as Delhi and
                  A&amp;N Islands recorded crime rates exceeding the national
                  average, while Nagaland recorded the lowest rate.
                </p>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                        {[
                          "Year",
                          "Cases of Crimes Against Children",
                          "Overall Crime Rate (per lakh child population, 2022)",
                          "Delhi Crime Rate (2022)",
                          "A&N Islands Crime Rate (2022)",
                          "Nagaland Crime Rate (2022)",
                        ].map((header, idx) => (
                          <th
                            key={idx}
                            style={{ ...styles.th, minWidth: "150px" }}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data1.map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#f2f2f2" : "#ffffff",
                          }}
                        >
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
                  <span className="fw-bold">
                    2. Prevalent IPC (Indian Penal Code) Crimes against
                    Children:
                  </span>{" "}
                  Several IPC categories stand out due to their high incidence
                  and number of victims. Numbers also indicate significant
                  vulnerability among very young children.
                </p>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                        {[
                          "Crime",
                          "Section",
                          "Incidences",
                          "Victims",
                          "Rate (per lakh child population)",
                        ].map((header, idx) => (
                          <th
                            key={idx}
                            style={{ ...styles.th, minWidth: "180px" }}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data2.map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#f2f2f2" : "#ffffff",
                          }}
                        >
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

              <div className="main mt-4 aboutpara">
                <p>
                  <span className="fw-bold">
                    3. Prevalent SLL (Special & Local Laws) Crimes against
                    Children:
                  </span>{" "}
                  The Protection of Children from Sexual Offences Act (POCSO
                  Act) is the most significant SLL crime category and within the
                  same, 95.75% of the victims were girls.
                </p>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                        {["Law/Act", "Incidents/Cases", "Victims"].map(
                          (header, idx) => (
                            <th
                              key={idx}
                              style={{ ...styles.th, minWidth: "180px" }}
                            >
                              {header}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {data3.map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#f2f2f2" : "#ffffff",
                          }}
                        >
                          <td style={styles.td}>{row.Law}</td>
                          <td style={styles.td}>{row.Incidents}</td>
                          <td style={styles.td}>{row.Victims}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="main mt-4 aboutpara">
                <p>
                  <span className="fw-bold">4. Court Disposal of Cases:</span>{" "}
                  The judiciary faces significant challenges in case disposal.
                </p>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                        {[
                          "Court disposal metric ",
                          "Number of Cases in 2022",
                        ].map((header, idx) => (
                          <th
                            key={idx}
                            style={{ ...styles.th, minWidth: "180px" }}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data4.map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#f2f2f2" : "#ffffff",
                          }}
                        >
                          <td style={styles.td}>{row.Law}</td>

                          <td style={styles.td}>{row.Number}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="main mt-4 aboutpara">
                <p>
                  <span className="fw-bold">4. Court Disposal of Cases:</span>{" "}
                  The judiciary faces significant challenges in case disposal.
                </p>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                        {[
                          "Crime Category	",
                          "Conviction Rate (%)	",
                          "Trial Pendency (%)",
                        ].map((header, idx) => (
                          <th
                            key={idx}
                            style={{ ...styles.th, minWidth: "180px" }}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data5.map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#f2f2f2" : "#ffffff",
                          }}
                        >
                          <td style={styles.td}>{row.Crime}</td>
                          <td style={styles.td}>{row.Conviction}</td>
                          <td style={styles.td}>{row.Trial}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="main mt-4 aboutpara">
                <p>
                  <span className="fw-bold">5. POCSO Act:</span> Victimisation
                  figures indicate that younger children, especially girls, are
                  highly vulnerable to sexual offences. A critical trend
                  highlighted is that 96.8% of offenders in POCSO Act cases are
                  known to the victim.
                </p>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                        {[
                          "Age Group",
                          "Girls",
                          "Boys",
                          "Transgender",
                          "	Total POCSO Victims",
                        ].map((header, idx) => (
                          <th
                            key={idx}
                            style={{ ...styles.th, minWidth: "180px" }}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data6.map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#f2f2f2" : "#ffffff",
                          }}
                        >
                          <td style={styles.td}>{row.Age}</td>
                          <td style={styles.td}>{row.Girls}</td>
                          <td style={styles.td}>{row.Boys}</td>
                          <td style={styles.td}>{row.Transgender}</td>
                          <td style={styles.td}>{row.Victims}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div style={{ overflowX: "auto" }} className="mt-4">
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                        {[
                          "Relationship to the victim",
                          "Number of POCSO Cases in 2022",
                        ].map((header, idx) => (
                          <th
                            key={idx}
                            style={{ ...styles.th, minWidth: "180px" }}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data7.map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#f2f2f2" : "#ffffff",
                          }}
                        >
                          <td style={styles.td}>{row.Relationship}</td>
                          <td style={styles.td}>{row.Number}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <h4
                className="fw-bold mt-3 bluetxt yellowclr"
                style={styles.subaccordionHeader}
              >
                Crimes Against Children (Metropolitan Cities)
              </h4>

              <p className="aboutpara">
                Trends highlight the increasing challenge of crime against
                children in India's major cities, the significant burden on the
                police and judicial systems, and the low conviction rates
                despite a high number of reported cases.
              </p>

              <div className="main mt-4 aboutpara">
                <p>
                  <span className="fw-bold">
                    1. General Trends in Crime Against Children (Metropolitan
                    Cities):{" "}
                  </span>{" "}
                  The total number of incidents of crime against children in
                  metropolitan cities has steadily increased over the last three
                  years. The City of Delhi had the highest number of cases and
                  Patna had the best charge-sheeting rate.
                </p>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                        {[
                          "Area",
                          "Number of Cases in 2022",
                          "Charge-sheeting rate",
                        ].map((header, idx) => (
                          <th
                            key={idx}
                            style={{ ...styles.th, minWidth: "180px" }}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data8.map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#f2f2f2" : "#ffffff",
                          }}
                        >
                          <td style={styles.td}>{row.Area}</td>

                          <td style={styles.td}>{row.Number}</td>
                          <td style={styles.td}>{row.Charge}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="main mt-4 aboutpara">
                <p>
                  <span className="fw-bold">
                    2. Prevalent IPC (Indian Penal Code) Crimes against Children
                    in Cities:
                  </span>{" "}
                  Several IPC categories show significant incidence.
                </p>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                        {[
                          "Crime",
                          "Total Incidents",
                          "Total Victims",
                          "Delhi Incidents",
                          "Delhi Incidents",
                        ].map((header, idx) => (
                          <th
                            key={idx}
                            style={{ ...styles.th, minWidth: "180px" }}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data9.map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#f2f2f2" : "#ffffff",
                          }}
                        >
                          <td style={styles.td}>{row.Crime}</td>

                          <td style={styles.td}>{row.Incidents}</td>
                          <td style={styles.td}>{row.Victims}</td>
                          <td style={styles.td}>{row.Delhi}</td>
                          <td style={styles.td}>{row.Victims}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="main mt-4 aboutpara">
                <p>
                  <span className="fw-bold">
                    3. Prevalent SLL (Special &amp; Local Laws) Crimes against
                    Children in Cities:{" "}
                  </span>{" "}
                  The Protection of Children from Sexual Offences Act (POCSO
                  Act) is the most significant SLL crime and victims are
                  predominantly girls. for cyber crimes, most cases deal with
                  “Publishing or Transmitting of material depicting children in
                  sexually explicit act”
                </p>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                        {["Crime category", "Incidents", "Victims"].map(
                          (header, idx) => (
                            <th
                              key={idx}
                              style={{ ...styles.th, minWidth: "180px" }}
                            >
                              {header}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {data10.map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#f2f2f2" : "#ffffff",
                          }}
                        >
                          <td style={styles.td}>{row.Crime}</td>

                          <td style={styles.td}>{row.Incidents}</td>
                          <td style={styles.td}>{row.Victims}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="main mt-4 aboutpara">
                <p>
                  <span className="fw-bold">
                    4. Police Disposal of Cases (Metropolitan Cities):{" "}
                  </span>{" "}
                </p>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                        {[
                          "Police disposal metric",
                          "Number of Cases in 2022",
                        ].map((header, idx) => (
                          <th
                            key={idx}
                            style={{ ...styles.th, minWidth: "180px" }}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data11.map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#f2f2f2" : "#ffffff",
                          }}
                        >
                          <td style={styles.td}>{row.Police}</td>

                          <td style={styles.td}>{row.Number}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div style={{ overflowX: "auto" }} className="mt-4">
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                        {[
                          "Crime Category",
                          "Charge-sheeting Rate (%)",
                          "Pendency Percentage (%)",
                        ].map((header, idx) => (
                          <th
                            key={idx}
                            style={{ ...styles.th, minWidth: "180px" }}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data12.map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#f2f2f2" : "#ffffff",
                          }}
                        >
                          <td style={styles.td}>{row.Crime}</td>

                          <td style={styles.td}>{row.Chargesheeting}</td>
                          <td style={styles.td}>{row.Pendency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="main mt-4 aboutpara">
                <p>
                  <span className="fw-bold">
                    5. Court Disposal of Cases (Metropolitan Cities):{" "}
                  </span>{" "}
                  The numbers indicate a severe backlog in the judicial process.
                </p>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                        {[
                          "Court disposal metric",
                          "Number of Cases in 2022",
                        ].map((header, idx) => (
                          <th
                            key={idx}
                            style={{ ...styles.th, minWidth: "180px" }}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data13.map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#f2f2f2" : "#ffffff",
                          }}
                        >
                          <td style={styles.td}>{row.Court}</td>

                          <td style={styles.td}>{row.Number}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div style={{ overflowX: "auto" }} className="mt-4">
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <tbody>
                      <tr>
                        <td style={styles.td}>Crime Category</td>

                        <td style={styles.td}>Conviction Rate (%)</td>
                        <td style={styles.td}>Pendency Percentage (%)</td>
                      </tr>
                      <tr style={{ backgroundColor: "#f2f2f2" }}>
                        <td style={styles.td}>Crimes against children</td>

                        <td style={styles.td}>31.7</td>
                        <td style={styles.td}>94.9</td>
                      </tr>
                      <tr>
                        <td style={styles.td}>POCSO Act cases</td>

                        <td style={styles.td}>29.2</td>
                        <td style={styles.td}>93.4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="main mt-4 aboutpara">
                <p>
                  <span className="fw-bold">
                    6. Disposal of Persons Arrested (Metropolitan Cities):{" "}
                  </span>{" "}
                </p>

                <div style={{ overflowX: "auto" }} className="">
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                        {["Processing post arrest", "Males", "Females"].map(
                          (header, idx) => (
                            <th
                              key={idx}
                              style={{ ...styles.th, minWidth: "180px" }}
                            >
                              {header}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {data15.map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#f2f2f2" : "#ffffff",
                          }}
                        >
                          <td style={styles.td}>{row.Processing}</td>

                          <td style={styles.td}>{row.Male}</td>
                          <td style={styles.td}>{row.Female}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <h4
                className="fw-bold mt-3 bluetxt yellowclr"
                style={styles.subaccordionHeader}
              >
                Juveniles in Conflict with Law (States/UTs)
              </h4>

              <div className="main mt-4 aboutpara">
                <p>
                  <span className="fw-bold">
                    1. National Trends in Juvenile Crime Committed (States and
                    UT’s):
                  </span>{" "}
                  The total number of cases of crime committed by juveniles in
                  all of India has been on the upward trend for the past three
                  years. There are several states that have rates significantly
                  higher than the national average. Year
                </p>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                        {["Year", "Cases of Crime by Juveniles (India)"].map(
                          (header, idx) => (
                            <th
                              key={idx}
                              style={{ ...styles.th, minWidth: "150px" }}
                            >
                              {header}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {data16.map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#f2f2f2" : "#ffffff",
                          }}
                        >
                          <td style={styles.td}>{row.Year}</td>
                          <td style={styles.td}>{row.Cases}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                  <div style={{ overflowX: "auto" }} className="mt-4">
                  <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                        {["Area", "Rate per Lakh Juvenile Population"].map(
                          (header, idx) => (
                            <th
                              key={idx}
                              style={{ ...styles.th, minWidth: "150px" }}
                            >
                              {header}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {data17.map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#f2f2f2" : "#ffffff",
                          }}
                        >
                          <td style={styles.td}>{row.area}</td>
                          <td style={styles.td}>{row.rate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="main mt-4 aboutpara">
                <p>
                  <span className="fw-bold">
                    5. Disposal of Juveniles Apprehended:
                  </span>{" "}
                  In 2022, there were a total of 41,614 total juveniles for
                  disposal. Of which, a significant number of cases - 23,892 -
                  remained pending disposal at the end of the year. Out of those
                  disposed, the percentage of juveniles held guilty was 58.7%.
                </p>

                <img
                  src={image}
                  alt=""
                  className="w-100"
                  style={{ height: "550px" }}
                />
              </div>

              <div className="main mt-4 aboutpara">
                <p>
                  <span className="fw-bold">
                    6. Education and Family Background of Juveniles Apprehended:
                  </span>{" "}
                  A substantial portion of apprehended juveniles have an
                  education level of “Upto Primary” or “Above Primary to
                  Matric”. The vast majority of juveniles apprehended were
                  “Living with Parents”.
                </p>
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
