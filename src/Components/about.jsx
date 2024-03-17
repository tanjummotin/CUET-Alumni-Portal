import React from "react";
import image3 from "../assets/jungle.jpg";

export default function About() {
  return (
    <>
      <div className="container-fluid">
        <br />
        <img
          src={image3}
          className="d-block w-100"
          style={{ height: "200px", filter: "blur(2px)" }}
          alt="Image 3"
        />
      </div>
      <div
        className="container"
        style={{
          fontSize: "20px",
          fontFamily: "'Times New Roman', Times, serif",
        }}
      >
        <br></br>
        <h3>OUR MISSION</h3>
        <p>
          To create a purposeful and forward-looking organization for the alumni
          of CUET for their social, cultural, and professional pursuits; for
          fostering greater cohesion and fellowship among themselves; for
          rendering all possible support to the transformation of the beloved
          alma mater into an institution of higher learning in technical and
          science education that is among the best in the world; and for
          contributing to accelerated and sustainable national development.
        </p>
        <h3>OUR OBJECTIVE</h3>
        <p>
          <ol>
            <li>
              Develop stronger bond and cohesion among the members and
              well-wishers of the Association.
            </li>
            <li>
              Enhance and uphold professional competency and integrity of the
              members.
            </li>
            <li>
              Appropriately link, liaise, and complement the activities of the
              various societies or clubs of CUET graduates that may exist in
              Bangladesh and in foreign countries.
            </li>
            <li>
              Provide support to the members and their families as well CUET
              students/staff members in distress and to organize humanitarian
              activities in times of national calamities.
            </li>
            <li>
              In collaboration and consultation with CUET authority, carry out
              the following activities:
              <ol type="a">
                <li>
                  Enhance, uphold and promote the image and heritage of CUET as
                  a Center of Excellence in technical and science education and
                  research in Bangladesh and abroad.
                </li>
                <li>
                  Support efforts of CUET and other appropriate organizations
                  for enhancing the quality of education and research and for
                  establishing state-of-the-art educational and research
                  facilities at CUET, including helping students and faculty
                  members to participate in conferences, seminars and
                  competitions.
                </li>
                <li>
                  Raise funds from Members and Patrons of the Association as
                  well as from alumni at large, individuals and organizations at
                  home and abroad for implementing development projects that
                  have been chosen jointly with CUET authority for purposes
                  indicated in (b) above.
                </li>
                <li>
                  Facilitate intellectual exchanges between CUET and advanced
                  universities and institutions in other countries.
                </li>
                <li>
                  Offer career counselling to students, graduates and others
                  associated with CUET.
                </li>
              </ol>
            </li>
            <li>
              Organize activities and information campaigns to continually
              expand its membership base and to collect contributions, donations
              and grants from Members, Patrons, individuals, companies, firms,
              semi-government and government organizations, NGOs, autonomous
              bodies, and societies that are local or foreign based. These
              contributions will be the primary financial resource required for
              implementing the various programs and activities of the
              Association for achieving its objectives.
            </li>
            <li>
              Develop and maintain a database of all members, which would
              include information on areas of their special expertise and
              interest, and maintaining regular communication with them through
              mails, publications, and web page that would facilitate their
              participation in the activities of the Association.
            </li>
            <li>
              Arrange social activities such as reunions, picnics, dinners,
              cultural programs, and exchange visits for greater social cohesion
              among members.
            </li>
            <li>
              Conduct conferences, seminars, symposia, workshops, and discussion
              forums on relevant national issues that are of interest to members
              and others.
            </li>
            <li>
              Support research works in relevant fields and publication of
              appropriate books and journals on relevant subjects.
            </li>
            <li>
              Set guidelines for ethics and disciplines for the members of the
              Association.
            </li>
            <li>
              Liaise with other similar associations, institutes and
              universities.
            </li>
          </ol>
        </p>
      </div>
    </>
  );
}
