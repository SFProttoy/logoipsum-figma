import Image from "next/image";

const Section5 = () => {
  return (
    <section className="section-5 text-center">
      <h1 className="common-h1">
        Lorem Ipsum is simply dummy text of <br /> the printing and typesetting
      </h1>
      <p className="common-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        <br />
        tempor incididunt ut labore
      </p>

      <Image
        src="/images/chart.png"
        width="1300"
        height="304"
        alt="chart"
        className="img-fluid mt-5 img-chart"
      />

      <div className="tables">
        <div className="table-1">
          <h5 className="title">Facebook data</h5>
          <table>
            <thead>
              <tr>
                <th>Ad name</th>
                <th>Orders</th>
                <th>ROAS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="column-1">All_25+_Static_split_screen</td>
                <td className="column-2">12</td>
                <td className="column-3">3.2</td>
              </tr>

              <tr>
                <td className="column-1">M_25+_Static_split_screen_2</td>
                <td className="column-2">2</td>
                <td className="column-3" style={{ backgroundColor: "#F6D45B" }}>
                  1.5
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-1">
          <h5 className="title">Logoipsum data</h5>
          <table>
            <thead>
              <tr>
                <th>Ad name</th>
                <th>Orders</th>
                <th>ROAS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="column-1">All_25+_Static_split_screen</td>
                <td className="column-2">10</td>
                <td className="column-3">2.8</td>
              </tr>

              <tr>
                <td className="column-1">M_25+_Static_split_screen_2</td>
                <td className="column-2">8</td>
                <td className="column-3" style={{ backgroundColor: "#64B992" }}>
                  3
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Section5;
