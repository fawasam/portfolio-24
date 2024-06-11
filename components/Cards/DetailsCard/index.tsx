import React from "react";

const DetailesCard = ({ data }: { data: any }) => {
  return (
    <section>
      <div>
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailesCard;
