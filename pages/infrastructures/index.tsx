import type { GetServerSideProps } from "next";

import dynamic from "next/dynamic";
import axios from "axios";
import { useEffect, useState } from "react";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsBuildingX } from "react-icons/bs";

const BuildingTable = dynamic(
  () => import("@/components/infrastructure/BuildingTable"),
  { ssr: false }
);

type Building = {
  barangayHalls: Record<string, any>[];
  educationalBuildings: Record<string, any>[];
  governmentOffices: Record<string, any>[];
};

export const getServerSideProps: GetServerSideProps<Building> = async () => {
  try {
    const responseBarangayHalls = await axios.get(
      `${process.env.NEXT_SERVER_URL}/api/v1/barangay_halls`
    );
    const responseEducationalBuildings = await axios.get(
      `${process.env.NEXT_SERVER_URL}/api/v1/educational_buildings`
    );
    const responseGovernmentOffices = await axios.get(
      `${process.env.NEXT_SERVER_URL}/api/v1/government_offices`
    );

    const barangayHalls = responseBarangayHalls.data;
    const educationalBuildings = responseEducationalBuildings.data;
    const governmentOffices = responseGovernmentOffices.data;

    return {
      props: {
        barangayHalls: barangayHalls,
        educationalBuildings: educationalBuildings,
        governmentOffices: governmentOffices,
      },
    };
  } catch (e) {
    console.error(e);

    return {
      props: {
        barangayHalls: [],
        educationalBuildings: [],
        governmentOffices: [],
      },
    };
  }
};

function Infrastructure({
  barangayHalls,
  educationalBuildings,
  governmentOffices,
}: {
  barangayHalls: any;
  educationalBuildings: any;
  governmentOffices: any;
}) {
  const [buildings, setBuildings] = useState<Record<string, any>[]>([]);
  const [buildingNumber, setBuildingNumber] = useState<number>(-1);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    if (category === "barangay halls") setBuildings(barangayHalls);
    else if (category === "educational buildings")
      setBuildings(educationalBuildings);
    else if (category === "government offices") setBuildings(governmentOffices);
    setBuildingNumber(-1);
  }, [category]);

  const setBuildingObject = (event: any) => {
    const index = event.target.value;
    setBuildingNumber(index);
  };

  return (
    <section>
      <h1 className="text-center my-5">Buildings Informations</h1>
      <Row>
        <Col sm={12} md={6}>
          <FloatingLabel
            label="Building Category"
            className="mb-3"
            onChange={(event: any) => setCategory(event.target.value)}
          >
            <Form.Select>
              <option>Select category</option>
              <option value="barangay halls">Barangay Halls</option>
              <option value="educational buildings">
                Educational Buildings
              </option>
              <option value="government offices">Government Offices</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col sm={12} md={6}>
          <FloatingLabel label="Building Name" onChange={setBuildingObject}>
            <Form.Select value={buildingNumber}>
              <option value={-1}>Choose a building</option>
              {buildings.map((building: Record<string, any>, index: number) => (
                <option key={index} value={index}>
                  {building.building}
                </option>
              ))}
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
      {buildingNumber != -1 ? (
        <BuildingTable
          category={category}
          building={buildings[buildingNumber]}
        />
      ) : (
        <div className="text-center text-secondary my-5">
          <BsBuildingX style={{ fontSize: "100px" }} />
          <p className="fs-4 mt-3">No building to show</p>
        </div>
      )}
    </section>
  );
}

export default Infrastructure;
