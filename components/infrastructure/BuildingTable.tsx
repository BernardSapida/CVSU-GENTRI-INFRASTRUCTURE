import Image from "next/image";
import Table from "react-bootstrap/Table";

export default function Building({
  category,
  building,
}: {
  category: string;
  building: Record<string, any>;
}) {
  return (
    <>
      <div className="d-flex gap-4 flex-wrap justify-content-center mt-4 mb-5 building-data">
        <Image
          src={`/images/${category}/${building["building"].toUpperCase()}.jpg`}
          alt="Building Image"
          width="300"
          height="400"
          priority={true}
          className="rounded"
        />
        <Table hover bordered>
          <tbody>
            <tr>
              <td className="text-center bg-dark text-white" colSpan={2}>
                Building Details
              </td>
            </tr>
            <tr>
              <td className="ps-5 name">Building Name</td>
              <td>{building["building"] || "None"}</td>
            </tr>
            <tr>
              <td className="ps-5 name">Location</td>
              <td>{building["location"] || "None"}</td>
            </tr>
            <tr>
              <td className="ps-5 name">Latitude</td>
              <td>{building["latitude"] || "None"}</td>
            </tr>
            <tr>
              <td className="ps-5 name">Longtitude</td>
              <td>{building["longtitude"] || "None"}</td>
            </tr>
            <tr>
              <td className="ps-5 name">NCSP Year</td>
              <td>{building["ncsp year"] || "None"}</td>
            </tr>
            <tr>
              <td className="ps-5 name">Number of Storey</td>
              <td>{building["number of storey"] || "None"}</td>
            </tr>
            <tr>
              <td className="ps-5 name">Year Established</td>
              <td>{building["year established"] || "None"}</td>
            </tr>
            <tr>
              <td className="ps-5 name">Type of Building</td>
              <td>{building["type of building"] || "None"}</td>
            </tr>
            <tr>
              <td className="ps-5 name">Type of Structure</td>
              <td>{building["type of structure"] || "None"}</td>
            </tr>
            <tr>
              <td className="ps-5 name">Design Occupancy</td>
              <td>{building["design occupancy"] || "None"}</td>
            </tr>
            <tr>
              <td className="ps-5 name">Condition Information</td>
              <td>
                {building["condition info"].length == 0
                  ? "None"
                  : building["condition info"].map(
                      (info: any, index: number) => <p>{info}</p>
                    )}
              </td>
            </tr>
            <tr>
              <td className="ps-5 name">Hazard Information</td>
              <td>{building["hazard info"] || "None"}</td>
            </tr>
            <tr>
              <td className="ps-5 name">RVS Score</td>
              <td>{building["rvs score"] || "None"}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <p className="text-center fs-3 fw-bold">Building Defects</p>
      <div className="d-flex gap-3 flex-wrap justify-content-center">
        {building.defects.length > 0 ? (
          building.defects.map((defect: any, index: number) => (
            <div className="rounded shadow">
              <Image
                key={index}
                src={`/images/${category}/${building[
                  "building"
                ].toUpperCase()}/${defect.image}`}
                alt={defect.description}
                width="300"
                height="300"
                priority={true}
                className="rounded"
              />
              <p className="text-center mt-2">{defect.descriptions}</p>
            </div>
          ))
        ) : (
          <div className="text-center text-secondary">
            <p className="fs-6">No defects found</p>
          </div>
        )}
      </div>
    </>
  );
}
