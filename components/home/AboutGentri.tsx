import Image from "next/image";

export default function AboutGentri() {
  return (
    <section className="my-5">
      <h3 className="mb-4 text-center">About General Trias, Cavite</h3>
      <div className="d-block">
        <Image
          src="/images/city/gentri.jpg"
          alt="Logo"
          width="400"
          height="400"
          className="d-block mx-auto rounded"
        />
      </div>
      <div className="my-4">
        <p className="text-center light-text">
          General Trias, a city in Cavite, Philippines, is a progressive town
          where numerous government structures fulfill important community
          duties. These structures include executive offices, public service
          buildings, medical facilities, educational institutions, and others.
          For an assessment of the integrity, operation, and compliance of these
          buildings with set norms and regulations, it is important to conduct
          infrastructure audits.
          <br />
          <br />
          An infrastructure audit in the city of General Trias, Cavite, is an
          important procedure that evaluates the condition, safety, and
          efficiency of public facilities. We can identify defects that reflect
          the building's vulnerability to hazards like earthquakes, typhoons,
          floods, landslides, etc. by conducting site inspections and evaluating
          available documents. An infrastructure audit is a critical procedure
          that identifies the current condition of the building and its
          vulnerability to hazards.
        </p>
      </div>
    </section>
  );
}
